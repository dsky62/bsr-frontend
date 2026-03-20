import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function News() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>News</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        Stories, updates, features, and coverage from around the Pacific
        Northwest basketball landscape. As the BSR platform expands, this
        section will include player features, team spotlights, event recaps,
        recruiting updates, and long‑form storytelling.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        News stories and features coming soon.
      </div>
    </PublicLayout>
  );
}

