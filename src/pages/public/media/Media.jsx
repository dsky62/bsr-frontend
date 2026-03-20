import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Media() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Media</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        Highlights, mixes, interviews, and visual storytelling from across the
        Pacific Northwest. As the BSR platform expands, this section will
        include curated highlight reels, player features, event recaps, and
        multimedia content built to showcase prospects at every level.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Media features and highlight reels coming soon.
      </div>
    </PublicLayout>
  );
}

