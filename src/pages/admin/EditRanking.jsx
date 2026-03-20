import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../layout/AdminLayout";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditRanking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [classYear, setClassYear] = useState("");
  const [description, setDescription] = useState("");

  const [players, setPlayers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [rankingPlayers, setRankingPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/players");
        setPlayers(res.data);
      } catch (err) {
        console.error("Error loading players:", err);
      }
    };
    loadPlayers();
  }, []);

  useEffect(() => {
    const loadRanking = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/rankings/${id}`);
        const data = res.data;

        setTitle(data.title);
        setClassYear(data.classYear);
        setDescription(data.description);

        setRankingPlayers(
          data.players.map((p) => ({
            playerId: p.playerId._id,
            name: p.playerId.name,
            rank: p.rank,
            notes: p.notes || "",
          }))
        );
      } catch (err) {
        console.error("Error loading ranking:", err);
      }
    };

    loadRanking();
  }, [id]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = players.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const addPlayer = (player) => {
    if (rankingPlayers.some((p) => p.playerId === player._id)) return;

    setRankingPlayers([
      ...rankingPlayers,
      {
        playerId: player._id,
        name: player.name,
        rank: rankingPlayers.length + 1,
        notes: "",
      },
    ]);

    setSearchTerm("");
    setSearchResults([]);
  };

  const updatePlayer = (index, field, value) => {
    const updated = [...rankingPlayers];
    updated[index][field] = value;
    setRankingPlayers(updated);
  };

  const removePlayer = (index) => {
    const updated = rankingPlayers.filter((_, i) => i !== index);
    setRankingPlayers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/rankings/${id}`, {
        title,
        classYear,
        description,
        players: rankingPlayers.map((p) => ({
          playerId: p.playerId,
          rank: Number(p.rank),
          notes: p.notes,
        })),
      });

      navigate("/admin/rankings");
    } catch (err) {
      console.error("Error updating ranking:", err);
      alert("Error updating ranking");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto text-white p-6">

        <Link to="/admin/rankings" className="text-orange-400 text-sm">
          ← Back to Rankings
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-6">Edit Ranking Page</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm mb-1">Ranking Title</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Class Year</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
              value={classYear}
              onChange={(e) => setClassYear(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Player Search */}
          <div>
            <label className="block text-sm mb-1">Add Players</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />

            {searchResults.length > 0 && (
              <div className="bg-zinc-800 border border-zinc-700 rounded mt-2 max-h-40 overflow-y-auto">
                {searchResults.map((player) => (
                  <div
                    key={player._id}
                    className="p-2 hover:bg-zinc-700 cursor-pointer"
                    onClick={() => addPlayer(player)}
                  >
                    {player.name} — {player.position} — {player.class}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Ranked Players</h2>

            {rankingPlayers.length === 0 && (
              <p className="text-zinc-500 text-sm">No players added yet.</p>
            )}

            <div className="space-y-4">
              {rankingPlayers.map((p, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-700 rounded p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">{p.name}</p>
                    <button
                      type="button"
                      className="text-red-400 text-sm"
                      onClick={() => removePlayer(index)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-1">Rank #</label>
                      <input
                        type="number"
                        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                        value={p.rank}
                        onChange={(e) =>
                          updatePlayer(index, "rank", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-xs mb-1">Notes</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
                        value={p.notes}
                        onChange={(e) =>
                          updatePlayer(index, "notes", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditRanking;

