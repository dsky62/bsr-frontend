import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const FAQ = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);

  const loadFaqs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/faq");
      setFaqs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load FAQs:", err);
    }
  };

  useEffect(() => {
    loadFaqs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/faq/${id}`);
      loadFaqs();
    } catch (err) {
      console.error("Failed to delete FAQ:", err);
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
      <h1 style={{ marginBottom: "20px" }}>FAQ</h1>

      <button
        onClick={() => navigate("/admin/faq/add")}
        style={{ ...buttonStyle, marginBottom: "20px" }}
      >
        + Add FAQ
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Question</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Answer</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {faqs.map((faq) => (
            <tr key={faq._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px", width: "35%" }}>{faq.question}</td>
              <td style={{ padding: "10px", width: "45%" }}>{faq.answer}</td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/faq/edit/${faq._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(faq._id)}
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

          {faqs.length === 0 && (
            <tr>
              <td colSpan="3" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No FAQs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default FAQ;

