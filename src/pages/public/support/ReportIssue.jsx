import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function ReportIssue() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Report an Issue</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        If you encounter a problem with the Brooks Scouting Report platform —
        such as broken links, incorrect information, missing pages, or technical
        issues — this page will soon allow you to submit detailed reports
        directly to the BSR support workflow.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this page will include a full issue reporting
        form, screenshot uploads, automated routing, and status tracking to help
        ensure the platform remains accurate, stable, and user‑friendly.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Issue reporting tools coming soon.
      </div>
    </PublicLayout>
  );
}

