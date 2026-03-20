import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Evaluations() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Evaluations</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        In‑depth scouting reports, strengths and weaknesses, developmental
        notes, and long‑term projection insights. As the BSR platform expands,
        this section will include full written evaluations, film breakdowns,
        positional analysis, and player comparison tools.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Scouting evaluations and breakdowns coming soon.
      </div>
    </PublicLayout>
  );
}

