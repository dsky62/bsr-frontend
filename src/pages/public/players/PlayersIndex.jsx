import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function PlayersIndex() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Players</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Explore players across the Pacific Northwest. As the BSR platform
        expands, this section will include full player lists, search tools,
        evaluation summaries, rankings integration, and individual player
        profiles with film, stats, and scouting notes.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Player directory and profile tools coming soon.
      </div>
    </PublicLayout>
  );
}

