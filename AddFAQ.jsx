import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddFAQ = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    question: "",
    answer: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/faq", form);
      navigate("/admin/faq");
    } catch (err) {
      console.error("Failed to save FAQ:", err);
      alert("Error saving FAQ");
    }
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

  const buttonStyle = {
    padding: "12px 20px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Add FAQ</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input
          name="question"
          value={form.question}
          placeholder="FAQ Question"
          style={inputStyle}
          onChange={handleChange}
          required
        />

        <textarea
          name="answer"
          value={form.answer}
          placeholder="FAQ Answer"
          style={{ ...inputStyle, height: "140px" }}
          onChange={handleChange}
          required
        />

        <button type="submit" style={buttonStyle}>
          Save FAQ
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddFAQ;

