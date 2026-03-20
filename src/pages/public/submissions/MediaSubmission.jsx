import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function MediaSubmission() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Media Submission</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Photographers, videographers, and media partners will soon be able to
        submit game footage, highlight reels, photos, and event media directly
        to Brooks Scouting Report. This tool will help expand coverage, improve
        player visibility, and support accurate scouting evaluations across the
        Pacific Northwest.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform grows, this page will include upload tools, media
        tagging, event association options, and automated routing into the BSR
        media workflow.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Media submission tools coming soon.
      </div>
    </PublicLayout>
  );
}

