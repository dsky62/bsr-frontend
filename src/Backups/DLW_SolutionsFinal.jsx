// BACKUP COPY — DO NOT EDIT
// Ballislife × ESPN × MaxPreps × BSR Hybrid Homepage
// Saved permanently so David never loses this layout

import React from "react";
import { Link } from "react-router-dom";

const PublicHomeBackup = () => {
  const hoverCardIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 0 22px rgba(0, 180, 255, 0.9)";
    e.currentTarget.style.borderColor = "#00B4FF";
  };

  const hoverCardOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
    e.currentTarget.style.borderColor = "#FFFFFF";
  };

  const hoverVideoIn = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 0 26px rgba(0, 180, 255, 1)";
    e.currentTarget.style.borderColor = "#00B4FF";
    e.currentTarget.style.filter = "grayscale(0)";
  };

  const hoverVideoOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
    e.currentTarget.style.borderColor = "#FFFFFF";
    e.currentTarget.style.filter = "grayscale(0.3)";
  };

  return (
    <div style={styles.page}>
      {/* SPLIT HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>BROOKS SCOUTING REPORT</h1>
          <p style={styles.heroSubtitle}>
            Built for the culture, the evaluators, and the next wave of hoopers.
          </p>
          <div style={styles.heroAccent} />
          <div style={styles.heroTags}>
            <span style={styles.heroTag}>Rankings</span>
            <span style={styles.heroTag}>Highlights</span>
            <span style={styles.heroTag}>Prospects</span>
          </div>
        </div>

        <div
          style={styles.heroVideo}
          onMouseEnter={hoverVideoIn}
          onMouseLeave={hoverVideoOut}
        >
          <div style={styles.heroVideoOverlay} />
          <div style={styles.heroVideoContent}>
            <div style={styles.heroVideoLabel}>Featured Mix</div>
            <div style={styles.heroVideoTitle}>PNW Guards • Mixtape Vol. 1</div>
          </div>
          <div style={styles.heroVideoPlay}>
            <div style={styles.heroVideoPlayCircle}>
              <div style={styles.heroVideoPlayTriangle} />
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING STRIP */}
      <section style={styles.trendingStrip}>
        <span style={styles.trendingLabel}>Trending</span>
        <div style={styles.trendingItems}>
          <span style={styles.trendingItem}>Top Guards in the PNW</span>
          <span style={styles.trendingDot}>•</span>
          <span style={styles.trendingItem}>Showcase Standouts</span>
          <span style={styles.trendingDot}>•</span>
          <span style={styles.trendingItem}>Updated Class Rankings</span>
          <span style={styles.trendingDot}>•</span>
          <span style={styles.trendingItem}>Rising Freshmen to Watch</span>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section style={styles.section}>
        <div style={styles.sectionHeaderRow}>
          <h2 style={styles.sectionTitle}>Explore BSR</h2>
          <div style={styles.sectionAccent} />
        </div>

        <div style={styles.grid}>
          <Link
            to="/public/news"
            style={{ ...styles.card, ...styles.cardLarge }}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>News</div>
            <h3 style={styles.cardTitle}>Stories • Features • Coverage</h3>
            <p style={styles.cardText}>
              Ballislife‑style storytelling with deep scouting context.
            </p>
          </Link>

          <Link
            to="/public/rankings"
            style={styles.card}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>Rankings</div>
            <h3 style={styles.cardTitle}>Player & Team Boards</h3>
            <p style={styles.cardText}>
              Class‑by‑class rankings with movement and tiers.
            </p>
          </Link>

          <Link
            to="/public/players"
            style={styles.card}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>Players</div>
            <h3 style={styles.cardTitle}>Prospect Profiles</h3>
            <p style={styles.cardText}>
              Film, measurables, and trajectory for the next wave.
            </p>
          </Link>

          <Link
            to="/public/teams"
            style={{ ...styles.card, ...styles.cardOffset }}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>Teams</div>
            <h3 style={styles.cardTitle}>Program Hubs</h3>
            <p style={styles.cardText}>
              Rosters, systems, and identity breakdowns.
            </p>
          </Link>

          <Link
            to="/public/events"
            style={styles.card}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>Events</div>
            <h3 style={styles.cardTitle}>Camps & Showcases</h3>
            <p style={styles.cardText}>
              Coverage from the gyms that matter.
            </p>
          </Link>

          <Link
            to="/public/media"
            style={styles.card}
            onMouseEnter={hoverCardIn}
            onMouseLeave={hoverCardOut}
          >
            <div style={styles.cardLabel}>Media</div>
            <h3 style={styles.cardTitle}>Highlights & Visuals</h3>
            <p style={styles.cardText}>
              Ballislife‑inspired clips and reels.
            </p>
          </Link>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section style={styles.brandStrip}>
        <h3 style={styles.brandTitle}>Modern • Athletic • Culture‑Driven</h3>
        <p style={styles.brandText}>
          Brooks Scouting Report blends film, data, and feel for the game.
        </p>
      </section>
    </div>
  );
};

const styles = {}; // KEEP EMPTY — THIS IS JUST A BACKUP FILE

export default PublicHomeBackup;

