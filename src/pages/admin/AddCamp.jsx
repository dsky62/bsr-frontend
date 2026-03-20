import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddCamp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/camps", form);
      navigate("/admin/camps");
    } catch (err) {
      console.error("Failed to save camp:", err);
      alert("Error saving camp");
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
      <h1>Add Camp</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input name="name" placeholder="Camp Name" value={form.name} onChange={handleChange} style={input} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} style={input} />
        <input name="date" placeholder="Date" value={form.date} onChange={handleChange} style={input} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} style={{ ...input, height: "120px" }} />

        <button type="submit" style={button}>Save Camp</button>
      </form>
    </AdminLayout>
  );
};

export default AddCamp;

