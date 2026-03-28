import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTeamById, updateTeam } from "../services/teamService"; // ✔ FIXED

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState({
    name: "",
    city: "",
    state: "",
    logo: "",
    coach: "",
    description: "",
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamById(id);
        setTeam(data);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    fetchTeam();
  }, [id]);

  const handleChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTeam(id, team);
      navigate(`/teams/${id}`);
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Edit Team</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl bg-zinc-900 p-6 rounded-xl shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-300">Team Name</span>
          <input
            type="text"
            name="name"
            value={team.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">City</span>
          <input
            type="text"
            name="city"
            value={team.city}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">State</span>
          <input
            type="text"
            name="state"
            value={team.state}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Coach</span>
          <input
            type="text"
            name="coach"
            value={team.coach}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Logo URL</span>
          <input
            type="text"
            name="logo"
            value={team.logo}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-300">Description</span>
          <textarea
            name="description"
            value={team.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-zinc-800 text-white h-32"
          />
        </label>

        <button
          type="submit"
          className="bg-yellow-500 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTeam;

