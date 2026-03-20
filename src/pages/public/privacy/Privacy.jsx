import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function PrivacyPolicy() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Privacy Policy</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Brooks Scouting Report is committed to protecting the privacy of all
        athletes, coaches, parents, and program partners. This platform collects
        only the information necessary to support evaluations, event coverage,
        and user communication. No personal data is sold or shared with outside
        organizations.
      </p>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6, marginTop: 20 }}>
        As the platform expands, this section will include full details on data
        collection, cookies, analytics, user submissions, and communication
        policies. Updated documentation will be added as new features and tools
        are introduced.
      </p>

      <div style={{ marginTop: 30, opacity: 0.5, fontSize: 13 }}>
        Full privacy documentation coming soon.
      </div>
    </PublicLayout>
  );
}

