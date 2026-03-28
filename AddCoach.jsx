import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddCoach = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    title: "",
    photo: "",
    bio: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/coaches", form);
      navigate("/admin/coaches");
    } catch (err) {
      console.error("Failed to save coach:", err);
      alert("Error saving coach");
    }
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "white"
  };

  const button = {
    padding: "12px 20px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <AdminLayout>
      <h1>Add Coach</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input name="name" placeholder="Coach Name" value={form.name} onChange={handleChange} style={input} required />
        <input name="title" placeholder="Title (e.g., Head Coach)" value={form.title} onChange={handleChange} style={input} />
        <input name="photo" placeholder="Photo URL" value={form.photo} onChange={handleChange} style={input} />
        <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} style={{ ...input, height: "120px" }} />

        <button type="submit" style={button}>Save Coach</button>
      </form>
    </AdminLayout>
  );
};

export default AddCoach;

