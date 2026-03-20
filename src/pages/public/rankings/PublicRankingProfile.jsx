import React from "react";
import { Link, useParams } from "react-router-dom";

const PublicRankingProfile = () => {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Class of {id}</h1>
        <p style={styles.subtitle}>Full rankings and scouting evaluations.</p>
      </header>

      <div style={styles.list}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
          <div key={rank} style={styles.playerRow}>
            <div style={styles.rankNumber}>{rank}</div>
            <div style={styles.playerInfo}>
              <h3 style={styles.playerName}>Player #{rank}</h3>
              <p style={styles.playerDetails}>Position • Height • School • City, State</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.backWrapper}>
        <Link to="/public/rankings" style={styles.backButton}>
          Back to Rankings
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
  list: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  playerRow: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#111111",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #1F1F1F",
    marginBottom: "15px",
  },
  rankNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#00E0FF",
    width: "60px",
    textAlign: "center",
  },
  playerInfo: {
    marginLeft: "20px",
  },
  playerName: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  playerDetails: {
    fontSize: "14px",
    opacity: 0.8,
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

export default PublicRankingProfile;

