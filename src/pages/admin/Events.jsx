import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      loadEvents();
    }
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1>Events</h1>

      <button
        onClick={() => navigate("/admin/events/add")}
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
        Add Event
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Title</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Date</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Location</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "12px" }}>{event.title}</td>
              <td style={{ padding: "12px" }}>{event.date}</td>
              <td style={{ padding: "12px" }}>{event.location}</td>

              <td style={{ padding: "12px" }}>
                <button
                  onClick={() => navigate(`/admin/events/edit/${event._id}`)}
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
                  onClick={() => handleDelete(event._id)}
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

export default AdminEvents;

