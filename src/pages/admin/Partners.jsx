import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Partners = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);

  const loadPartners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/partners");
      setPartners(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load partners:", err);
    }
  };

  useEffect(() => {
    loadPartners();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this partner?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/partners/${id}`);
      loadPartners();
    } catch (err) {
      console.error("Failed to delete partner:", err);
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
      <h1 style={{ marginBottom: "20px" }}>Partners</h1>

      <button
        onClick={() => navigate("/admin/partners/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add Partner
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Website</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Logo</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {partners.map((p) => (
            <tr key={p._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{p.name}</td>
              <td style={{ padding: "10px" }}>{p.website}</td>
              <td style={{ padding: "10px" }}>
                {p.logo && (
                  <img
                    src={p.logo}
                    alt="logo"
                    style={{ width: "60px", height: "auto", borderRadius: "4px" }}
                  />
                )}
              </td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/partners/edit/${p._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
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

          {partners.length === 0 && (
            <tr>
              <td colSpan="4" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No partners found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Partners;

