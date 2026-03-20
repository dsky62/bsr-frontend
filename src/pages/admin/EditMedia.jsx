import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMedia = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "",
    url: "",
    description: ""
  });

  const loadMedia = async () => {
    const res = await axios.get(`http://localhost:5000/api/media/${id}`);
    const data = res.data;

    setForm({
      title: data.title || "",
      type: data.type || "",
      url: data.url || "",
      description: data.description || ""
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadMedia();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/media/${id}`, form);

    navigate("/admin/media");
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
      <h1>Edit Media</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          name="title"
          value={form.title}
          placeholder="Media Title"
          style={inputStyle}
          onChange={handleChange}
        />

        <select
          name="type"
          value={form.type}
          style={inputStyle}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>

        <input
          name="url"
          value={form.url}
          placeholder="Media URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
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

export default EditMedia;

