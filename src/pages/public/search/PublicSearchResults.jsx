import React from "react";
import { Link, useLocation } from "react-router-dom";

const PublicSearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Search Results</h1>
        <p style={styles.subtitle}>Showing results for: "{query}"</p>
      </header>

      <div style={styles.results}>
        {[1, 2, 3].map((item) => (
          <div key={item} style={styles.card}>
            <h3 style={styles.cardTitle}>Sample Result #{item}</h3>
            <p style={styles.cardText}>
              This is placeholder search content. Connect your backend to return real results.
            </p>
            <Link to="/" style={styles.link}>
              View Item
            </Link>
          </div>
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
  results: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gap: "20px",
  },
  card: {
    backgroundColor: "#111111",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #1F1F1F",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  cardText: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  link: {
    color: "#00E0FF",
    textDecoration: "none",
    fontWeight: "bold",
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

export default PublicSearchResults;

