import React from "react";
import { Link } from "react-router-dom";

const PublicHome = () => {
  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.navLeft}>
          <span style={styles.logoMark}>BSR</span>
          <span style={styles.navTitle}>Brooks Scouting Report</span>
        </div>
        <nav style={styles.navRight}>
          <Link to="/public/rankings" style={styles.navLink}>Rankings</Link>
          <Link to="/public/players" style={styles.navLink}>Players</Link>
          <Link to="/public/teams" style={styles.navLink}>Teams</Link>
          <Link to="/public/events" style={styles.navLink}>Events</Link>
          <Link to="/public/media" style={styles.navLink}>Media</Link>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.heroSection}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>BROOKS SCOUTING REPORT</h1>
          <p style={styles.heroSubtitle}>
            Built for the culture, the evaluators, and the next wave of hoopers.
          </p>

          <div style={styles.heroTagRow}>
            <span style={styles.heroTag}>Rankings</span>
            <span style={styles.heroTag}>Highlights</span>
            <span style={styles.heroTag}>Prospects</span>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.heroMixCard}>
            <div style={styles.heroMixPlayCircle}>
              <div style={styles.heroMixPlayTriangle}></div>
            </div>
            <div style={styles.heroMixLabel}>Featured Mix</div>
            <div style={styles.heroMixTitle}>PNW Guards • Mixtape Vol. 1</div>
            <div style={styles.heroMixText}>
              Handles, pace, and shot‑making from the region’s top guards.
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING BAR */}
      <section style={styles.trendingBar}>
        <span style={styles.trendingItem}>Top Guards in the PNW</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Showcase Standouts</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Updated Class Rankings</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Rising Freshmen to Watch</span>
      </section>

      {/* HIGHLIGHT REEL */}
      <section style={styles.reelSection}>
        <h2 style={styles.reelTitle}>Highlight Reel</h2>
        <div style={styles.reelRow}>
          <div style={styles.reelCard}>
            <div style={styles.reelThumb}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>
          <div style={styles.reelCard}>
            <div style={styles.reelThumb2}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>
          <div style={styles.reelCard}>
            <div style={styles.reelThumb3}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.reelLabel}>Latest clips, showcases, and mixtapes from the BSR lens.</div>
      </section>

      {/* FEATURED PLAYER */}
      <section style={styles.featuredPlayerSection}>
        <div style={styles.sectionHeaderRow}>
          <h2 style={styles.sectionTitle}>Featured Player</h2>
          <div style={styles.sectionAccent}></div>
        </div>

        <div style={styles.featuredPlayerCard}>
          <div style={styles.featuredPlayerPhoto}></div>

          <div style={styles.featuredPlayerInfo}>
            <div style={styles.featuredPlayerLabel}>Prospect Spotlight</div>
            <div style={styles.featuredPlayerName}>John Doe • 6'3 PG</div>
            <div style={styles.featuredPlayerText}>
              Elite pace, advanced reads, and a smooth pull‑up game. Controls tempo and creates advantages on every touch.
            </div>
          </div>

          <div style={styles.featuredPlayerStats}>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>23.1</div>
              <div style={styles.teamSpotlightStatLabel}>PPG</div>
            </div>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>6.4</div>
              <div style={styles.teamSpotlightStatLabel}>APG</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE BSR CORE GRID */}
      <section style={styles.section}>
        <div style={styles.sectionHeaderRow}>
          <h2 style={styles.sectionTitle}>Explore BSR</h2>
          <div style={styles.sectionAccent}></div>
        </div>

        <div style={styles.grid}>
          {gridItem("/public/news", "News", "Stories • Features • Coverage", "Ballislife‑style storytelling with deep scouting context.")}
          {gridItem("/public/rankings", "Rankings", "Player & Team Boards", "Class‑by‑class rankings with movement and tiers.")}
          {gridItem("/public/players", "Players", "Prospect Profiles", "Film, measurables, and trajectory for the next wave.")}
          {gridItem("/public/teams", "Teams", "Program Hubs", "Rosters, systems, and identity breakdowns.")}
          {gridItem("/public/events", "Events", "Camps & Showcases", "Coverage from the gyms that matter.")}
          {gridItem("/public/media", "Media", "Highlights & Visuals", "Ballislife‑inspired clips and reels.")}
        </div>
      </section>

      {/* TEAM SPOTLIGHT */}
      <section style={styles.teamSpotlightSection}>
        <div style={styles.sectionHeaderRow}>
          <h2 style={styles.sectionTitle}>Team Spotlight</h2>
          <div style={styles.sectionAccent}></div>
        </div>

        <div style={styles.teamSpotlightCard}>
          <div style={styles.teamSpotlightLeft}>
            <div style={styles.teamSpotlightLabel}>Program Feature</div>
            <div style={styles.teamSpotlightName}>Seattle Select</div>
            <div style={styles.teamSpotlightText}>
              A system built on pace, spacing, and relentless pressure. Guards live in gaps, wings sprint lanes, and the rim is always under attack.
            </div>
          </div>

          <div style={styles.teamSpotlightRight}>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>12–1</div>
              <div style={styles.teamSpotlightStatLabel}>Record</div>
            </div>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>89.4</div>
              <div style={styles.teamSpotlightStatLabel}>PPG</div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT BAR */}
      <section style={styles.eventBar}>
        <span>Upcoming: BSR Spring Showcase • April 12</span>
        <Link to="/public/events" style={styles.eventLink}>
          View Events
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Brooks Scouting Report • Built for Hoopers
      </footer>
    </div>
  );
};

