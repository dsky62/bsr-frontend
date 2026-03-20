import React from "react";
import { Link, useLocation } from "react-router-dom";

const PublicMediaContent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "media";

  const titleMap = {
    videos: "Videos",
    photos: "Photos",
    highlights: "Highlights",
  };

  const pageTitle = titleMap[type] || "Media Content";

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>{pageTitle}</h1>
        <p style={styles.subtitle}>Browse {pageTitle.toLowerCase()} from events, players, and showcases.</p>
      </header>

      <div style={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link
            key={item}
            to={`/public/media/content/profile/${item}`}
            style={styles.card}
          >
            <div style={styles.thumbnail}></div>
            <h3 style={styles.cardTitle}>{pageTitle} #{item}</h3>
            <p style={styles.cardText}>Click to view this {pageTitle.toLowerCase()} item.</p>
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
    fontSize: "34px",
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
  thumbnail: {
    width: "100%",
    height: "140px",
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

export default PublicMediaContent;

