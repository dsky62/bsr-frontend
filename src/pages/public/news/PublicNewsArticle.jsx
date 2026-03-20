import React from "react";
import { Link, useParams } from "react-router-dom";

const PublicNewsArticle = () => {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>News Article #{id}</h1>
        <p style={styles.subtitle}>Full story, updates, and coverage.</p>
      </header>

      <div style={styles.articleBox}>
        <div style={styles.banner}></div>

        <p style={styles.text}>
          This is placeholder content for News Article #{id}. Once your backend is connected,
          this page will display the full article text, images, and media coverage.
        </p>

        <p style={styles.text}>
          Use this space to highlight key storylines, player performances, event recaps,
          or major announcements within the BSR ecosystem.
        </p>
      </div>

      <div style={styles.backWrapper}>
        <Link to="/public/news" style={styles.backButton}>
          Back to News
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
  articleBox: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#111111",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #1F1F1F",
  },
  banner: {
    width: "100%",
    height: "300px",
    backgroundColor: "#1F1F1F",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "15px",
    opacity: 0.85,
    marginBottom: "20px",
    lineHeight: "1.6",
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

export default PublicNewsArticle;

