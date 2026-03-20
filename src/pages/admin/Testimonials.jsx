import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminTestimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = async () => {
    const res = await axios.get("http://localhost:5000/api/testimonials");
    setTestimonials(res.data);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
      loadTestimonials();
    }
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1>Testimonials</h1>

      <button
        onClick={() => navigate("/admin/testimonials/add")}
        style={{
          padding: "10px 20px",
          background: "#222",
          color: "white",
          border: "1px solid #444",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Add Testimonial
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Message</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {testimonials.map((t) => (
            <tr key={t._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "12px", width: "25%" }}>{t.name}</td>
              <td style={{ padding: "12px", width: "55%" }}>{t.message}</td>

              <td style={{ padding: "12px" }}>
                <button
                  onClick={() => navigate(`/admin/testimonials/edit/${t._id}`)}
                  style={{
                    marginRight: "10px",
                    padding: "6px 12px",
                    background: "#333",
                    color: "white",
                    border: "1px solid #444",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(t._id)}
                  style={{
                    padding: "6px 12px",
                    background: "#550000",
                    color: "white",
                    border: "1px solid #770000",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTestimonials;

