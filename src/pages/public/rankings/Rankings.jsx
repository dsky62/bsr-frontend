import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Rankings() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Rankings</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        Class-by-class rankings, positional tiers, and movement updates across
        the Pacific Northwest. As the BSR platform expands, this section will
        include sortable ranking lists, player movement notes, evaluation
        explanations, and long‑term projection insights.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Updated rankings and class evaluations coming soon.
      </div>
    </PublicLayout>
  );
}

