import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function PlayerSubmission() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Player Submission</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Players, parents, and coaches will soon be able to submit athlete
        information directly to Brooks Scouting Report for evaluation review.
        This tool will support film links, stats, background information, and
        developmental notes to help ensure accurate scouting coverage across the
        Pacific Northwest.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this page will include a full submission form,
        upload tools, and automated routing to the BSR evaluation workflow.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Player submission tools coming soon.
      </div>
    </PublicLayout>
  );
}

