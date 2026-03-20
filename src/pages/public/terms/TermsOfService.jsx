import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function TermsOfService() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Terms of Service</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        By accessing and using the Brooks Scouting Report platform, users agree
        to engage with the site responsibly and respectfully. All evaluations,
        rankings, media, and written content are proprietary and may not be
        copied, redistributed, or repurposed without permission.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this section will include full legal terms,
        usage guidelines, content ownership details, and user responsibilities.
        Updated documentation will be added as new features and tools are
        introduced across the BSR system.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Full terms and legal documentation coming soon.
      </div>
    </PublicLayout>
  );
}

