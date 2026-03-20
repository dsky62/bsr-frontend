import React from "react";
import { Link } from "react-router-dom";

const PublicMedia = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Media</h1>
        <p style={styles.subtitle}>Videos, photos, highlights, and featured content.</p>
      </header>

      <div style={styles.grid}>
        <Link to="/public/media/content?type=videos" style={styles.card}>
          <h2 style={styles.cardTitle}>Videos</h2>
          <p style={styles.cardText}>Game footage, mixtapes, interviews, and more.</p>
        </Link>

        <Link to="/public/media/content?type=photos" style={styles.card}>
          <h2 style={styles.cardTitle}>Photos</h2>
          <p style={styles.cardText}>Event photos, player shots, and media galleries.</p>
        </Link>

        <Link to="/public/media/content?type=highlights" style={styles.card}>
          <h2 style={styles.cardTitle}>Highlights</h2>
          <p style={styles.cardText}>Top plays, standout moments, and spotlight clips.</p>
        </Link>
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
    marginBottom: "50px",
  },
  title: {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#111111",
    padding: "25px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#FFFFFF",
    border: "1px solid #1F1F1F",
    transition: "0.2s",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  cardText: {
    fontSize: "15px",
    opacity: 0.8,
  },
  footer: {
    marginTop: "60px",
    textAlign: "center",
    opacity: 0.7,
  },
  footerText: {
    fontSize: "14px",
  },
};

export default PublicMedia;

