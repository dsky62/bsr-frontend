import React from "react";
import { Link } from "react-router-dom";

export default function PublicLayout({ children }) {
  const neon = "#00B4FF";

  return (
    <div style={{ background: "#020203", minHeight: "100vh", color: "#fff", fontFamily: "Arial" }}>

      {/* TOP HEADER */}
      <header
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.4)",
          position: "sticky",
          top: 0,
          zIndex: 50
        }}
      >
        {/* LOGO */}
        <Link to="/public/home" style={{ textDecoration: "none" }}>
          <img
            src="/images/bsr-logo.png"
            alt="BSR Logo"
            style={{
              width: 130,
              filter: "drop-shadow(0 0 10px #00B4FF)",
            }}
          />
        </Link>

        {/* BACK TO HOME */}
        <Link
          to="/public/home"
          style={{
            color: neon,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          ← Back to Homepage
        </Link>
      </header>

      {/* PAGE CONTENT */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>

    </div>
  );
}

