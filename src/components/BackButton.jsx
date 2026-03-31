import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "80px",
        left: "20px",
        zIndex: 999,
        background: "linear-gradient(90deg, #00B4FF, #0088CC)",
        color: "#000",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "14px",
        transition: "0.3s",
        boxShadow: "0 0 15px rgba(0, 180, 255, 0.6)",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "linear-gradient(90deg, #00D4FF, #00A8FF)";
        e.target.style.boxShadow = "0 0 25px rgba(0, 180, 255, 0.9)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "linear-gradient(90deg, #00B4FF, #0088CC)";
        e.target.style.boxShadow = "0 0 15px rgba(0, 180, 255, 0.6)";
      }}
    >
      ← Back
    </button>
  );
};

export default BackButton;