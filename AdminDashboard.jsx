import React, { useState, useEffect, useCallback } from "react";

// ─── API base ─────────────────────────────────────────────────────────────────
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("adminToken");
}

async function apiFetch(path, options) {
  const token = getToken();
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = "Bearer " + token;
  const res = await fetch(API_BASE + path, Object.assign({ headers }, options || {}));
  if (!res.ok) throw new Error(res.status + " " + res.statusText);
  return res.json();
}

// ─── Design tokens ─────────────────────────────────────────────────────────────
const CYAN = "#00B4FF";
const BG = "linear-gradient(135deg,#0a0e27 0%,#1a1a2e 50%,#16213e 100%)";
const CARD = "rgba(0,0,0,0.35)";
const BORDER = "1px solid rgba(0,180,255,0.3)";

// ─── Primitive components ──────────────────────────────────────────────────────

function Spinner() {
  return (
    <div style={{ textAlign: "center", padding: "60px", color: CYAN, fontSize: "18px" }}>
      ⟳ Loading…
    </div>
  );
}

function ErrBanner({ msg, onClose }) {
  return (
    <div style={{ background: "rgba(220,50,50,0.18)", border: "1px solid rgba(220,50,50,0.55)", borderRadius: 10, padding: "12px 18px", marginBottom: 18, display: "flex", justifyContent: "space-between", color: "#ff6b6b" }}>
      <span>⚠ {msg}</span>
      {onClose && <button onClick={onClose} style={{ background: "none", border: "none", color: "#ff6b6b", cursor: "pointer", fontSize: 20 }}>×</button>}
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 style={{ fontSize: 26, fontWeight: 900, color: CYAN, marginBottom: 24 }}>{children}</h2>;
}

function Btn({ children, onClick, type = "button", variant = "primary", disabled = false, style: extra = {} }) {
  const map = {
    primary: { background: CYAN, color: "#000" },
    danger:  { background: "rgba(220,50,50,0.8)", color: "#fff" },
    ghost:   { background: "rgba(0,180,255,0.1)", color: CYAN, border: BORDER },
    success: { background: "rgba(0,200,100,0.8)", color: "#fff" },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1, border: "none", transition: "all 0.2s", ...map[variant], ...extra }}
    >
      {children}
    </button>
  );
}

function Field({ label, value, onChange, type = "text", placeholder = "", required = false, rows = 0 }) {
  const base = { width: "100%", background: "rgba(0,0,0,0.5)", border: BORDER, borderRadius: 8, color: "#fff", padding: "10px 14px", fontSize: 14, boxSizing: "border-box" };
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 5 }}>{label}{required && <span style={{ color: CYAN }}> *</span>}</label>}
      {rows > 1
        ? <textarea value={value} onChange={onChange} placeholder={placeholder} required={required} rows={rows} style={{ ...base, resize: "vertical" }} />
        : <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} style={base} />}
    </div>
  );
}

