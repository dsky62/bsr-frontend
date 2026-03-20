import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.link}>Dashboard</Link>
      <Link to="/admin/players" style={styles.link}>Players</Link>
      <Link to="/admin/teams" style={styles.link}>Teams</Link>
      <Link to="/admin/events" style={styles.link}>Events</Link>
      <Link to="/admin/rankings" style={styles.link}>Rankings</Link>
      <Link to="/admin/media" style={styles.link}>Media</Link>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    background: "#161b22",
    borderBottom: "1px solid #30363d",
  },
  link: {
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
  },
};

