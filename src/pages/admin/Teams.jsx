import React, { useEffect, useState } from "react";
import { getTeams, deleteTeam } from "../../services/teamService";
import { useNavigate } from "react-router-dom";

const AdminTeams = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  const loadTeams = async () => {
    const data = await getTeams();
    setTeams(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadTeams();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this team?")) {
      await deleteTeam(id);
      loadTeams();
    }
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1>Teams</h1>

      <button
        onClick={() => navigate("/admin/teams/add")}
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
        Add Team
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#111" }}>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Name</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>City</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>State</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Level</th>
            <th style={{ padding: "12px", borderBottom: "1px solid #333" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => (
            <tr key={team._id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "12px" }}>{team.name}</td>
              <td style={{ padding: "12px" }}>{team.city}</td>
              <td style={{ padding: "12px" }}>{team.state}</td>
              <td style={{ padding: "12px" }}>{team.level}</td>

              <td style={{ padding: "12px" }}>
                <button
                  onClick={() => navigate(`/admin/teams/edit/${team._id}`)}
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
                  onClick={() => handleDelete(team._id)}
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

export default AdminTeams;

