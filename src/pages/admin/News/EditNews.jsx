import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../layout/AdminLayout";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: ""
  });

  const loadNews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/news/${id}`);
      setForm(res.data);
    } catch (err) {
      console.error("Failed to load news:", err);
      alert("Error loading news article");
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/news/${id}`, form);
      navigate("/admin/news");
    } catch (err) {
      console.error("Failed to update news:", err);
      alert("Error updating news article");
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
      <h1>Edit News</h1>

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

        <button type="submit" style={button}>Save Changes</button>
      </form>
    </AdminLayout>
  );
};

export default EditNews;