const gridItem = (to, label, title, text) => (
  <Link to={to} style={styles.card}>
    <div style={styles.cardLabel}>{label}</div>
    <div style={styles.cardTitle}>{title}</div>
    <div style={styles.cardText}>{text}</div>
  </Link>
);

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1F2933 0%, #050608 45%, #020203 100%)",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "60px",
  },

  navbar: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "18px 20px 10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navLeft: { display: "flex", alignItems: "center", gap: "10px" },
  logoMark: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "2px solid #00B4FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "800",
    boxShadow: "0 0 10px rgba(0,180,255,0.9)",
  },
  navTitle: { fontSize: "16px", fontWeight: "700", letterSpacing: "0.08em" },
  navRight: { display: "flex", gap: "18px", flexWrap: "wrap" },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    opacity: 0.9,
  },

  heroSection: {
    maxWidth: "1300px",
    margin: "0 auto 24px auto",
    padding: "10px 20px 30px 20px",
    display: "grid",
    gridTemplateColumns: "minmax(260px, 1.4fr) minmax(260px, 1fr)",
    gap: "24px",
  },
  heroLeft: { display: "flex", flexDirection: "column", justifyContent: "center" },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    textShadow: "0 0 18px rgba(0,180,255,0.9)",
  },
  heroSubtitle: { marginTop: "10px", fontSize: "16px", opacity: 0.9 },
  heroTagRow: {
    marginTop: "18px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  heroTag: {
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid #FFFFFF",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    background: "rgba(0,0,0,0.4)",
  },

  heroRight: { display: "flex", justifyContent: "flex-end", alignItems: "center" },
  heroMixCard: {
    width: "100%",
    maxWidth: "360px",
    borderRadius: "18px",
    border: "2px solid #FFFFFF",
    background: "rgba(0,0,0,0.75)",
    padding: "18px 18px 20px 18px",
    position: "relative",
    boxShadow: "0 0 18px rgba(0,180,255,0.4)",
  },
  heroMixPlayCircle: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    border: "3px solid #FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.6)",
    boxShadow: "0 0 14px rgba(0,180,255,0.9)",
    marginBottom: "12px",
  },
  heroMixPlayTriangle: {
    width: 0,
    height: 0,
    borderTop: "8px solid transparent",
    borderBottom: "8px solid transparent",
    borderLeft: "14px solid #FFFFFF",
    marginLeft: "3px",
  },
  heroMixLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.8,
  },
  heroMixTitle: {
    marginTop: "6px",
    fontSize: "18px",
    fontWeight: "800",
  },
  heroMixText: {
    marginTop: "6px",
    fontSize: "13px",
    opacity: 0.85,
  },

  trendingBar: {
    maxWidth: "1300px",
    margin: "0 auto 26px auto",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    fontSize: "13px",
  },
  trendingItem: { opacity: 0.9 },
  trendingDot: { opacity: 0.4 },

  /* Highlight Reel */
  reelSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
  },
  reelTitle: {
    fontSize: "22px",
    fontWeight: "800",
    marginBottom: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  reelRow: {
    display: "flex",
    gap: "18px",
    overflowX: "auto",
    paddingBottom: "6px",
  },
  reelCard: {
    position: "relative",
    minWidth: "240px",
    height: "140px",
    borderRadius: "14px",
    border: "2px solid #FFFFFF",
    overflow: "hidden",
    backgroundColor: "#111",
    flexShrink: 0,
    transition: "0.25s",
  },
  reelThumb: {
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(0.3)",
  },
  reelThumb2: {
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(0.3)",
  },
  reelThumb3: {
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(0.3)",
  },
  reelPlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reelPlayCircle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "3px solid #FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.5)",
    boxShadow: "0 0 14px rgba(0,180,255,0.9)",
  },
  reelPlayTriangle: {
    width: 0,
    height: 0,
    borderTop: "8px solid transparent",
    borderBottom: "8px solid transparent",
    borderLeft: "14px solid #FFFFFF",
    marginLeft: "3px",
  },
  reelLabel: {
    marginTop: "6px",
    fontSize: "13px",
    opacity: 0.85,
  },

  /* Featured Player */
  featuredPlayerSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
  },
  sectionHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  sectionAccent: {
    flex: "0 0 150px",
    height: "4px",
    borderRadius: "999px",
    background:
      "linear-gradient(90deg, rgba(0,180,255,1), rgba(0,180,255,0.1), rgba(0,180,255,0))",
    boxShadow: "0 0 14px rgba(0,180,255,0.9)",
  },
  featuredPlayerCard: {
    display: "grid",
    gridTemplateColumns:
      "minmax(180px, 220px) minmax(260px, 1.5fr) minmax(180px, 0.8fr)",
    gap: "18px",
    borderRadius: "18px",
    border: "2px solid #FFFFFF",
    background: "rgba(0,0,0,0.7)",
    padding: "18px 20px",
  },
  featuredPlayerPhoto: {
    borderRadius: "14px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "140px",
  },
  featuredPlayerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  featuredPlayerLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.8,
  },
  featuredPlayerName: {
    marginTop: "6px",
    fontSize: "18px",
    fontWeight: "800",
  },
  featuredPlayerText: {
    marginTop: "8px",
    fontSize: "14px",
    opacity: 0.9,
  },
  featuredPlayerStats: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  },

  /* Core Section + Cards */
  section: {
    maxWidth: "1300px",
    margin: "0 auto 50px auto",
    padding: "0 20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(10,10,10,0.95)",
    borderRadius: "16px",
    padding: "22px 20px",
    border: "2px solid #FFFFFF",
    textDecoration: "none",
    color: "#FFFFFF",
    transition: "0.25s",
  },
  cardLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.75,
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "800",
    marginBottom: "8px",
    color: "#00B4FF",
  },
  cardText: {
    fontSize: "14px",
    opacity: 0.85,
  },

  /* Team Spotlight */
  teamSpotlightSection: {
    maxWidth: "1300px",
    margin: "0 auto 30px auto",
    padding: "0 20px",
  },
  teamSpotlightCard: {
    borderRadius: "18px",
    border: "2px solid #FFFFFF",
    background: "rgba(0,0,0,0.7)",
    padding: "18px 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    flexWrap: "wrap",
  },
  teamSpotlightLeft: {
    flex: "1 1 260px",
  },
  teamSpotlightRight: {
    flex: "1 1 220px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    flexWrap: "wrap",
  },
  teamSpotlightLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.8,
  },
  teamSpotlightName: {
    marginTop: "6px",
    fontSize: "18px",
    fontWeight: "800",
  },
  teamSpotlightText: {
    marginTop: "8px",
    fontSize: "14px",
    opacity: 0.9,
  },
  teamSpotlightStatBlock: {
    padding: "8px 10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  teamSpotlightStatValue: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#00B4FF",
  },
  teamSpotlightStatLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    opacity: 0.8,
  },

  /* Event Bar */
  eventBar: {
    maxWidth: "1300px",
    margin: "0 auto 24px auto",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    fontSize: "13px",
  },
  eventLink: {
    color: "#00B4FF",
    textDecoration: "none",
    fontWeight: "600",
  },

  footer: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "10px 20px 30px 20px",