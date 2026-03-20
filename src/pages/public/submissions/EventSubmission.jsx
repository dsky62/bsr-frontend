import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function EventSubmission() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Event Submission</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Event directors and organizers will soon be able to submit tournament
        details, schedules, rosters, and media information directly to Brooks
        Scouting Report. This tool will help ensure accurate coverage, player
        tracking, and real‑time updates across the Pacific Northwest.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this page will include full submission forms,
        upload tools, roster imports, and automated routing into the BSR event
        coverage workflow.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Event submission tools coming soon.
      </div>
    </PublicLayout>
  );
}

