import React from "react";
import { Link, useParams } from "react-router-dom";

const PublicMediaContentProfile = () => {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Media Item #{id}</h1>
        <p style={styles.subtitle}>Detailed view of this media item.</p>
      </header>

      <div style={styles.contentBox}>
        <div style={styles.mediaPreview}></div>

        <div style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>Description</h2>
          <p style={styles.description}>
            This is a placeholder description for media item #{id}. Replace this
            with real data once your backend is connected.
          </p>

          <h2 style={styles.sectionTitle}>Details</h2>
          <ul style={styles.detailsList}>
            <li style={styles.detailItem}>Uploaded: Sample Date</li>
            <li style={styles.detailItem}>Category: Video / Photo / Highlight</li>
            <li style={styles.detailItem}>Event: Sample Event</li>
            <li style={styles.detailItem}>Player(s): Sample Player</li>
          </ul>
        </div>
      </div>

      <div style={styles.backButtonWrapper}>
        <Link to="/public/media" style={styles.backButton}>
          Back to Media
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
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#00E0FF",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
  },
  contentBox: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  mediaPreview: {
    width: "100%",
    height: "350px",
    backgroundColor: "#1F1F1F",
    borderRadius: "12px",
  },
  infoSection: {
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
  description: {
    fontSize: "15px",
    opacity: 0.85,
    marginBottom: "20px",
  },
  detailsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  detailItem: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "8px",
  },
  backButtonWrapper: {
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

export default PublicMediaContentProfile;

