import React from "react";

const PublicNav = () => {
  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo / Brand */}
        <a
          href="/"
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Brooks Scouting Report
        </a>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/players" style={linkStyle}>Players</a>
          <a href="/teams" style={linkStyle}>Teams</a>
          <a href="/rankings" style={linkStyle}>Rankings</a>
          <a href="/events" style={linkStyle}>Events</a>
          <a href="/media" style={linkStyle}>Media</a>
          <a href="/news" style={linkStyle}>News</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </div>

      </div>
    </nav>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

export default PublicNav;

