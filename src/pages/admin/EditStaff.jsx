import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const EditStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: ""
  });

  const loadStaff = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/staff/${id}`);
      const data = res.data;

      setForm({
        name: data.name || "",
        role: data.role || ""
      });
    } catch (err) {
      console.error("Failed to load staff:", err);
      alert("Error loading staff member");
    }
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/staff/${id}`, form);
      navigate("/admin/staff");
    } catch (err) {
      console.error("Failed to update staff:", err);
      alert("Error updating staff member");
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
      <h1 style={{ marginBottom: "20px" }}>Edit Staff Member</h1>

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
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
};

export default EditStaff;

