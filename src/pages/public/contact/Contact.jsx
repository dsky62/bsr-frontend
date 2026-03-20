import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Contact() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Contact</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        For inquiries related to evaluations, events, media, or general platform
        questions, Brooks Scouting Report is committed to clear communication
        and timely responses. As the platform expands, this section will include
        direct contact forms, submission tools, and dedicated communication
        channels for players, parents, coaches, and programs.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        Until then, please use the official BSR email or social channels for
        communication. More contact options will be added soon.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Contact form and communication tools coming soon.
      </div>
    </PublicLayout>
  );
}

