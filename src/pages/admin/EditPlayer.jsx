import React, { useEffect, useState } from "react";
import { getPlayerById, updatePlayer } from "../../services/playerService";
import { useNavigate, useParams } from "react-router-dom";

const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    position: "",
    school: "",
    height: "",
    weight: "",
    photoUrl: "",
    bio: ""
  });

  const loadPlayer = async () => {
    const data = await getPlayerById(id);
    setForm({
      name: data.name || "",
      position: data.position || "",
      school: data.school || "",
      height: data.height || "",
      weight: data.weight || "",
      photoUrl: data.photoUrl || "",
      bio: data.bio || ""
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadPlayer();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePlayer(id, form);
    navigate("/admin/players");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "white"
  };

  return (
    <div style={{ padding: "40px", background: "#000", minHeight: "100vh", color: "white" }}>
      <h1>Edit Player</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          name="name"
          value={form.name}
          placeholder="Player Name"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="position"
          value={form.position}
          placeholder="Position"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="school"
          value={form.school}
          placeholder="School"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="height"
          value={form.height}
          placeholder="Height"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="weight"
          value={form.weight}
          placeholder="Weight"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="photoUrl"
          value={form.photoUrl}
          placeholder="Photo URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="bio"
          value={form.bio}
          placeholder="Player Bio"
          style={{ ...inputStyle, height: "120px" }}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            background: "#222",
            color: "white",
            border: "1px solid #444",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPlayer;

