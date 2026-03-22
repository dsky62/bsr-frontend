import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTestimonial = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    message: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/testimonials", form);
    navigate("/admin/testimonials");
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
      <h1>Add Testimonial</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          name="name"
          value={form.name}
          placeholder="Person's Name"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="imageUrl"
          value={form.imageUrl}
          placeholder="Image URL (optional)"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="message"
          value={form.message}
          placeholder="Testimonial Message"
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
          Save Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;

