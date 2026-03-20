import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Media = () => {
  const navigate = useNavigate();
  const [media, setMedia] = useState([]);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/media");
      setMedia(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load media:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this media item?")) {
      try {
        await axios.delete(`http://localhost:5000/api/media/${id}`);
        loadMedia();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "#222",
    color: "white",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "10px"
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1 style={{ marginBottom: "20px" }}>Media Content</h1>

      <button
        onClick={() => navigate("/admin/media/add")}
        style={buttonStyle}
      >
        + Add Media
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Title</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Type</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Preview</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {media.map((item) => (
            <tr key={item._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "12px" }}>{item.title}</td>
              <td style={{ padding: "12px" }}>{item.type}</td>

              <td style={{ padding: "12px" }}>
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{ width: "80px", borderRadius: "4px" }}
                  />
                ) : (
                  <video
                    src={item.url}
                    style={{ width: "120px", borderRadius: "4px" }}
                    controls
                  />
                )}
              </td>

              <td style={{ padding: "12px" }}>
                <button
                  onClick={() => navigate(`/admin/media/edit/${item._id}`)}
                  style={buttonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
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
        </tbody>
      </table>
    </div>
  );
};

export default Media;

