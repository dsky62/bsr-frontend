import React from "react";

const PublicHighlights = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>BSR Highlight Reels</h1>
      <p style={styles.subtitle}>
        Mixtapes, standouts, and the best clips from around the region.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Top Guards • Vol. 1</h2>
        <p style={styles.text}>
          A curated reel featuring the most dynamic guards in the Pacific Northwest.
          Shot‑making, pace, and playmaking on full display.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Showcase Standouts</h2>
        <p style={styles.text}>
          Who popped, who surprised, and who dominated the floor at recent events.
          Full breakdowns and standout clips.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Freshmen to Watch</h2>
        <p style={styles.text}>
          Early names making noise — the next wave of rising prospects already
          showing flashes of high‑level potential.
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
  title: {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "6px",
  },
  subtitle: {
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

export default PublicHighlights;

