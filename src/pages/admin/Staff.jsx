import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Staff = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

  const loadStaff = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/staff");
      setStaff(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load staff:", err);
    }
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this staff member?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/staff/${id}`);
      loadStaff();
    } catch (err) {
      console.error("Failed to delete staff:", err);
    }
  };

  const buttonStyle = {
    padding: "8px 14px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "8px",
    fontSize: "14px"
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Staff</h1>

      <button
        onClick={() => navigate("/admin/staff/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add Staff
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Role</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((person) => (
            <tr key={person._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{person.name}</td>
              <td style={{ padding: "10px" }}>{person.role}</td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/staff/edit/${person._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(person._id)}
                  style={{
                    ...buttonStyle,
                    background: "#550000",
                    border: "1px solid #770000"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {staff.length === 0 && (
            <tr>
              <td colSpan="3" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No staff members found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Staff;

