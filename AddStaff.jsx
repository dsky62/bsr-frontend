import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const AddStaff = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/staff", form);
      navigate("/admin/staff");
    } catch (err) {
      console.error("Failed to save staff:", err);
      alert("Error saving staff member");
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
      <h1 style={{ marginBottom: "20px" }}>Add Staff Member</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <input
          name="name"
          value={form.name}
          placeholder="Full Name"
          style={inputStyle}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          value={form.role}
          placeholder="Role / Position"
          style={inputStyle}
          onChange={handleChange}
          required
        />

        <button type="submit" style={buttonStyle}>
          Save Staff Member
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddStaff;

