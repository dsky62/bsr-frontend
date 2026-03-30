import React from "react";
import { Link } from "react-router-dom";
import PublicNav from "../../../components/PublicNav";

const PublicEvents = () => {
  const events = [
    {
      id: 1,
      name: "Battle Royale",
      dates: "June 12-13",
      location: "TBD",
      type: "Tournament",
      emoji: "⚔️"
    },
    {
      id: 2,
      name: "Unsigned Hype Showcase",
      dates: "June 27-28",
      location: "TBD",
      type: "NCAA Certified",
      emoji: "🔥"
    },
    {
      id: 3,
      name: "3on3 Legacy Run",
      dates: "August 1-2",
      location: "City of Renton",
      type: "3v3 Tournament",
      emoji: "🏀"
    },
    {
      id: 4,
      name: "Battle Royale",
      dates: "October 16-17",
      location: "TBD",
      type: "Tournament",
      emoji: "⚔️"
    },
    {
      id: 5,
      name: "Kent Jam Festival",
      dates: "December 11-12",
      location: "Kent, WA",
      type: "Festival",
      emoji: "🎉"
    },
    {
      id: 6,
      name: "BSR Summer Showcase",
      dates: "July 12",
      location: "Seattle, WA",
      type: "Exclusive",
      emoji: "⭐"
    }
  ];

  return (
    <div style={styles.page}>
      <PublicNav />
      
      <header style={styles.header}>
        <h1 style={styles.title}>Brooks Sports Events 2026</h1>
        <p style={styles.subtitle}>Camps, showcases, tournaments, and live coverage from the Pacific Northwest's biggest basketball events.</p>
      </header>

      <div style={styles.heroSection}>
        <img 
          src="https://raw.githubusercontent.com/dsky62/bsr-frontend/main/IMG_7963.PNG" 
          alt="Brooks Sports Events 2026" 
          style={styles.heroImage}
        />
      </div>

      <div style={styles.grid}>
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/public/events/profile/${event.id}`}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 0 22px rgba(0, 224, 255, 0.9)";
              e.currentTarget.style.borderColor = "#00E0FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              e.currentTarget.style.borderColor = "#1F1F1F";
            }}
          >
            <div style={styles.banner}>
              <div style={styles.emoji}>{event.emoji}</div>
            </div>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDates}>{event.dates}</p>
            <p style={styles.cardLocation}>{event.location}</p>
            <div style={styles.cardTag}>{event.type}</div>
          </Link>
        ))}
      </div>

      <section style={styles.infoSection}>
        <h2 style={styles.infoTitle}>2026 Event Calendar</h2>
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoEmoji}>📅</div>
            <h3 style={styles.infoCardTitle}>5 Major Events</h3>
            <p style={styles.infoCardText}>Battle Royale, Hype Showcase, 3on3 Legacy Run, and more.</p>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.infoEmoji}>🏀</div>
            <h3 style={styles.infoCardTitle}>Elite Competition</h3>
            <p style={styles.infoCardText}>NCAA certified showcases featuring top PNW talent.</p>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.infoEmoji}>🎥</div>
            <h3 style={styles.infoCardTitle}>Live Coverage</h3>
            <p style={styles.infoCardText}>Film, highlights, and scouting reports from every event.</p>
          </div>
        </div>
      </section>

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
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "50px"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "1200px",
    margin: "0 auto 30px auto"
  },
  title: {
    fontSize: "42px",
    fontWeight: "900",
    marginBottom: "12px",
    color: "#00E0FF",
    textShadow: "0 0 18px rgba(0, 224, 255, 0.9)",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.9,
    lineHeight: "1.6"
  },
  heroSection: {
    maxWidth: "1300px",
    margin: "0 auto 50px auto",
    padding: "0 20px",
    borderRadius: "18px",
    overflow: "hidden",
    border: "2px solid rgba(0,224,255,0.3)",
    boxShadow: "0 0 30px rgba(0,224,255,0.2)"
  },
  heroImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "16px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1300px",
    margin: "0 auto 50px auto",
    padding: "0 20px"
  },
  card: {
    backgroundColor: "rgba(10,10,10,0.95)",
    padding: "20px",
    borderRadius: "16px",
    textDecoration: "none",
    color: "#FFFFFF",
    border: "2px solid #1F1F1F",
    transition: "0.3s",
    cursor: "pointer"
  },
  banner: {
    width: "100%",
    height: "140px",
    background: "linear-gradient(135deg, rgba(0,224,255,0.1), rgba(0,180,255,0.05))",
    borderRadius: "12px",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(0,224,255,0.3)"
  },
  emoji: {
    fontSize: "48px"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "800",
    marginBottom: "8px",
    color: "#00E0FF"
  },
  cardDates: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "4px",
    fontWeight: "700"
  },
  cardLocation: {
    fontSize: "13px",
    opacity: 0.75,
    marginBottom: "10px"
  },
  cardTag: {
    display: "inline-block",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    padding: "4px 10px",
    borderRadius: "6px",
    background: "rgba(0,224,255,0.15)",
    color: "#00E0FF",
    fontWeight: "700",
    border: "1px solid rgba(0,224,255,0.3)"
  },
  infoSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px"
  },
  infoTitle: {
    fontSize: "24px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "20px",
    textAlign: "center"
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px"
  },
  infoCard: {
    background: "rgba(0,0,0,0.7)",
    borderRadius: "14px",
    border: "1px solid rgba(0,224,255,0.25)",
    padding: "20px",
    textAlign: "center"
  },
  infoEmoji: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  infoCardTitle: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#00E0FF",
    marginBottom: "8px"
  },
  infoCardText: {
    fontSize: "13px",
    opacity: 0.85
  },
  footer: {
    marginTop: "50px",
    textAlign: "center",
    opacity: 0.7,
    maxWidth: "1300px",
    margin: "50px auto 0 auto",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  },
  footerText: {
    fontSize: "13px"
  }
};

export default PublicEvents;