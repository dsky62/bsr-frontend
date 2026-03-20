import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function About() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>About BSR</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Brooks Scouting Report is built to elevate basketball talent across the
        Pacific Northwest through clear evaluations, consistent coverage, and a
        platform designed for players, coaches, and programs to grow. The BSR
        system blends film study, in‑person evaluations, analytics, and
        long‑term projection to create a modern scouting experience rooted in
        accuracy and integrity.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, BSR will continue adding new tools, deeper
        evaluations, multimedia features, and community‑driven insights to help
        athletes and programs reach the next level.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        More platform history and mission details coming soon.
      </div>
    </PublicLayout>
  );
}

