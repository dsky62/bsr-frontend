import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../layout/AdminLayout";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNews(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load news:", err);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this article?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      loadNews();
    } catch (err) {
      console.error("Failed to delete news:", err);
    }
  };

  const button = {
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
      <h1 style={{ marginBottom: "20px" }}>News</h1>

      <button
        onClick={() => navigate("/admin/news/add")}
        style={{ ...button, marginBottom: "20px" }}
      >
        + Add News
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Title</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Description</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px" }}>{item.title}</td>
              <td style={{ padding: "10px" }}>{item.description}</td>

              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => navigate(`/admin/news/edit/${item._id}`)}
                  style={button}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  style={{
                    ...button,
                    background: "#550000",
                    border: "1px solid #770000"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {news.length === 0 && (
            <tr>
              <td colSpan="3" style={{ padding: "12px", textAlign: "center", color: "#888" }}>
                No news articles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default News;

