import React, { useState } from "react";
import { addTeam } from "../../services/teamService";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    city: "",
    state: "",
    level: "",
    bio: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeam(form);
    navigate("/admin/teams");
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
      <h1>Add Team</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input name="name" placeholder="Team Name" style={inputStyle} onChange={handleChange} />
        <input name="city" placeholder="City" style={inputStyle} onChange={handleChange} />
        <input name="state" placeholder="State" style={inputStyle} onChange={handleChange} />
        <input name="level" placeholder="Level (e.g., 17U, Varsity)" style={inputStyle} onChange={handleChange} />

        <textarea
          name="bio"
          placeholder="Team Bio"
          style={{ ...inputStyle, height: "120px" }}
          onChange={handleChange}
        />

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
          Save Team
        </button>
      </form>
    </div>
  );
};

export default AddTeam;

