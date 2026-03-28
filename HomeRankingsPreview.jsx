import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeRankingsPreview = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const loadRankings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rankings");
        setRankings(res.data.slice(0, 3)); // Show top 3 ranking pages
      } catch (err) {
        console.error("Error loading rankings:", err);
      }
    };

    loadRankings();
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-white mb-6">Latest Rankings</h2>

      {rankings.length === 0 ? (
        <p className="text-zinc-400">No rankings available yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {rankings.map((ranking) => (
            <Link
              key={ranking._id}
              to={`/rankings/profile/${ranking._id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition block"
            >
              <h3 className="text-xl font-semibold text-white">
                {ranking.title}
              </h3>

              <p className="text-orange-400 text-sm mt-1">
                Class of {ranking.classYear}
              </p>

              {ranking.description && (
                <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
                  {ranking.description}
                </p>
              )}

              <p className="text-zinc-500 text-xs mt-4">
                {ranking.players?.length || 0} players ranked
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link
          to="/rankings"
          className="text-orange-400 hover:text-orange-300 text-sm"
        >
          View All Rankings →
        </Link>
      </div>
    </div>
  );
};

export default HomeRankingsPreview;

