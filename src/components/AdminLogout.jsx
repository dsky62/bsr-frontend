import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  const neon = "#00B4FF";

  return (
    <div style={{ background: "#020203", minHeight: "100vh", color: "#fff", fontFamily: "Arial" }}>

      {/* ADMIN HEADER */}
      <header style={{
        padding: "16px 20px",
        borderBottom: "1px solid rgba(255,255,255,.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.4)",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <h2 style={{ color: neon, margin: 0 }}>⚙️ Admin Panel</h2>
        </Link>
        <Link
          to="/"
          style={{
            color: neon,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          ← Back to Homepage
        </Link>
      </header>

      {/* ADMIN CONTENT */}
      <main style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto" }}>
        {children}
      </main>

    </div>
  );
}