import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../layout/AdminLayout";

const Players = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/players");
      setPlayers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load players:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this player?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/players/${id}`);
      loadPlayers();
    } catch (err) {
      console.error("Failed to delete player:", err);
    }
  };

  const buttonStyle = {
    padding: "8px 14px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "8px",
    fontSize: "14px"
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Players</h1>

      <button
        onClick={() => navigate("/admin/players/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add Player
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Position</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Team</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{player.name}</td>
              <td style={{ padding: "10px" }}>{player.position}</td>
              <td style={{ padding: "10px" }}>{player.team}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/players/edit/${player._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(player._id)}
                  style={{ ...buttonStyle, background: "#550000", border: "1px solid #770000" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {players.length === 0 && (
            <tr>
              <td colSpan="4" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No players found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Players;

