import React from "react";
import { useNavigate } from "react-router-dom";

const AdminBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/admin")}
      style={{
        padding: "8px 14px",
        background: "#111",
        color: "white",
        border: "1px solid #333",
        borderRadius: "6px",
        cursor: "pointer",
        marginBottom: "20px",
        fontSize: "14px"
      }}
    >
      ← Back to Dashboard
    </button>
  );
};

export default AdminBackButton;

