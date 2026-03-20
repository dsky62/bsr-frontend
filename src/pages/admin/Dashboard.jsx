import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const cardStyle = {
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #333",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "18px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", padding: "40px", color: "white" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Admin Dashboard</h1>
      <p style={{ color: "#888" }}>Manage all BSR content from one place.</p>

      <div style={gridStyle}>
        <div style={cardStyle} onClick={() => navigate("/admin/players")}>Players</div>
        <div style={cardStyle} onClick={() => navigate("/admin/teams")}>Teams</div>
        <div style={cardStyle} onClick={() => navigate("/admin/rankings")}>Rankings</div>
        <div style={cardStyle} onClick={() => navigate("/admin/events")}>Events</div>
        <div style={cardStyle} onClick={() => navigate("/admin/media")}>Media Content</div>
        <div style={cardStyle} onClick={() => navigate("/admin/news")}>News</div>
        <div style={cardStyle} onClick={() => navigate("/admin/faq")}>FAQ</div>
        <div style={cardStyle} onClick={() => navigate("/admin/testimonials")}>Testimonials</div>
        <div style={cardStyle} onClick={() => navigate("/admin/staff")}>Staff</div>
        <div style={cardStyle} onClick={() => navigate("/admin/partners")}>Partners</div>
        <div style={cardStyle} onClick={() => navigate("/admin/camps")}>Camps</div>
        <div style={cardStyle} onClick={() => navigate("/admin/coaches")}>Coaches</div>
      </div>
    </div>
  );
};

export default Dashboard;

