import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../layout/AdminLayout";   // ✅ FIXED IMPORT
import { Link } from "react-router-dom";

const Rankings = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all ranking pages
  useEffect(() => {
    const loadRankings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rankings");
        setRankings(res.data);
      } catch (err) {
        console.error("Error loading rankings:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRankings();
  }, []);

  // Delete ranking page
  const deleteRanking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this ranking page?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/rankings/${id}`);
      setRankings(rankings.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Error deleting ranking:", err);
      alert("Error deleting ranking");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto text-white p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Rankings</h1>

          <Link
            to="/admin/rankings/add"
            className="px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition"
          >
            + Add Ranking Page
          </Link>
        </div>

        {loading ? (
          <p className="text-zinc-400">Loading rankings…</p>
        ) : rankings.length === 0 ? (
          <p className="text-zinc-500">No ranking pages created yet.</p>
        ) : (
          <div className="space-y-4">
            {rankings.map((ranking) => (
              <div
                key={ranking._id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{ranking.title}</h2>
                  <p className="text-orange-400 text-sm">
                    Class of {ranking.classYear}
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    {ranking.players?.length || 0} players ranked
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/admin/rankings/edit/${ranking._id}`}
                    className="px-4 py-2 bg-blue-500 text-black font-semibold rounded hover:bg-blue-400 transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteRanking(ranking._id)}
                    className="px-4 py-2 bg-red-500 text-black font-semibold rounded hover:bg-red-400 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default Rankings;

