import React from "react";
import { Link, useParams } from "react-router-dom";

const PublicTeamProfile = () => {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Team #{id}</h1>
        <p style={styles.subtitle}>Roster, program info, and team overview.</p>
      </header>

      <div style={styles.layout}>
        {/* Left: Team Logo */}
        <div style={styles.logoBox}></div>

        {/* Right: Team Info */}
        <div style={styles.infoBox}>
          <h2 style={styles.sectionTitle}>Program Overview</h2>
          <p style={styles.text}>
            This is a placeholder overview for Team #{id}. Replace this with real team data once your backend is connected.
          </p>

          <h2 style={styles.sectionTitle}>Team Details</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Location: Sample City</li>
            <li style={styles.listItem}>Coach: Sample Coach</li>
            <li style={styles.listItem}>Level: Varsity / AAU / Club</li>
            <li style={styles.listItem}>Conference: Sample Conference</li>
          </ul>

          <h2 style={styles.sectionTitle}>Roster</h2>
          <ul style={styles.list}>
            {[1, 2, 3, 4, 5].map((player) => (
              <li key={player} style={styles.listItem}>
                Player #{player}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.backWrapper}>
        <Link to="/public/teams" style={styles.backButton}>
          Back to Teams
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
  logoBox: {
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

export default PublicTeamProfile;

