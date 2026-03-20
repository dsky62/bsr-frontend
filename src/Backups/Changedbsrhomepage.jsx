import React from "react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  const neon = "#00B4FF";

  const pill = {
    padding: "8px 14px",
    borderRadius: 20,
    border: `1px solid ${neon}`,
    color: neon,
    textDecoration: "none",
    fontSize: 12,
    marginRight: 8,
    background: "rgba(0,0,0,0.4)",
  };

  return (
    <div style={{ background: "#020203", color: "#fff", fontFamily: "Arial", paddingBottom: 60 }}>

      {/* HERO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px", display: "flex", flexWrap: "wrap", gap: 30 }}>
        
        <div style={{ flex: "1 1 360px" }}>
          <img 
            src="/images/bsr-logo.png"
            alt="BSR Logo"
            style={{ width: 200, filter: "drop-shadow(0 0 12px #00B4FF)" }}
          />

          <p style={{ opacity: .9, marginTop: 10 }}>Film • Rankings • Stories • Culture</p>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Rankings</span>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Highlights</span>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Players</span>
          </div>
        </div>

        <div style={{
          flex: "1 1 300px",
          border: `2px solid #fff`,
          borderRadius: 18,
          overflow: "hidden",
          background: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80') center/cover",
          minHeight: 220,
          position: "relative"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,.7),rgba(0,180,255,.2),rgba(0,0,0,.8))" }} />
          <div style={{ position: "absolute", bottom: 16, left: 16 }}>
            <div style={{ fontSize: 11, opacity: .8, letterSpacing: "0.16em" }}>Featured Mix</div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>PNW Guards • Vol. 1</div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section style={{
        maxWidth: 1200,
        margin: "0 auto 30px",
        padding: "8px 16px",
        borderRadius: 30,
        border: "1px solid rgba(255,255,255,.2)",
        background: "rgba(0,0,0,.5)",
        display: "flex",
        gap: 12,
        overflowX: "auto"
      }}>
        <Link to="/public/trending/top-guards-pnw" style={{ color: neon, fontSize: 11, letterSpacing: "0.16em", textDecoration: "none" }}>TRENDING</Link>

        <Link to="/public/trending/top-guards-pnw" style={{ color: "#fff", textDecoration: "none" }}>Top Guards</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/showcase-standouts" style={{ color: "#fff", textDecoration: "none" }}>Showcase Standouts</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/updated-class-rankings" style={{ color: "#fff", textDecoration: "none" }}>Class Rankings</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/freshmen-to-watch" style={{ color: "#fff", textDecoration: "none" }}>Freshmen to Watch</Link>
      </section>

      {/* HIGHLIGHT REELS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Highlight Reels</h2>

        <div style={{ display: "flex", gap: 20, overflowX: "auto" }}>
          {[1,2,3,4].map((n) => (
            <div key={n} style={{
              minWidth: 260,
              height: 150,
              background: "#111",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.1)"
            }} />
          ))}
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section style={{ maxWidth: 1200, margin: "20px auto", padding: "20px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Spotlight</h2>

        <div style={{
          height: 200,
          borderRadius: 12,
          background: "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80') center/cover",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)" }} />
          <div style={{ position: "absolute", bottom: 16, left: 16 }}>
            <div style={{ fontSize: 12, opacity: .8 }}>FEATURED ATHLETE</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>Jalen Brooks • Class of 2026</div>
          </div>
        </div>
      </section>

      {/* UP & COMING */}
      <section style={{ maxWidth: 1200, margin: "20px auto", padding: "20px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Up & Coming</h2>

        <div style={{ display: "flex", gap: 20, overflowX: "auto" }}>
          {[1,2,3].map((n) => (
            <div key={n} style={{
              minWidth: 200,
              height: 140,
              background: "#111",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.1)"
            }} />
          ))}
        </div>
      </section>

      {/* EXPLORE BSR */}
      <section style={{ maxWidth: 1200, margin: "20px auto", padding: "20px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Explore BSR</h2>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link to="/public/players" style={pill}>Players</Link>
          <Link to="/public/teams" style={pill}>Teams</Link>
          <Link to="/public/events" style={pill}>Events</Link>
          <Link to="/public/media" style={pill}>Media</Link>
          <Link to="/public/rankings" style={pill}>Rankings</Link>
          <Link to="/public/coaches" style={pill}>Coaches Corner</Link>
        </div>
      </section>

      {/* DOM BROOKS BLOCK (Option B) */}
      <section style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "30px 20px",
        borderRadius: 16,
        background: "rgba(0,0,0,.6)",
        border: "1px solid rgba(255,255,255,.1)"
      }}>
        <h2 style={{ fontSize: 22, marginBottom: 10 }}>Dom Brooks — CEO, Brooks Scouting Report</h2>

        <p style={{ opacity: .85, maxWidth: 700 }}>
          Covering the culture, talent, and future of Pacific Northwest basketball.  
          Dom Brooks brings authentic storytelling, real evaluations, and a platform built for athletes.
        </p>

        <div style={{ marginTop: 20, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={pill}>Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" style={pill}>YouTube</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={pill}>X (Twitter)</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={pill}>Facebook</a>
        </div>

        <div style={{ marginTop: 20, opacity: .8 }}>
          <div>Email: brooksreport@gmail.com</div>
          <div>Phone: (206) 555‑0199</div>
          <div>Location: Seattle, WA</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", opacity: .6, padding: 20, fontSize: 12 }}>
        © {new Date().getFullYear()} Brooks Scouting Report — All Rights Reserved
      </footer>

    </div>
  );
}

