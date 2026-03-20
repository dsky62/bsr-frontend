import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRanking = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState({
    rank: "",
    playerId: ""
  });

  const loadPlayers = async () => {
    const res = await axios.get("http://localhost:5000/api/players");
    setPlayers(res.data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadPlayers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/rankings", form);

    navigate("/admin/rankings");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "white"
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1>Add Ranking</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          name="rank"
          value={form.rank}
          placeholder="Rank (e.g., 1)"
          style={inputStyle}
          onChange={handleChange}
        />

        <select
          name="playerId"
          value={form.playerId}
          style={inputStyle}
          onChange={handleChange}
        >
          <option value="">Select Player</option>
          {players.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            background: "#222",
            color: "white",
            border: "1px solid #444",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Save Ranking
        </button>
      </form>
    </div>
  );
};

export default AddRanking;