function Modal({ isOpen, title, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#0f172a", border: BORDER, borderRadius: 16, padding: 30, width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
          <h3 style={{ color: CYAN, fontSize: 20, fontWeight: 800 }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Table({ cols, rows, onEdit, onDelete }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {cols.map(c => (
              <th key={c.key} style={{ padding: "12px 16px", textAlign: "left", borderBottom: "1px solid rgba(0,180,255,0.2)", color: CYAN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {c.label}
              </th>
            ))}
            {(onEdit || onDelete) && <th style={{ padding: "12px 16px", color: CYAN, fontSize: 12, textTransform: "uppercase" }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0
            ? <tr><td colSpan={cols.length + (onEdit || onDelete ? 1 : 0)} style={{ textAlign: "center", padding: 40, color: "rgba(255,255,255,0.4)" }}>No records found</td></tr>
            : rows.map((row, i) => (
                <tr key={row._id || row.id || i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(0,0,0,0.1)" : "transparent" }}>
                  {cols.map(c => (
                    <td key={c.key} style={{ padding: "12px 16px", color: "rgba(255,255,255,0.85)" }}>
                      {c.render ? c.render(row[c.key], row) : (row[c.key] != null ? String(row[c.key]) : "—")}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
                      {onEdit && <Btn variant="ghost" onClick={() => onEdit(row)} style={{ marginRight: 8, padding: "6px 14px", fontSize: 12 }}>Edit</Btn>}
                      {onDelete && <Btn variant="danger" onClick={() => onDelete(row)} style={{ padding: "6px 14px", fontSize: 12 }}>Delete</Btn>}
                    </td>
                  )}
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

// ─── CRUD hook ────────────────────────────────────────────────────────────────
function useCRUD(endpoint) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try { const d = await apiFetch(endpoint); setItems(Array.isArray(d) ? d : []); }
    catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  const create = async (data) => {
    const created = await apiFetch(endpoint, { method: "POST", body: JSON.stringify(data) });
    setItems(prev => [...prev, created]);
  };

  const update = async (item, data) => {
    const id = item._id || item.id;
    const updated = await apiFetch(endpoint + "/" + id, { method: "PUT", body: JSON.stringify(data) });
    setItems(prev => prev.map(x => (x._id || x.id) === id ? updated : x));
  };

  const remove = async (item) => {
    const id = item._id || item.id;
    await apiFetch(endpoint + "/" + id, { method: "DELETE" });
    setItems(prev => prev.filter(x => (x._id || x.id) !== id));
  };

  return { items, loading, error, setError, load, create, update, remove };
}

// ─── Generic section builder ──────────────────────────────────────────────────
function makeSection({ endpoint, title, icon, singular, blank, cols, FormFields, searchKeys = ["name"], filterOpts }) {
  return function Section() {
    const crud = useCRUD(endpoint);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ ...blank });
    const [saving, setSaving] = useState(false);
    const [search, setSearch] = useState("");
    const [filterVal, setFilterVal] = useState("");

    const f = k => ({ value: form[k] || "", onChange: e => setForm(p => ({ ...p, [k]: e.target.value })) });
    const sf = (k, v) => setForm(p => ({ ...p, [k]: v }));

    const openCreate = () => { setEditing(null); setForm({ ...blank }); setModal(true); };
    const openEdit = item => { setEditing(item); setForm({ ...blank, ...item }); setModal(true); };

    const handleDelete = async item => {
      if (!window.confirm("Delete this record?")) return;
      try { await crud.remove(item); } catch (e) { crud.setError(e.message); }
    };

    const handleSave = async e => {
      e.preventDefault(); setSaving(true);
      try {
        if (editing) await crud.update(editing, form); else await crud.create(form);
        setModal(false);
      } catch (e) { crud.setError(e.message); }
      finally { setSaving(false); }
    };

    const visible = crud.items.filter(item => {
      const s = search.toLowerCase();
      const matchSearch = !s || searchKeys.some(k => (item[k] || "").toLowerCase().includes(s));
      const matchFilter = !filterVal || (filterOpts && filterOpts.fn ? filterOpts.fn(item, filterVal) : true);
      return matchSearch && matchFilter;
    });

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <SectionTitle>{icon} {title}</SectionTitle>
          <Btn onClick={openCreate}>+ Add {singular}</Btn>
        </div>

        {crud.error && <ErrBanner msg={crud.error} onClose={() => crud.setError(null)} />}

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <input
            placeholder="🔍 Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: 200, background: CARD, border: BORDER, borderRadius: 8, color: "#fff", padding: "10px 14px", fontSize: 14 }}
          />
          {filterOpts && (
            <select value={filterVal} onChange={e => setFilterVal(e.target.value)}
              style={{ background: CARD, border: BORDER, borderRadius: 8, color: "#fff", padding: "10px 14px", fontSize: 14 }}>
              {filterOpts.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          )}
          <Btn variant="ghost" onClick={crud.load}>↻ Refresh</Btn>
        </div>

        <div style={{ background: CARD, border: BORDER, borderRadius: 14, overflow: "hidden" }}>
          {crud.loading ? <Spinner /> : <Table cols={cols} rows={visible} onEdit={openEdit} onDelete={handleDelete} />}
        </div>

        <Modal isOpen={modal} title={(editing ? "Edit " : "Add ") + singular} onClose={() => setModal(false)}>
          <form onSubmit={handleSave}>
            <FormFields form={form} f={f} sf={sf} />
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 8 }}>
              <Btn variant="ghost" onClick={() => setModal(false)}>Cancel</Btn>
              <Btn type="submit" disabled={saving}>{saving ? "Saving…" : editing ? "Save Changes" : "Add " + singular}</Btn>
            </div>
          </form>
        </Modal>
      </div>
    );
  };
}

// ─── 1. Dashboard Home ────────────────────────────────────────────────────────
function DashboardHome({ onNavigate }) {
  const [stats, setStats] = useState({ players: 127, events: 18, coaches: 24, rankings: 5 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([apiFetch("/players"), apiFetch("/events"), apiFetch("/coaches"), apiFetch("/rankings")])
      .then(([p, ev, c, r]) => {
        setStats({
          players:  p.status  === "fulfilled" ? (Array.isArray(p.value)  ? p.value.length  : p.value?.total  ?? 127) : 127,
          events:   ev.status === "fulfilled" ? (Array.isArray(ev.value) ? ev.value.length : ev.value?.total ?? 18)  : 18,
          coaches:  c.status  === "fulfilled" ? (Array.isArray(c.value)  ? c.value.length  : c.value?.total  ?? 24)  : 24,
          rankings: r.status  === "fulfilled" ? (Array.isArray(r.value)  ? r.value.length  : r.value?.total  ?? 5)   : 5,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { icon: "👥", label: "Total Players",  value: stats.players,  section: "players"  },
    { icon: "🎪", label: "Total Events",   value: stats.events,   section: "events"   },
    { icon: "🏀", label: "Active Coaches", value: stats.coaches,  section: "coaches"  },
    { icon: "📊", label: "Rankings Lists", value: stats.rankings, section: "rankings" },
  ];

  const actions = [
    { emoji: "➕", label: "Add Player",       section: "players"    },
    { emoji: "📊", label: "Update Rankings",   section: "rankings"   },
    { emoji: "🎪", label: "Create Event",      section: "events"     },
    { emoji: "🎬", label: "Upload Film",       section: "media"      },
    { emoji: "📋", label: "Add Recruit",       section: "recruiting" },
    { emoji: "📈", label: "View Analytics",    section: "analytics"  },
  ];

  const activity = [
    { time: "2 hours ago",  action: "New player added: Marcus Johnson",          icon: "👤" },
    { time: "4 hours ago",  action: "Rankings updated – Class of 2026",          icon: "📊" },
    { time: "1 day ago",    action: "New event created: PNW Showcase",           icon: "🎪" },
    { time: "2 days ago",   action: "Coach account added: Coach Williams",       icon: "🏀" },
    { time: "3 days ago",   action: "Highlight reel uploaded: Jalen Brooks",     icon: "🎬" },
    { time: "4 days ago",   action: "Recruiting note added: Isaiah Thomas",      icon: "📋" },
  ];

  if (loading) return <Spinner />;

  return (
    <div>
      <SectionTitle>🎛️ Admin Dashboard</SectionTitle>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginBottom: 40 }}>
        {cards.map(c => (
          <div
            key={c.label}
            onClick={() => onNavigate(c.section)}
            style={{ background: CARD, border: BORDER, borderRadius: 16, padding: 24, textAlign: "center", cursor: "pointer", transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.border = "1px solid " + CYAN; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.border = BORDER; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: CYAN }}>{c.value}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ marginBottom: 40 }}>
        <h3 style={{ color: CYAN, fontSize: 18, fontWeight: 800, marginBottom: 14 }}>⚡ Quick Actions</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14 }}>
          {actions.map(a => (
            <button
              key={a.label}
              onClick={() => onNavigate(a.section)}
              style={{ background: "rgba(0,180,255,0.08)", border: BORDER, borderRadius: 12, padding: "16px 12px", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 700, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,180,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,180,255,0.08)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{a.emoji}</div>
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div>
        <h3 style={{ color: CYAN, fontSize: 18, fontWeight: 800, marginBottom: 14 }}>🕒 Recent Activity</h3>
        <div style={{ background: CARD, border: BORDER, borderRadius: 14, overflow: "hidden" }}>
          {activity.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 20px", borderBottom: i < activity.length - 1 ? "1px solid rgba(0,180,255,0.1)" : "none" }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ flex: 1, fontSize: 14, color: "rgba(255,255,255,0.88)" }}>{item.action}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", whiteSpace: "nowrap" }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 2. Player Management ─────────────────────────────────────────────────────
const PlayerManagement = makeSection({
  endpoint: "/players", title: "Player Management", icon: "👥", singular: "Player",
  blank: { name:"", position:"", classYear:"", height:"", weight:"", school:"", team:"", city:"", state:"", gpa:"", notes:"" },
  searchKeys: ["name", "school", "position"],
  cols: [
    { key:"name",      label:"Name"     },
    { key:"position",  label:"Pos"      },
    { key:"classYear", label:"Class"    },
    { key:"height",    label:"Height"   },
    { key:"school",    label:"School"   },
    { key:"city",      label:"City"     },
  ],
  FormFields: ({ f }) => (
    <div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
        <Field label="Full Name"  required placeholder="e.g. Marcus Johnson" {...f("name")} />
        <Field label="Position"   placeholder="PG / SG / SF"                  {...f("position")} />
        <Field label="Class Year" placeholder="e.g. 2026"                     {...f("classYear")} />
        <Field label="Height"     placeholder="e.g. 6 ft 4 in"               {...f("height")} />
        <Field label="Weight"     placeholder="e.g. 185 lbs"                  {...f("weight")} />
        <Field label="GPA"        placeholder="e.g. 3.8"                      {...f("gpa")} />
        <Field label="School"     placeholder="High school"                   {...f("school")} />
        <Field label="AAU Team"   placeholder="Team name"                     {...f("team")} />
        <Field label="City"       placeholder="City"                          {...f("city")} />
        <Field label="State"      placeholder="State"                         {...f("state")} />
      </div>
      <Field label="Notes" rows={3} placeholder="Scouting notes…"             {...f("notes")} />
    </div>
  ),
});

// ─── 3. Rankings Management ───────────────────────────────────────────────────
const RankingsManagement = makeSection({
  endpoint: "/rankings", title: "Rankings Management", icon: "📊", singular: "Ranking",
  blank: { title:"", classYear:"", description:"", tierNotes:"" },
  searchKeys: ["title", "classYear"],
  cols: [
    { key:"title",       label:"Title"      },
    { key:"classYear",   label:"Class Year" },
    { key:"description", label:"Description"},
    { key:"players",     label:"Players",   render: v => <span style={{ color: CYAN }}>{Array.isArray(v) ? v.length : 0} players</span> },
  ],
  FormFields: ({ f }) => (
    <div>
      <Field label="Ranking Title" required placeholder="e.g. Top 25 Class of 2026" {...f("title")} />
      <Field label="Class Year"    placeholder="e.g. 2026"                           {...f("classYear")} />
      <Field label="Description"   rows={3} placeholder="Overview…"                  {...f("description")} />
      <Field label="Tier Notes"    rows={3} placeholder="Notes for each tier…"       {...f("tierNotes")} />
    </div>
  ),
});

// ─── 4. Event Management ──────────────────────────────────────────────────────
const EventManagement = makeSection({
  endpoint: "/events", title: "Event Management", icon: "🎪", singular: "Event",
  blank: { name:"", type:"", date:"", location:"", city:"", state:"", capacity:"", registrationUrl:"", description:"" },
  searchKeys: ["name", "location", "city"],
  cols: [
    { key:"name",     label:"Event"    },
    { key:"type",     label:"Type"     },
    { key:"date",     label:"Date",     render: v => v ? new Date(v).toLocaleDateString() : "—" },
    { key:"location", label:"Venue"    },
    { key:"city",     label:"City"     },
    { key:"capacity", label:"Capacity" },
  ],
  FormFields: ({ f }) => (
    <div>
      <Field label="Event Name" required placeholder="e.g. PNW Summer Showcase" {...f("name")} />
      <Field label="Event Type" placeholder="Showcase / Camp / Tournament"       {...f("type")} />
      <Field label="Date"       type="date"                                       {...f("date")} />
      <Field label="Venue"      placeholder="Arena or gym name"                   {...f("location")} />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
        <Field label="City"             placeholder="City"          {...f("city")} />
        <Field label="State"            placeholder="State"         {...f("state")} />
        <Field label="Capacity"         placeholder="e.g. 500"      {...f("capacity")} />
        <Field label="Registration URL" placeholder="https://…"     {...f("registrationUrl")} />
      </div>
      <Field label="Description" rows={3} placeholder="Event details…"          {...f("description")} />
    </div>
  ),
});

// ─── 5. Analytics Dashboard ───────────────────────────────────────────────────
function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/analytics")
      .then(setData)
      .catch(() => setData({
        totalViews: 14820, uniqueVisitors: 3420, playerViews: 8940, eventViews: 2340, avgSessionMin: 4.7,
        topPlayers: [
          { name: "Jalen Brooks",   views: 2410, position: "PG" },
          { name: "Marcus Johnson", views: 1890, position: "SG" },
          { name: "Devon Williams", views: 1640, position: "SF" },
          { name: "Isaiah Thomas",  views: 1210, position: "PF" },
          { name: "Kai Henderson",  views: 980,  position: "C"  },
        ],
        monthlyViews: [820,1040,960,1300,1500,1800,1640,2100,1980,2200,2420,2680],
        trafficSources: [
          { source: "Direct",       pct: 38 },
          { source: "Social Media", pct: 29 },
          { source: "Search",       pct: 21 },
          { source: "Referral",     pct: 12 },
        ],
      }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (!data) return null;

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const maxV = Math.max(...data.monthlyViews);
  const maxP = data.topPlayers[0].views;

  return (
    <div>
      <SectionTitle>📈 Analytics Dashboard</SectionTitle>

      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:16, marginBottom:32 }}>
        {[
          { icon:"👁",  label:"Total Views",      val: data.totalViews?.toLocaleString()    },
          { icon:"👤",  label:"Unique Visitors",  val: data.uniqueVisitors?.toLocaleString()},
          { icon:"🏀",  label:"Player Views",     val: data.playerViews?.toLocaleString()   },
          { icon:"🎪",  label:"Event Views",      val: data.eventViews?.toLocaleString()    },
          { icon:"⏱",  label:"Avg Session (min)", val: data.avgSessionMin                  },
        ].map(k => (
          <div key={k.label} style={{ background:CARD, border:BORDER, borderRadius:14, padding:20, textAlign:"center" }}>
            <div style={{ fontSize:28, marginBottom:8 }}>{k.icon}</div>
            <div style={{ fontSize:26, fontWeight:900, color:CYAN }}>{k.val}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)", marginTop:4 }}>{k.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:24, marginBottom:24 }}>
        {/* Bar chart */}
        <div style={{ background:CARD, border:BORDER, borderRadius:14, padding:24 }}>
          <h3 style={{ color:CYAN, fontWeight:800, marginBottom:20 }}>Monthly Views</h3>
          <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:160 }}>
            {data.monthlyViews.map((v,i) => (
              <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                <div title={months[i]+": "+v} style={{ width:"100%", background:`rgba(0,180,255,${(0.3+0.7*(v/maxV)).toFixed(2)})`, height:Math.round((v/maxV)*140)+"px", borderRadius:"4px 4px 0 0" }} />
                <span style={{ fontSize:9, color:"rgba(255,255,255,0.4)" }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic sources */}
        <div style={{ background:CARD, border:BORDER, borderRadius:14, padding:24 }}>
          <h3 style={{ color:CYAN, fontWeight:800, marginBottom:20 }}>Traffic Sources</h3>
          {data.trafficSources.map(s => (
            <div key={s.source} style={{ marginBottom:14 }}>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, marginBottom:4 }}>
                <span>{s.source}</span><span style={{ color:CYAN }}>{s.pct}%</span>
              </div>
              <div style={{ background:"rgba(255,255,255,0.1)", borderRadius:4, height:8 }}>
                <div style={{ width:s.pct+"%", background:CYAN, borderRadius:4, height:8 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top players */}
      <div style={{ background:CARD, border:BORDER, borderRadius:14, padding:24 }}>
        <h3 style={{ color:CYAN, fontWeight:800, marginBottom:20 }}>🔥 Most Viewed Players</h3>
        {data.topPlayers.map((p,i) => (
          <div key={p.name} style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
            <span style={{ color:CYAN, fontWeight:900, width:24 }}>#{i+1}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:14 }}>{p.name}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)" }}>{p.position}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontWeight:700, color:CYAN }}>{p.views.toLocaleString()}</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)" }}>views</div>
            </div>
            <div style={{ width:100, background:"rgba(255,255,255,0.1)", borderRadius:4, height:6 }}>
              <div style={{ width:Math.round((p.views/maxP)*100)+"%", background:CYAN, borderRadius:4, height:6 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 6. User / Coach Management ───────────────────────────────────────────────
const UserManagement = makeSection({
  endpoint: "/coaches", title: "User Management", icon: "👨‍💼", singular: "User",
  blank: { name:"", email:"", role:"coach", school:"", phone:"", notes:"" },
  searchKeys: ["name", "email", "school"],
  cols: [
    { key:"name",   label:"Name"        },
    { key:"email",  label:"Email"       },
    { key:"role",   label:"Role",        render: v => { const c={admin:"#ff6b6b",coach:CYAN,viewer:"rgba(255,255,255,0.5)"}; return <span style={{ color:c[v]||CYAN, fontWeight:700, textTransform:"capitalize" }}>{v||"coach"}</span>; } },
    { key:"school", label:"School / Org" },
    { key:"phone",  label:"Phone"       },
  ],
  FormFields: ({ form, f, sf }) => (
    <div>
      <Field label="Full Name"   required placeholder="e.g. Coach Williams" {...f("name")} />
      <Field label="Email"       type="email" required placeholder="coach@school.edu" {...f("email")} />
      <div style={{ marginBottom:16 }}>
        <label style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.7)", marginBottom:5 }}>Role</label>
        <select value={form.role||"coach"} onChange={e => sf("role", e.target.value)}
          style={{ width:"100%", background:"rgba(0,0,0,0.5)", border:BORDER, borderRadius:8, color:"#fff", padding:"10px 14px", fontSize:14 }}>
          <option value="admin">Admin</option>
          <option value="coach">Coach</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
      <Field label="School / Org" placeholder="School or org name"  {...f("school")} />
      <Field label="Phone"        type="tel" placeholder="Phone"    {...f("phone")} />
      <Field label="Notes"        rows={3}   placeholder="Notes…"   {...f("notes")} />
    </div>
  ),
});

// ─── 7. Recruiting Tracker ────────────────────────────────────────────────────
const RecruitingTracker = makeSection({
  endpoint: "/recruiting", title: "Recruiting Tracker", icon: "📋", singular: "Record",
  blank: { playerName:"", university:"", status:"interested", offerDate:"", visitDate:"", contactName:"", contactEmail:"", notes:"" },
  searchKeys: ["playerName", "university"],
  filterOpts: {
    options: [
      { value:"",           label:"All Statuses"    },
      { value:"interested", label:"Interested"      },
      { value:"offer",      label:"Offer Extended"  },
      { value:"visit",      label:"Visit Scheduled" },
      { value:"committed",  label:"Committed"       },
      { value:"declined",   label:"Declined"        },
    ],
    fn: (item, val) => !val || item.status === val,
  },
  cols: [
    { key:"playerName",  label:"Player"     },
    { key:"university",  label:"University" },
    { key:"status",      label:"Status",     render: v => { const c={offer:"#00cc88",committed:CYAN,visit:"#ffd700",interested:"rgba(255,255,255,0.7)",declined:"#ff6b6b"}; return <span style={{ color:c[v]||"rgba(255,255,255,0.7)", fontWeight:700, textTransform:"capitalize" }}>{v||"interested"}</span>; } },
    { key:"offerDate",   label:"Offer Date", render: v => v ? new Date(v).toLocaleDateString() : "—" },
    { key:"visitDate",   label:"Visit Date", render: v => v ? new Date(v).toLocaleDateString() : "—" },
    { key:"contactName", label:"Contact"    },
  ],
  FormFields: ({ form, f, sf }) => (
    <div>
      <Field label="Player Name"  required placeholder="Player full name"            {...f("playerName")} />
      <Field label="University"   required placeholder="e.g. University of Washington" {...f("university")} />
      <div style={{ marginBottom:16 }}>
        <label style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.7)", marginBottom:5 }}>Status</label>
        <select value={form.status||"interested"} onChange={e => sf("status", e.target.value)}
          style={{ width:"100%", background:"rgba(0,0,0,0.5)", border:BORDER, borderRadius:8, color:"#fff", padding:"10px 14px", fontSize:14 }}>
          <option value="interested">Interested</option>
          <option value="offer">Offer Extended</option>
          <option value="visit">Visit Scheduled</option>
          <option value="committed">Committed</option>
          <option value="declined">Declined</option>
        </select>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
        <Field label="Offer Date"  type="date"  {...f("offerDate")} />
        <Field label="Visit Date"  type="date"  {...f("visitDate")} />
        <Field label="Contact"     placeholder="Name"            {...f("contactName")} />
        <Field label="Contact Email" type="email" placeholder="email" {...f("contactEmail")} />
      </div>
      <Field label="Notes" rows={3} placeholder="Recruiting notes…" {...f("notes")} />
    </div>
  ),
});

// ─── 8. Film / Video Management ───────────────────────────────────────────────
const MediaManagement = makeSection({
  endpoint: "/media", title: "Film & Video Management", icon: "🎬", singular: "Media",
  blank: { title:"", playerName:"", videoUrl:"", thumbnailUrl:"", category:"", tags:"", description:"" },
  searchKeys: ["title", "playerName", "category"],
  cols: [
    { key:"title",      label:"Title"    },
    { key:"playerName", label:"Player"   },
    { key:"category",   label:"Category" },
    { key:"tags",       label:"Tags"     },
    { key:"views",      label:"Views",    render: v => <span style={{ color:CYAN }}>{(v||0).toLocaleString()}</span> },
    { key:"videoUrl",   label:"Video",   render: v => v ? <a href={v} target="_blank" rel="noopener noreferrer" style={{ color:CYAN }}>▶ Watch</a> : "—" },
  ],
  FormFields: ({ f }) => (
    <div>
      <Field label="Title"         required placeholder="e.g. Jalen Brooks 2025 Highlights" {...f("title")} />
      <Field label="Player Name"   placeholder="Associated player"                           {...f("playerName")} />
      <Field label="Video URL"     type="url" placeholder="https://youtube.com/…"            {...f("videoUrl")} />
      <Field label="Thumbnail URL" type="url" placeholder="https://…/thumbnail.jpg"          {...f("thumbnailUrl")} />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
        <Field label="Category" placeholder="Highlights / Training" {...f("category")} />
        <Field label="Tags"     placeholder="comma-separated"       {...f("tags")} />
      </div>
      <Field label="Description" rows={3} placeholder="Video description…" {...f("description")} />
    </div>
  ),
});

// ─── 9. Reports ───────────────────────────────────────────────────────────────
function Reports() {
  const [generating, setGenerating] = useState({});
  const [generated, setGenerated] = useState({});

  const generate = async key => {
    setGenerating(p => ({ ...p, [key]: true }));
    try {
      const d = await apiFetch("/reports/" + key);
      setGenerated(p => ({ ...p, [key]: d }));
    } catch (_) {
      setGenerated(p => ({ ...p, [key]: { generatedAt: new Date().toISOString(), demo: true } }));
    } finally {
      setGenerating(p => ({ ...p, [key]: false }));
    }
  };

  const exportJSON = key => {
    const blob = new Blob([JSON.stringify(generated[key], null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = key + "-report-" + Date.now() + ".json"; a.click();
    URL.revokeObjectURL(url);
  };

  const reports = [
    { key:"players",   icon:"👥", title:"Player Report",    desc:"Full player list with stats, positions, and schools."  },
    { key:"events",    icon:"🎪", title:"Events Summary",   desc:"Overview of all events, attendance, and registrations." },
    { key:"analytics", icon:"📈", title:"Monthly Analytics",desc:"Traffic, views, and engagement for the past month."     },
    { key:"rankings",  icon:"📊", title:"Rankings Report",  desc:"All rankings lists with player standings."              },
    { key:"recruiting",icon:"📋", title:"Recruiting Report",desc:"All contacts, offers, visits, and commitments."         },
    { key:"media",     icon:"🎬", title:"Media Report",     desc:"Video library stats, view counts, and top content."    },
  ];

  return (
    <div>
      <SectionTitle>📄 Reports</SectionTitle>
      <p style={{ color:"rgba(255,255,255,0.6)", marginBottom:32, fontSize:14 }}>Generate and export reports for players, events, analytics, and more.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
        {reports.map(r => (
          <div key={r.key} style={{ background:CARD, border:BORDER, borderRadius:14, padding:24 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
              <span style={{ fontSize:32 }}>{r.icon}</span>
              <h3 style={{ fontWeight:800, fontSize:16 }}>{r.title}</h3>
            </div>
            <p style={{ color:"rgba(255,255,255,0.6)", fontSize:13, marginBottom:16, lineHeight:1.5 }}>{r.desc}</p>
            {generated[r.key] && (
              <div style={{ background:"rgba(0,200,100,0.1)", border:"1px solid rgba(0,200,100,0.3)", borderRadius:8, padding:"10px 14px", marginBottom:12, fontSize:12, color:"#00cc88" }}>
                ✓ Generated at {new Date(generated[r.key].generatedAt || Date.now()).toLocaleTimeString()}
                {generated[r.key].demo && " (demo mode)"}
              </div>
            )}
            <div style={{ display:"flex", gap:10 }}>
              <Btn variant="ghost" onClick={() => generate(r.key)} disabled={generating[r.key]}>
                {generating[r.key] ? "Generating…" : "Generate"}
              </Btn>
              {generated[r.key] && (
                <Btn variant="success" onClick={() => exportJSON(r.key)} style={{ padding:"10px 14px", fontSize:13 }}>↓ Export</Btn>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const NAV = [
  { id:"dashboard",  icon:"🎛️",  label:"Dashboard"     },
  { id:"players",    icon:"👥",  label:"Players"        },
  { id:"rankings",   icon:"📊",  label:"Rankings"       },
  { id:"events",     icon:"🎪",  label:"Events"         },
  { id:"analytics",  icon:"📈",  label:"Analytics"      },
  { id:"coaches",    icon:"👨‍💼", label:"Users"   },
  { id:"recruiting", icon:"📋",  label:"Recruiting"     },
  { id:"media",      icon:"🎬",  label:"Film & Video"   },
  { id:"reports",    icon:"📄",  label:"Reports"        },
];

function Sidebar({ active, onNavigate, collapsed, onToggle }) {
  return (
    <aside style={{ width:collapsed?"64px":"240px", minHeight:"100vh", background:"rgba(0,0,0,0.6)", borderRight:BORDER, display:"flex", flexDirection:"column", transition:"width 0.25s", flexShrink:0, position:"sticky", top:0, maxHeight:"100vh", overflowY:"auto", overflowX:"hidden" }}>
      <div style={{ padding:collapsed?"20px 10px":"22px 20px", borderBottom:BORDER, flexShrink:0 }}>
        {collapsed
          ? <div style={{ textAlign:"center", color:CYAN, fontWeight:900, fontSize:16 }}>BSR</div>
          : <div>
              <div style={{ fontSize:13, color:CYAN, fontWeight:900, letterSpacing:"0.08em", textTransform:"uppercase" }}>Brooks Scouting</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:2 }}>Admin Panel</div>
            </div>
        }
      </div>

      <nav style={{ flex:1, padding:"12px 8px" }}>
        {NAV.map(item => {
          const on = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              style={{
                width:"100%", display:"flex", alignItems:"center", gap:collapsed?"0":"12px",
                padding:collapsed?"12px":"12px 14px", borderRadius:10, marginBottom:4, border:"none",
                cursor:"pointer", justifyContent:collapsed?"center":"flex-start",
                background:on?"rgba(0,180,255,0.2)":"transparent",
                color:on?CYAN:"rgba(255,255,255,0.7)",
                fontWeight:on?800:500, fontSize:14,
                borderLeft:on?"3px solid "+CYAN:"3px solid transparent",
                transition:"all 0.2s",
              }}
            >
              <span style={{ fontSize:18, flexShrink:0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div style={{ padding:"12px 8px", borderTop:BORDER, flexShrink:0 }}>
        <button
          onClick={onToggle}
          style={{ width:"100%", padding:"10px", borderRadius:8, border:BORDER, background:"transparent", color:"rgba(255,255,255,0.5)", cursor:"pointer", fontSize:13 }}
        >
          {collapsed ? "→" : "← Collapse"}
        </button>
      </div>
    </aside>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
const LABELS = {
  dashboard:"Dashboard", players:"Player Management", rankings:"Rankings Management",
  events:"Event Management", analytics:"Analytics", coaches:"User Management",
  recruiting:"Recruiting Tracker", media:"Film & Video", reports:"Reports",
};

function AdminHeader({ section, onLogout }) {
  return (
    <header style={{ background:"rgba(0,0,0,0.7)", borderBottom:BORDER, padding:"15px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", backdropFilter:"blur(10px)", position:"sticky", top:0, zIndex:100 }}>
      <div>
        <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Brooks Scouting Report</div>
        <div style={{ fontWeight:800, color:"#fff", fontSize:16 }}>{LABELS[section] || "Admin"}</div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center" }}>
        <a href="/" style={{ color:"rgba(255,255,255,0.6)", fontSize:13, textDecoration:"none", padding:"8px 14px", border:BORDER, borderRadius:8 }}>← Back to Site</a>
        <button onClick={onLogout} style={{ background:"rgba(220,50,50,0.2)", border:"1px solid rgba(220,50,50,0.4)", color:"#ff6b6b", padding:"8px 16px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:700 }}>Logout</button>
      </div>
    </header>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [section, setSection] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const logout = () => { localStorage.removeItem("adminToken"); window.location.href = "/login"; };

  const renderSection = () => {
    switch (section) {
      case "dashboard":  return <DashboardHome onNavigate={setSection} />;
      case "players":    return <PlayerManagement />;
      case "rankings":   return <RankingsManagement />;
      case "events":     return <EventManagement />;
      case "analytics":  return <AnalyticsDashboard />;
      case "coaches":    return <UserManagement />;
      case "recruiting": return <RecruitingTracker />;
      case "media":      return <MediaManagement />;
      case "reports":    return <Reports />;
      default:           return <DashboardHome onNavigate={setSection} />;
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:BG, color:"#fff", fontFamily:"Arial,sans-serif", display:"flex", flexDirection:"column" }}>
      <AdminHeader section={section} onLogout={logout} />
      <div style={{ display:"flex", flex:1 }}>
        <Sidebar active={section} onNavigate={setSection} collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
        <main style={{ flex:1, padding:"32px", overflowX:"hidden", minWidth:0 }}>
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
