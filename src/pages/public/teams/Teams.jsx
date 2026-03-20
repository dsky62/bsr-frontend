import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Teams() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Teams</h1>

      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
        Program profiles, system identities, coaching philosophies, and roster
        evaluations. As the BSR platform expands, this section will include
        full team breakdowns, culture notes, standout players, and season
        outlooks for programs across the Pacific Northwest.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Team profiles and program evaluations coming soon.
      </div>
    </PublicLayout>
  );
}

