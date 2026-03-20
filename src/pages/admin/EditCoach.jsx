import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const EditCoach = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    title: "",
    photo: "",
    bio: ""
  });

  const loadCoach = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/coaches/${id}`);
      setForm(res.data);
    } catch (err) {
      console.error("Failed to load coach:", err);
      alert("Error loading coach");
    }
  };

  useEffect(() => {
    loadCoach();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/coaches/${id}`, form);
      navigate("/admin/coaches");
    } catch (err) {
      console.error("Failed to update coach:", err);
      alert("Error updating coach");
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
      <h1>Edit Coach</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input name="name" value={form.name} placeholder="Coach Name" onChange={handleChange} style={input} required />
        <input name="title" value={form.title} placeholder="Title" onChange={handleChange} style={input} />
        <input name="photo" value={form.photo} placeholder="Photo URL" onChange={handleChange} style={input} />
        <textarea name="bio" value={form.bio} placeholder="Short Bio" onChange={handleChange} style={{ ...input, height: "120px" }} />

        <button type="submit" style={button}>Save Changes</button>
      </form>
    </AdminLayout>
  );
};

export default EditCoach;

