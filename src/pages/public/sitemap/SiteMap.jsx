import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function SiteMap() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Site Map</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        A full overview of the Brooks Scouting Report platform. This page helps
        users navigate quickly to core sections, evaluations, rankings, media,
        and upcoming features as the system continues to expand.
      </p>

      <div style={{ marginTop: 30 }}>
        <h3 style={{ fontSize: 18, marginBottom: 6 }}>Core Sections</h3>
        <ul style={{ opacity: 0.85, lineHeight: 1.6 }}>
          <li>Home</li>
          <li>Players</li>
          <li>Teams</li>
          <li>Events</li>
          <li>Media</li>
          <li>News</li>
          <li>Rankings</li>
          <li>Evaluations</li>
          <li>Coaches Corner</li>
        </ul>
      </div>

      <div style={{ marginTop: 25 }}>
        <h3 style={{ fontSize: 18, marginBottom: 6 }}>Platform Information</h3>
        <ul style={{ opacity: 0.85, lineHeight: 1.6 }}>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div style={{ marginTop: 40, opacity: 0.5, fontSize: 13 }}>
        Additional navigation tools and deep links coming soon.
      </div>
    </PublicLayout>
  );
}

