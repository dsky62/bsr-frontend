import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicNav = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid rgba(0,180,255,0.2)",
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
          🏀 Brooks Scouting Report
        </a>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/public/players" style={linkStyle}>Players</a>
          <a href="/public/teams" style={linkStyle}>Teams</a>
          <a href="/public/rankings" style={linkStyle}>Rankings</a>
          <a href="/public/events" style={linkStyle}>Events</a>
          <a href="/public/media" style={linkStyle}>Media</a>
          <a href="/public/news" style={linkStyle}>News</a>
          <a href="/public/contact" style={linkStyle}>Contact</a>

          {/* COACHES CORNER */}
          <a href="/public/coaches-corner" style={linkStyle}>
            👨‍🏫 Coaches Corner
          </a>

          {/* AUTH SECTION */}
          <div style={{ display: "flex", gap: "15px", alignItems: "center", marginLeft: "20px", paddingLeft: "20px", borderLeft: "1px solid rgba(0,180,255,0.3)" }}>
            
            {user ? (
              <>
                {/* USER IS LOGGED IN */}
                <span style={{ color: "#00B4FF", fontSize: "14px", fontWeight: "700" }}>
                  👤 {user.name}
                </span>

                {/* ADMIN DASHBOARD - ONLY FOR COACHES */}
                {user.role === "coach" && (
                  <button
                    onClick={() => navigate("/admin")}
                    style={{
                      background: "linear-gradient(90deg, #00B4FF, #0088CC)",
                      color: "#000",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "13px",
                      transition: "0.3s"
                    }}
                    onMouseEnter={(e) => e.target.style.background = "linear-gradient(90deg, #00D4FF, #00A8FF)"}
                    onMouseLeave={(e) => e.target.style.background = "linear-gradient(90deg, #00B4FF, #0088CC)"}
                  >
                    ⚙️ Admin Dashboard
                  </button>
                )}

                {/* PROFILE LINK */}
                <button
                  onClick={() => navigate("/auth/profile")}
                  style={{
                    background: "rgba(0,180,255,0.1)",
                    color: "#00B4FF",
                    border: "1px solid rgba(0,180,255,0.3)",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "13px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.background = "rgba(0,180,255,0.2)"}
                  onMouseLeave={(e) => e.target.style.background = "rgba(0,180,255,0.1)"}
                >
                  📋 Profile
                </button>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={handleLogout}
                  style={{
                    background: "rgba(255,0,0,0.2)",
                    color: "#FF6B6B",
                    border: "1px solid rgba(255,0,0,0.5)",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "13px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.background = "rgba(255,0,0,0.3)"}
                  onMouseLeave={(e) => e.target.style.background = "rgba(255,0,0,0.2)"}
                >
                  🚪 Logout
                </button>
              </>
            ) : (
              <>
                {/* USER NOT LOGGED IN */}
                <button
                  onClick={() => navigate("/auth/login")}
                  style={{
                    background: "linear-gradient(90deg, #00B4FF, #0088CC)",
                    color: "#000",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "13px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.background = "linear-gradient(90deg, #00D4FF, #00A8FF)"}
                  onMouseLeave={(e) => e.target.style.background = "linear-gradient(90deg, #00B4FF, #0088CC)"}
                >
                  🔐 Login
                </button>

                <button
                  onClick={() => navigate("/auth/signup")}
                  style={{
                    background: "rgba(0,180,255,0.1)",
                    color: "#00B4FF",
                    border: "1px solid rgba(0,180,255,0.3)",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "13px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => e.target.style.background = "rgba(0,180,255,0.2)"}
                  onMouseLeave={(e) => e.target.style.background = "rgba(0,180,255,0.1)"}
                >
                  ✍️ Sign Up
                </button>
              </>
            )}
          </div>
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
  transition: "0.3s",
  cursor: "pointer"
};

export default PublicNav;