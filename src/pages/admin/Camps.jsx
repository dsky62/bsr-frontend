import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Camps = () => {
  const navigate = useNavigate();
  const [camps, setCamps] = useState([]);

  const loadCamps = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/camps");
      setCamps(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load camps:", err);
    }
  };

  useEffect(() => {
    loadCamps();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this camp?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/camps/${id}`);
      loadCamps();
    } catch (err) {
      console.error("Failed to delete camp:", err);
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
      <h1 style={{ marginBottom: "20px" }}>Camps</h1>

      <button
        onClick={() => navigate("/admin/camps/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add Camp
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Location</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Date</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {camps.map((camp) => (
            <tr key={camp._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{camp.name}</td>
              <td style={{ padding: "10px" }}>{camp.location}</td>
              <td style={{ padding: "10px" }}>{camp.date}</td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/camps/edit/${camp._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(camp._id)}
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

          {camps.length === 0 && (
            <tr>
              <td colSpan="4" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No camps found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Camps;

