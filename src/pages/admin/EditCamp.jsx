import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const EditCamp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    description: ""
  });

  const loadCamp = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/camps/${id}`);
      setForm(res.data);
    } catch (err) {
      console.error("Failed to load camp:", err);
      alert("Error loading camp");
    }
  };

  useEffect(() => {
    loadCamp();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/camps/${id}`, form);
      navigate("/admin/camps");
    } catch (err) {
      console.error("Failed to update camp:", err);
      alert("Error updating camp");
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
      <h1>Edit Camp</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input name="name" value={form.name} placeholder="Camp Name" onChange={handleChange} style={input} required />
        <input name="location" value={form.location} placeholder="Location" onChange={handleChange} style={input} />
        <input name="date" value={form.date} placeholder="Date" onChange={handleChange} style={input} />
        <textarea name="description" value={form.description} placeholder="Description" onChange={handleChange} style={{ ...input, height: "120px" }} />

        <button type="submit" style={button}>Save Changes</button>
      </form>
    </AdminLayout>
  );
};

export default EditCamp;

