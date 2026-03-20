import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../layout/AdminLayout";

const AddNews = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/news", form);
      navigate("/admin/news");
    } catch (err) {
      console.error("Failed to create news:", err);
      alert("Error creating news");
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
      <h1>Add News</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "700px" }}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={input}
          required
        />

        <input
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          style={input}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={input}
        />

        <textarea
          name="content"
          placeholder="Full Content"
          value={form.content}
          onChange={handleChange}
          style={{ ...input, height: "180px" }}
          required
        />

        <button type="submit" style={button}>Publish News</button>
      </form>
    </AdminLayout>
  );
};

export default AddNews;

