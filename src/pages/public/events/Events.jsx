import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicNav from "../../../components/PublicNav";

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterTag, setFilterTag] = useState("All");

  const events = [
    {
      id: 1,
      name: "Battle Royale",
      date: "2026-06-12",
      endDate: "2026-06-13",
      location: "TBD",
      type: "Tournament",
      description: "Elite showcase tournament bringing competitive teams together.",
      attendees: 16,
      standouts: ["Top Guards", "Elite Wings"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
      details: "Battle Royale brings some of the most competitive AAU teams in the region for a fast-paced tournament. Expect high-level execution, elite guards, and intense defensive battles.",
    },
    {
      id: 2,
      name: "Unsigned Hype Showcase (NCAA Certified)",
      date: "2026-06-27",
      endDate: "2026-06-28",
      location: "TBD",
      type: "Showcase",
      description: "NCAA certified showcase for elite unsigned prospects.",
      attendees: 24,
      standouts: ["Elite Prospects", "D1 Targets"],
      image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
      details: "The premier NCAA certified event showcasing unsigned elite talent. College coaches from across the nation will be in attendance evaluating prospects. This is where offers happen.",
    },
    {
      id: 3,
      name: "3on3 Legacy Run (City of Renton)",
      date: "2026-08-01",
      endDate: "2026-08-02",
      location: "Renton, WA",
      type: "Tournament",
      description: "Fast-paced 3v3 tournament showcasing ball handling and scoring.",
      attendees: 12,
      standouts: ["Ball Handlers", "Scorers", "Playmakers"],
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
      details: "3on3 Legacy Run is an intense, high-scoring format that highlights individual ball handling, shot creation, and decision-making. Perfect for evaluating guards under pressure in open-court situations.",
    },
    {
      id: 4,
      name: "Battle Royale",
      date: "2026-10-16",
      endDate: "2026-10-17",
      location: "TBD",
      type: "Tournament",
      description: "Fall edition of Battle Royale tournament.",
      attendees: 16,
      standouts: ["Top Prospects", "Rising Talent"],
      image: "https://images.unsplash.com/photo-1461847433087-b3ee0e34ca92?auto=format&fit=crop&w=1200&q=80",
      details: "The fall Battle Royale returns with competitive teams and emerging talent. Mid-season form shows who's trending up and who's maintaining elite status.",
    },
    {
      id: 5,
      name: "Kent Jam Festival",
      date: "2026-12-11",
      endDate: "2026-12-12",
      location: "Kent, WA",
      type: "Festival",
      description: "Year-end festival celebration and final showcase before holidays.",
      attendees: 20,
      standouts: ["Year-End Elite", "Emerging Freshmen"],
      image: "https://images.unsplash.com/photo-1504589338106-881a713f8fdc?auto=format&fit=crop&w=1200&q=80",
      details: "Kent Jam Festival closes out the year with a celebration of elite talent. See where prospects stand heading into the crucial spring recruiting period and holiday break.",
    },
  ];

  const filteredEvents = filterTag === "All" ? events : events.filter(e => e.type === filterTag);
  const eventTypes = ["All", ...new Set(events.map(e => e.type))];

  const hoverCardIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 0 22px rgba(0, 180, 255, 0.9)";
    e.currentTarget.style.borderColor = "#00B4FF";
  };

  const hoverCardOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
    e.currentTarget.style.borderColor = "#FFFFFF";
  };

  return (
    <div style={styles.page}>
      <PublicNav />

      {/* HERO WITH IMG_7961 BACKGROUND */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Brooks Sports Events 2026</h1>
          <p style={styles.heroSubtitle}>
            Premier tournaments, showcases, and festivals showcasing elite PNW talent.
          </p>
          <div style={styles.heroAccent} />
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={styles.filterSection}>
        <div style={styles.filterTabs}>
          {eventTypes.map((type) => (
            <button
              key={type}
              style={{
                ...styles.filterTab,
                ...(filterTag === type ? styles.filterTabActive : {}),
              }}
              onClick={() => setFilterTag(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* EVENTS GRID */}
      <section style={styles.eventsSection}>
        <div style={styles.eventsGrid}>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              style={styles.eventCard}
              onMouseEnter={hoverCardIn}
              onMouseLeave={hoverCardOut}
              onClick={() => setSelectedEvent(event)}
            >
              <div
                style={{
                  ...styles.eventImage,
                  backgroundImage: `url('${event.image}')`,
                }}
              />
              <div style={styles.eventCardBody}>
                <div style={styles.eventTag}>{event.type}</div>
                <h3 style={styles.eventName}>{event.name}</h3>
                <p style={styles.eventLocation}>📍 {event.location}</p>
                <p style={styles.eventDate}>
                  📅 {new Date(event.date).toLocaleDateString()} 
                  {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString()}`}
                </p>
                <p style={styles.eventDescription}>{event.description}</p>
                <div style={styles.eventMeta}>
                  <span style={styles.eventMetaItem}>
                    🏀 {event.attendees} Teams
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedEvent && (
        <div style={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.modalClose}
              onClick={() => setSelectedEvent(null)}
            >
              ✕
            </button>

            <div
              style={{
                ...styles.modalImage,
                backgroundImage: `url('${selectedEvent.image}')`,
              }}
            />

            <div style={styles.modalBody}>
              <div style={styles.modalTag}>{selectedEvent.type}</div>
              <h2 style={styles.modalTitle}>{selectedEvent.name}</h2>

              <div style={styles.modalInfo}>
                <div style={styles.modalInfoBlock}>
                  <span style={styles.modalInfoLabel}>📅 Date</span>
                  <span style={styles.modalInfoValue}>
                    {new Date(selectedEvent.date).toLocaleDateString()}
                    {selectedEvent.endDate && ` - ${new Date(selectedEvent.endDate).toLocaleDateString()}`}
                  </span>
                </div>
                <div style={styles.modalInfoBlock}>
                  <span style={styles.modalInfoLabel}>📍 Location</span>
                  <span style={styles.modalInfoValue}>{selectedEvent.location}</span>
                </div>
                <div style={styles.modalInfoBlock}>
                  <span style={styles.modalInfoLabel}>🏀 Teams</span>
                  <span style={styles.modalInfoValue}>{selectedEvent.attendees}</span>
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>About This Event</h4>
                <p style={styles.modalText}>{selectedEvent.details}</p>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Standout Performers</h4>
                <div style={styles.standoutList}>
                  {selectedEvent.standouts.map((player, idx) => (
                    <div key={idx} style={styles.standoutItem}>
                      ⭐ {player}
                    </div>
                  ))}
                </div>
              </div>

              <button style={styles.modalButton} onClick={() => setSelectedEvent(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Built by DLW Solutions LLC • Brooks Scouting Report</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "50px",
  },
  hero: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "120px 20px",
    textAlign: "center",
    backgroundImage: "url('/images/IMG_7961.PNG')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "500px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,180,255,0.2), rgba(0,0,0,0.9))",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: "900",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textShadow: "0 0 30px rgba(0, 180, 255, 0.9), 0 0 60px rgba(0, 180, 255, 0.6)",
    color: "#FFFFFF",
  },
  heroSubtitle: {
    marginTop: "16px",
    fontSize: "20px",
    opacity: 0.95,
    textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
  },
  heroAccent: {
    width: "200px",
    height: "6px",
    backgroundColor: "#00B4FF",
    borderRadius: "999px",
    marginTop: "24px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 0 20px #00B4FF",
  },
  filterSection: {
    maxWidth: "1300px",
    margin: "30px auto 30px auto",
    padding: "0 20px",
  },
  filterTabs: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  filterTab: {
    padding: "8px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(0,0,0,0.4)",
    color: "#FFFFFF",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
    transition: "0.25s",
  },
  filterTabActive: {
    borderColor: "#00B4FF",
    background: "rgba(0, 180, 255, 0.2)",
    color: "#00B4FF",
    boxShadow: "0 0 12px rgba(0, 180, 255, 0.8)",
  },
  eventsSection: {
    maxWidth: "1300px",
    margin: "0 auto 50px auto",
    padding: "0 20px",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
  },
  eventCard: {
    borderRadius: "16px",
    border: "2px solid #FFFFFF",
    overflow: "hidden",
    background: "rgba(10,10,10,0.95)",
    transition: "0.25s",
    cursor: "pointer",
  },
  eventImage: {
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  eventCardBody: {
    padding: "16px 18px",
  },
  eventTag: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#00B4FF",
    marginBottom: "8px",
  },
  eventName: {
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "8px",
  },
  eventLocation: {
    fontSize: "13px",
    opacity: 0.85,
    marginBottom: "4px",
  },
  eventDate: {
    fontSize: "13px",
    opacity: 0.85,
    marginBottom: "8px",
  },
  eventDescription: {
    fontSize: "14px",
    opacity: 0.9,
    marginBottom: "10px",
    lineHeight: "1.4",
  },
  eventMeta: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  eventMetaItem: {
    fontSize: "12px",
    opacity: 0.8,
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modalContent: {
    background: "radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)",
    borderRadius: "18px",
    border: "2px solid #00B4FF",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 0 40px rgba(0, 180, 255, 0.8)",
    position: "relative",
  },
  modalClose: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "rgba(0,0,0,0.8)",
    border: "1px solid #FFFFFF",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    fontSize: "18px",
    cursor: "pointer",
    color: "#FFFFFF",
    transition: "0.2s",
    zIndex: 10000,
  },
  modalImage: {
    height: "240px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  modalBody: {
    padding: "24px 20px",
  },
  modalTag: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#00B4FF",
    marginBottom: "10px",
  },
  modalTitle: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  modalInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
    marginBottom: "20px",
  },
  modalInfoBlock: {
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "10px 12px",
    background: "rgba(0,0,0,0.6)",
  },
  modalInfoLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    opacity: 0.75,
    display: "block",
    marginBottom: "4px",
  },
  modalInfoValue: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#00B4FF",
  },
  modalSection: {
    marginBottom: "18px",
  },
  modalSectionTitle: {
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "10px",
    color: "#00B4FF",
  },
  modalText: {
    fontSize: "14px",
    opacity: 0.9,
    lineHeight: "1.6",
  },
  standoutList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  standoutItem: {
    fontSize: "13px",
    opacity: 0.9,
    paddingLeft: "8px",
  },
  modalButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #00B4FF",
    background: "rgba(0, 180, 255, 0.1)",
    color: "#00B4FF",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
    transition: "0.25s",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    opacity: 0.7,
  },
  footerText: {
    fontSize: "13px",
  },
};

export default Events;