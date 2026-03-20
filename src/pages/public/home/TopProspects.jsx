import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function TopProspects() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Top Prospects</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        The players generating the most buzz across the Pacific Northwest and
        beyond. This section will expand into full scouting profiles, strengths,
        weaknesses, film clips, and projection notes as the BSR platform grows.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Prospect rankings and evaluations coming soon.
      </div>
    </PublicLayout>
  );
}

