import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PlayerProfile = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/players/${id}`);
        const data = await res.json();
        setPlayer(data);
      } catch (error) {
        console.error("Error loading player:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-zinc-400 text-sm tracking-wide">Loading player...</p>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-500 text-sm tracking-wide">Player not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="w-full border-b border-zinc-800 bg-black/90">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/players" className="text-zinc-400 hover:text-orange-400 text-sm">
            ← Back to Players
          </Link>
          <span className="text-xs text-zinc-500">Built by DLW Solutions LLC.</span>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">

        {/* LEFT: PLAYER IMAGE */}
        <div className="w-full">
          <div className="w-full aspect-square rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {player.image ? (
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: PLAYER INFO */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            {player.name}
          </h1>

          <p className="text-zinc-400 text-sm uppercase tracking-[0.18em]">
            Class of {player.classYear || "N/A"}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-[0.18em] mb-1">Height</p>
              <p className="text-lg">{player.height || "N/A"}</p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-[0.18em] mb-1">Position</p>
              <p className="text-lg">{player.position || "N/A"}</p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-[0.18em] mb-1">Team</p>
              <p className="text-lg">{player.team || "N/A"}</p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-[0.18em] mb-1">Rank</p>
              <p className="text-lg">{player.rank || "Unranked"}</p>
            </div>
          </div>

          {/* BIO */}
          <div className="mt-6 border border-zinc-800 rounded-lg p-4">
            <p className="text-xs text-zinc-500 uppercase tracking-[0.18em] mb-2">Scouting Report</p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {player.bio || "No scouting report available."}
            </p>
          </div>

          {/* SOCIAL LINKS */}
          {player.social && (
            <div className="mt-4 flex gap-4">
              {player.social.instagram && (
                <a
                  href={player.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm"
                >
                  Instagram →
                </a>
              )}
              {player.social.twitter && (
                <a
                  href={player.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm"
                >
                  X / Twitter →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;

