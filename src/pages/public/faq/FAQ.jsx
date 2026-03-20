import React from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function FAQ() {
  return (
    <PublicLayout>
      <h1 style={{ fontSize: 26, marginBottom: 10 }}>Frequently Asked Questions</h1>

      <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.6 }}>
        Common questions about evaluations, rankings, events, and how the Brooks
        Scouting Report platform operates. As BSR expands, this section will
        include detailed answers, submission guidelines, and platform navigation
        tips to help players, parents, and coaches get the most out of the
        system.
      </p>

      <div style={{ marginTop: 30 }}>
        <h3 style={{ fontSize: 18, marginBottom: 6 }}>How do evaluations work?</h3>
        <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
          Evaluations are built through film study, in‑person scouting, and
          long‑term projection. Full evaluation tools will be added soon.
        </p>
      </div>

      <div style={{ marginTop: 25 }}>
        <h3 style={{ fontSize: 18, marginBottom: 6 }}>How often are rankings updated?</h3>
        <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
          Rankings are updated throughout the year based on player development,
          event performances, and long‑term projection shifts.
        </p>
      </div>

      <div style={{ marginTop: 25 }}>
        <h3 style={{ fontSize: 18, marginBottom: 6 }}>Can players request evaluations?</h3>
        <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6 }}>
          Player submission tools will be added soon. Until then, inquiries can
          be made through the Contact page.
        </p>
      </div>

      <div style={{ marginTop: 40, opacity: 0.5, fontSize: 13 }}>
        More questions and detailed answers coming soon.
      </div>
    </PublicLayout>
  );
}

