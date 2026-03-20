import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function CoachesCorner() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Coaches Corner</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        Insights, strategies, philosophies, and developmental approaches from
        coaches across the Pacific Northwest. As the BSR platform expands, this
        section will include interviews, system breakdowns, practice concepts,
        leadership discussions, and coaching resources designed to elevate
        programs at every level.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Coaching features and system insights coming soon.
      </div>
    </PublicLayout>
  );
}

