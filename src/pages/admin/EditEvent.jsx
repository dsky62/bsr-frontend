import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    imageUrl: "",
    description: ""
  });

  useEffect(() => {
    const loadEvent = async () => {
      const res = await axios.get(`http://localhost:5000/api/events/${id}`);
      setForm(res.data);
    };
    loadEvent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/events/${id}`, form);
    navigate("/admin/events");
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
      <h1>Edit Event</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          name="title"
          value={form.title}
          placeholder="Event Title"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="date"
          value={form.date}
          placeholder="Event Date"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="location"
          value={form.location}
          placeholder="Location"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="imageUrl"
          value={form.imageUrl}
          placeholder="Image URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Event Description"
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEvent;

