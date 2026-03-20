import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function PlayerList() {
  // Temporary sample data — replace with API data later
  const players = [
    {
      id: 1,
      name: "Jalen Brooks",
      class: "2026",
      position: "G",
      school: "Tukwila HS",
      image: "https://via.placeholder.com/120x140?text=Player",
    },
    {
      id: 2,
      name: "Marcus Hill",
      class: "2027",
      position: "F",
      school: "Rainier Beach",
      image: "https://via.placeholder.com/120x140?text=Player",
    },
    {
      id: 3,
      name: "Evan Carter",
      class: "2025",
      position: "PG",
      school: "Federal Way",
      image: "https://via.placeholder.com/120x140?text=Player",
    },
  ];

  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Player Directory</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Browse players across the Pacific Northwest. This directory will
        eventually support filters, search tools, evaluation summaries, and
        direct links to full player profiles.
      </p>

      {/* Player Grid */}
      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {players.map((player) => (
          <div
            key={player.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 15,
              background: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 6,
                marginBottom: 10,
              }}
            />

            <div style={{ fontSize: 18, fontWeight: 600 }}>{player.name}</div>

            <div style={{ opacity: 0.7, marginTop: 4 }}>
              Class of {player.class}
            </div>

            <div style={{ opacity: 0.7 }}>{player.position}</div>

            <div style={{ opacity: 0.7, marginTop: 4 }}>{player.school}</div>

            <a
              href={`/public/players/${player.id}`}
              style={{
                display: "inline-block",
                marginTop: 12,
                fontSize: 14,
                color: "#0078ff",
                textDecoration: "none",
              }}
            >
              View Profile →
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, opacity: 0.5, fontSize: 13 }}>
        Full search and filtering tools coming soon.
      </div>
    </PublicLayout>
  );
}

