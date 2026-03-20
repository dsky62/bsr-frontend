import React from "react";
import { Link } from "react-router-dom";

const PublicRankings = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Rankings</h1>
        <p style={styles.subtitle}>Player rankings, class lists, and scouting evaluations.</p>
      </header>

      <div style={styles.grid}>
        {[2024, 2025, 2026, 2027, 2028].map((year) => (
          <Link
            key={year}
            to={`/public/rankings/profile/${year}`}
            style={styles.card}
          >
            <div style={styles.rankBox}></div>
            <h3 style={styles.cardTitle}>Class of {year}</h3>
            <p style={styles.cardText}>View full rankings and scouting breakdowns.</p>
          </Link>
        ))}
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>Built by DLW Solutions LLC</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#111111",
    padding: "20px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#FFFFFF",
    border: "1px solid #1F1F1F",
    transition: "0.2s",
  },
  rankBox: {
    width: "100%",
    height: "160px",
    backgroundColor: "#1F1F1F",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#00E0FF",
  },
  cardText: {
    fontSize: "14px",
    opacity: 0.8,
  },
  footer: {
    marginTop: "50px",
    textAlign: "center",
    opacity: 0.7,
  },
  footerText: {
    fontSize: "14px",
  },
};

export default PublicRankings;

