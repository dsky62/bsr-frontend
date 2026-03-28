import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddPartner = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    logo: "",
    website: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/partners", form);
      navigate("/admin/partners");
    } catch (err) {
      console.error("Failed to save partner:", err);
      alert("Error saving partner");
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
      <h1 style={{ marginBottom: "20px" }}>Add Partner</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input
          name="name"
          value={form.name}
          placeholder="Partner Name"
          style={inputStyle}
          onChange={handleChange}
          required
        />

        <input
          name="logo"
          value={form.logo}
          placeholder="Logo URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="website"
          value={form.website}
          placeholder="Website URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Short Description"
          style={{ ...inputStyle, height: "120px" }}
          onChange={handleChange}
        />

        <button type="submit" style={buttonStyle}>
          Save Partner
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddPartner;

