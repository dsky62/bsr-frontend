import React from "react";
import { Link, useParams } from "react-router-dom";

const PublicPlayerProfile = () => {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Player #{id}</h1>
        <p style={styles.subtitle}>Full profile, stats, and scouting report.</p>
      </header>

      <div style={styles.layout}>
        {/* Left: Player Image */}
        <div style={styles.imageBox}></div>

        {/* Right: Player Info */}
        <div style={styles.infoBox}>
          <h2 style={styles.sectionTitle}>Player Overview</h2>
          <p style={styles.text}>
            This is a placeholder overview for Player #{id}. Replace this with real data once your backend is connected.
          </p>

          <h2 style={styles.sectionTitle}>Physical Attributes</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Height: Sample Height</li>
            <li style={styles.listItem}>Weight: Sample Weight</li>
            <li style={styles.listItem}>Position: Sample Position</li>
            <li style={styles.listItem}>Class: Sample Class</li>
          </ul>

          <h2 style={styles.sectionTitle}>Scouting Report</h2>
          <p style={styles.text}>
            This section will contain strengths, weaknesses, and overall evaluation for Player #{id}.
          </p>
        </div>
      </div>

      <div style={styles.backWrapper}>
        <Link to="/public/players" style={styles.backButton}>
          Back to Players
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
  layout: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  imageBox: {
    width: "100%",
    height: "380px",
    backgroundColor: "#1F1F1F",
    borderRadius: "12px",
  },
  infoBox: {
    backgroundColor: "#111111",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #1F1F1F",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  text: {
    fontSize: "15px",
    opacity: 0.85,
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 20px 0",
  },
  listItem: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "8px",
  },
  backWrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  backButton: {
    padding: "12px 20px",
    backgroundColor: "#00E0FF",
    color: "#000000",
    borderRadius: "8px",
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

export default PublicPlayerProfile;

