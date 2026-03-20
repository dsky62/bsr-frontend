import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublicSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/public/search/results?q=${query}`);
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Search</h1>
        <p style={styles.subtitle}>Find players, teams, events, and rankings.</p>
      </header>

      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Search BSR..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

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
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #1F1F1F",
    backgroundColor: "#111111",
    color: "#FFFFFF",
    fontSize: "16px",
  },
  button: {
    padding: "14px 20px",
    backgroundColor: "#00E0FF",
    color: "#000000",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
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

export default PublicSearch;

