import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function CoachSubmission() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Coach Submission</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Coaches will soon be able to submit player information, team details,
        system notes, and developmental insights directly to Brooks Scouting
        Report. This tool will support roster uploads, film links, player
        evaluations, and program background information to help ensure accurate
        and comprehensive scouting coverage.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this page will include a full submission form,
        upload tools, and automated routing into the BSR evaluation workflow.
        Coaches will also gain access to communication tools and program
        dashboards.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Coach submission tools coming soon.
      </div>
    </PublicLayout>
  );
}

