import React from "react";

const PublicPlayer_JalenBrooks = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.name}>Jalen Brooks • 2026</h1>
      <p style={styles.meta}>6'3" • Lead Guard • Pacific Northwest</p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Scouting Report</h2>
        <p style={styles.text}>
          Shifty lead guard with elite pace, vision, and three‑level scoring ability.
          Controls tempo, reads defenses, and embraces big‑moment situations.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Season Stats</h2>
        <p style={styles.text}>PPG: 23.4</p>
        <p style={styles.text}>APG: 6.1</p>
        <p style={styles.text}>RPG: 4.8</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Background</h2>
        <p style={styles.text}>
          One of the top guards in the region, known for leadership, toughness,
          and a polished offensive package.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#05070B",
    color: "#FFFFFF",
    padding: "24px 32px",
    fontFamily: "system-ui, sans-serif",
  },
  name: {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "6px",
  },
  meta: {
    fontSize: "14px",
    color: "#A8B0C0",
    marginBottom: "24px",
  },
  section: {
    marginBottom: "28px",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#0B0E16",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "6px",
  },
  text: {
    fontSize: "13px",
    color: "#D0D4E0",
    lineHeight: 1.5,
  },
};

export default PublicPlayer_JalenBrooks;

