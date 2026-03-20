import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Coaches = () => {
  const navigate = useNavigate();
  const [coaches, setCoaches] = useState([]);

  const loadCoaches = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/coaches");
      setCoaches(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load coaches:", err);
    }
  };

  useEffect(() => {
    loadCoaches();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this coach?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/coaches/${id}`);
      loadCoaches();
    } catch (err) {
      console.error("Failed to delete coach:", err);
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
      <h1 style={{ marginBottom: "20px" }}>Coaches</h1>

      <button
        onClick={() => navigate("/admin/coaches/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add Coach
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Title</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Photo</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {coaches.map((c) => (
            <tr key={c._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{c.name}</td>
              <td style={{ padding: "10px" }}>{c.title}</td>
              <td style={{ padding: "10px" }}>
                {c.photo && (
                  <img
                    src={c.photo}
                    alt="coach"
                    style={{ width: "60px", height: "auto", borderRadius: "4px" }}
                  />
                )}
              </td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/coaches/edit/${c._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(c._id)}
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

          {coaches.length === 0 && (
            <tr>
              <td colSpan="4" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No coaches found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Coaches;

