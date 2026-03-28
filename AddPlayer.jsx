import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddPlayer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("position", position);
      formData.append("team", team);

      if (photo) {
        formData.append("photo", photo);
      }

      await axios.post("http://localhost:5000/api/players", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/admin/players");
    } catch (err) {
      console.error("Failed to add player:", err);
      alert("Error saving player");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "white",
  };

  const buttonStyle = {
    padding: "10px 18px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Add Player</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Player Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Save Player
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddPlayer;

