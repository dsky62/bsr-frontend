import React from "react";
import { Link } from "react-router-dom";

const PublicHome = () => {
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
      {/* SPLIT HERO — DLWLevel Core */}
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

      {/* 1) HIGHLIGHT REEL CAROUSEL */}
      <section style={styles.reelSection}>
        <h2 style={styles.reelTitle}>Highlight Reels</h2>
        <div style={styles.reelRow}>
          <div style={styles.reelCard}>
            <div style={styles.reelThumb} />
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle} />
              </div>
            </div>
            <p style={styles.reelLabel}>Top Guards • Vol. 1</p>
          </div>

          <div style={styles.reelCard}>
            <div style={styles.reelThumb2} />
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle} />
              </div>
            </div>
            <p style={styles.reelLabel}>Showcase Standouts</p>
          </div>

          <div style={styles.reelCard}>
            <div style={styles.reelThumb3} />
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle} />
              </div>
            </div>
            <p style={styles.reelLabel}>Freshmen to Watch</p>
          </div>
        </div>
      </section>

      {/* 2) FEATURED PLAYER SPOTLIGHT */}
      <section style={styles.featuredPlayerSection}>
        <div style={styles.featuredPlayerCard}>
          <div style={styles.featuredPlayerPhoto} />
          <div style={styles.featuredPlayerInfo}>
            <div style={styles.featuredPlayerLabel}>Featured Player</div>
            <h3 style={styles.featuredPlayerName}>Jalen Brooks • 2026 G</h3>
            <p style={styles.featuredPlayerMeta}>6'3" • Lead Guard • PNW</p>
            <p style={styles.featuredPlayerText}>
              Shifty guard with pace, vision, and three‑level scoring. Controls tempo and embraces big moments.
            </p>
          </div>
          <div style={styles.featuredPlayerStats}>
            <div style={styles.featuredStatBlock}>
              <div style={styles.featuredStatValue}>23.4</div>
              <div style={styles.featuredStatLabel}>PPG</div>
            </div>
            <div style={styles.featuredStatBlock}>
              <div style={styles.featuredStatValue}>6.1</div>
              <div style={styles.featuredStatLabel}>APG</div>
            </div>
            <div style={styles.featuredStatBlock}>
              <div style={styles.featuredStatValue}>4.8</div>
              <div style={styles.featuredStatLabel}>RPG</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) TOP 10 RANKINGS PREVIEW */}
      <section style={styles.rankPreviewSection}>
        <div style={styles.rankPreviewHeader}>
          <h2 style={styles.rankPreviewTitle}>BSR Top 10 • Class of 2026</h2>
          <Link to="/public/rankings" style={styles.rankPreviewLink}>
            View Full Rankings
          </Link>
        </div>
        <div style={styles.rankPreviewList}>
          {[
            "#1  •  J. Brooks  •  G  •  PNW Elite",
            "#2  •  T. Carter  •  W  •  Rain City",
            "#3  •  M. Davis   •  G  •  Seattle Prep",
            "#4  •  R. Johnson •  F  •  Eastside",
            "#5  •  L. Smith   •  G  •  Federal Way",
            "#6  •  A. Brown   •  F  •  Garfield",
            "#7  •  C. Young   •  G  •  O'Dea",
            "#8  •  D. Harris  •  W  •  Lakes",
            "#9  •  K. Lewis   •  G  •  Bellarmine",
            "#10 •  S. Walker  •  F  •  Lincoln",
          ].map((line, idx) => (
            <div key={idx} style={styles.rankPreviewRow}>
              <span style={styles.rankPreviewText}>{line}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ESPN-STYLE TRENDING STRIP (EXISTING CORE) */}
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

      {/* 4) LATEST NEWS SLIDER (STATIC ROW VERSION) */}
      <section style={styles.newsSliderSection}>
        <div style={styles.newsSliderHeader}>
          <h2 style={styles.newsSliderTitle}>Latest BSR Stories</h2>
          <Link to="/public/news" style={styles.newsSliderLink}>
            All News
          </Link>
        </div>
        <div style={styles.newsSliderRow}>
          <div style={styles.newsCard}>
            <div style={styles.newsThumb1} />
            <div style={styles.newsCardBody}>
              <div style={styles.newsTag}>Feature</div>
              <h3 style={styles.newsTitle}>Inside the PNW Guard Factory</h3>
              <p style={styles.newsText}>Why the region keeps producing elite backcourt talent.</p>
            </div>
          </div>
          <div style={styles.newsCard}>
            <div style={styles.newsThumb2} />
            <div style={styles.newsCardBody}>
              <div style={styles.newsTag}>Recap</div>
              <h3 style={styles.newsTitle}>Showcase Standouts</h3>
              <p style={styles.newsText}>Who popped, who surprised, and who’s trending up.</p>
            </div>
          </div>
          <div style={styles.newsCard}>
            <div style={styles.newsThumb3} />
            <div style={styles.newsCardBody}>
              <div style={styles.newsTag}>Rankings</div>
              <h3 style={styles.newsTitle}>Class of 2027 Watchlist</h3>
              <p style={styles.newsText}>Early names you need to know now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAGGERED CATEGORY CARDS — EXISTING CORE SECTION */}
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
              Ballislife‑style storytelling with deep scouting context — recaps, features, and culture pieces.
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
              Class‑by‑class rankings with movement, tiers, and notes that actually tell the story.
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
              Film, measurables, and trajectory for the next wave of hoopers in the region and beyond.
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
              Rosters, systems, and identity — how programs are built and where they’re headed.
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
              Coverage from the gyms that matter — standouts, invites, and who really popped.
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
              Ballislife‑inspired clips, photos, and reels that bring the scouting report to life.
            </p>
          </Link>
        </div>
      </section>

      {/* 5) TEAM SPOTLIGHT MODULE */}
      <section style={styles.teamSpotlightSection}>
        <div style={styles.teamSpotlightCard}>
          <div style={styles.teamSpotlightLeft}>
            <div style={styles.teamSpotlightLabel}>Team Spotlight</div>
            <h3 style={styles.teamSpotlightName}>PNW Elite • 17U</h3>
            <p style={styles.teamSpotlightText}>
              Guard‑heavy, pace‑and‑space attack with toughness on both ends. Known for pressure defense and transition threes.
            </p>
          </div>
          <div style={styles.teamSpotlightRight}>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>24‑3</div>
              <div style={styles.teamSpotlightStatLabel}>Record</div>
            </div>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>4</div>
              <div style={styles.teamSpotlightStatLabel}>D1 Prospects</div>
            </div>
            <div style={styles.teamSpotlightStatBlock}>
              <div style={styles.teamSpotlightStatValue}>PNW</div>
              <div style={styles.teamSpotlightStatLabel}>Region</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) EVENT COUNTDOWN BAR */}
      <section style={styles.eventBar}>
        <div style={styles.eventBarLeft}>
          <span style={styles.eventBarLabel}>Next Event</span>
          <span style={styles.eventBarTitle}>BSR Summer Showcase</span>
        </div>
        <div style={styles.eventBarRight}>
          <span style={styles.eventBarDate}>July 12 • Seattle, WA</span>
          <span style={styles.eventBarCountdown}>Countdown: 21 Days</span>
        </div>
      </section>

      {/* 7) RECRUITING TRACKER STRIP */}
      <section style={styles.recruitStrip}>
        <div style={styles.recruitLabel}>Recruiting Tracker</div>
        <div style={styles.recruitItems}>
          <span style={styles.recruitItem}>J. Brooks • Offer: Washington</span>
          <span style={styles.recruitDot}>•</span>
          <span style={styles.recruitItem}>T. Carter • Visit: Oregon</span>
          <span style={styles.recruitDot}>•</span>
          <span style={styles.recruitItem}>M. Davis • Offer: Gonzaga</span>
        </div>
      </section>

      {/* 8) PLAYER OF THE WEEK */}
      <section style={styles.playerOfWeekSection}>
        <div style={styles.playerOfWeekCard}>
          <div style={styles.playerOfWeekPhoto} />
          <div style={styles.playerOfWeekInfo}>
            <div style={styles.playerOfWeekLabel}>Player of the Week</div>
            <h3 style={styles.playerOfWeekName}>Trey Carter • 2025 W</h3>
            <p style={styles.playerOfWeekMeta}>28.7 PPG • 9.2 RPG • 3.4 APG</p>
            <p style={styles.playerOfWeekText}>
              Dominated both ends with energy, shot‑making, and versatility. Set the tone in every big moment.
            </p>
          </div>
        </div>
      </section>

      {/* 9) MINI PHOTO GALLERY */}
      <section style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>From the Lens</h2>
        <div style={styles.galleryRow}>
          <div style={styles.galleryItem1} />
          <div style={styles.galleryItem2} />
          <div style={styles.galleryItem3} />
        </div>
      </section>

      {/* 10) BSR SOCIAL BAR */}
      <section style={styles.socialBar}>
        <span style={styles.socialLabel}>Follow BSR</span>
        <div style={styles.socialIcons}>
          <span style={styles.socialPill}>Instagram</span>
          <span style={styles.socialPill}>TikTok</span>
          <span style={styles.socialPill}>YouTube</span>
          <span style={styles.socialPill}>X / Twitter</span>
        </div>
      </section>

      {/* 11) BSR MISSION BANNER + BRAND STRIP */}
      <section style={styles.missionBanner}>
        <p style={styles.missionText}>
          Built for the culture. Built for the game. Built for the future of hoops in the Pacific Northwest and beyond.
        </p>
      </section>

      <section style={styles.brandStrip}>
        <h3 style={styles.brandTitle}>Modern • Athletic • Culture‑Driven</h3>
        <p style={styles.brandText}>
          Brooks Scouting Report blends film, data, and feel for the game — giving coaches, players,
          and fans a clear view of who’s next.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Built by DLW Solutions LLC • Brooks Scouting Report</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "50px",
  },

  /* HERO */
  hero: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "40px 20px 30px 20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "stretch",
  },
  heroLeft: {
    flex: "1 1 380px",
  },
  heroTitle: {
    fontSize: "46px",
    fontWeight: "900",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textShadow: "0 0 18px rgba(0, 180, 255, 0.9)",
  },
  heroSubtitle: {
    marginTop: "12px",
    fontSize: "18px",
    opacity: 0.9,
  },
  heroAccent: {
    width: "160px",
    height: "5px",
    backgroundColor: "#00B4FF",
    borderRadius: "999px",
    marginTop: "18px",
    boxShadow: "0 0 14px #00B4FF",
  },
  heroTags: {
    marginTop: "18px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  heroTag: {
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid #FFFFFF",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    background: "rgba(0,0,0,0.4)",
  },
  heroVideo: {
    position: "relative",
    flex: "1 1 320px",
    borderRadius: "18px",
    border: "2px solid #FFFFFF",
    overflow: "hidden",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "220px",
    filter: "grayscale(0.3)",
    transition: "0.25s",
  },
  heroVideoOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,180,255,0.15), rgba(0,0,0,0.85))",
  },
  heroVideoContent: {
    position: "absolute",
    left: "18px",
    bottom: "18px",
    zIndex: 2,
  },
  heroVideoLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.8,
  },
  heroVideoTitle: {
    marginTop: "6px",
    fontSize: "16px",
    fontWeight: "800",
  },
  heroVideoPlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  heroVideoPlayCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "3px solid #FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 18px rgba(0, 180, 255, 0.9)",
    background: "rgba(0,0,0,0.5)",
  },
  heroVideoPlayTriangle: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: "16px solid #FFFFFF",
    marginLeft: "4px",
  },

  /* 1) HIGHLIGHT REEL */
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

  /* 2) FEATURED PLAYER */
  featuredPlayerSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
  },
  featuredPlayerCard: {
    display: "grid",
    gridTemplateColumns: "minmax(180px, 220px) minmax(260px, 1.5fr) minmax(180px, 0.8fr)",
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
  featuredPlayerMeta: {
    fontSize: "13px",
    opacity: 0.85,
    marginTop: "2px",
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
  featuredStatBlock: {
    textAlign: "center",
    padding: "8px 6px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(0,0,0,0.6)",
  },
  featuredStatValue: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#00B4FF",
  },
  featuredStatLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    opacity: 0.8,
  },

  /* 3) RANKINGS PREVIEW */
  rankPreviewSection: {
    maxWidth: "1300px",
    margin: "0 auto 30px auto",
    padding: "0 20px",
  },
  rankPreviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  rankPreviewTitle: {
    fontSize: "18px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  rankPreviewLink: {
    fontSize: "13px",
    color: "#00B4FF",
    textDecoration: "none",
  },
  rankPreviewList: {
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.6)",
    padding: "10px 14px",
  },
  rankPreviewRow: {
    padding: "4px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  rankPreviewText: {
    fontSize: "13px",
    opacity: 0.9,
  },

  /* TRENDING STRIP */
  trendingStrip: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    overflowX: "auto",
  },
  trendingLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontWeight: "700",
    color: "#00B4FF",
    whiteSpace: "nowrap",
  },
  trendingItems: {
    display: "flex",
    gap: "10px",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
  trendingItem: {
    opacity: 0.9,
  },
  trendingDot: {
    opacity: 0.6,
  },

  /* 4) NEWS SLIDER ROW */
  newsSliderSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
  },
  newsSliderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  newsSliderTitle: {
    fontSize: "20px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  newsSliderLink: {
    fontSize: "13px",
    color: "#00B4FF",
    textDecoration: "none",
  },
  newsSliderRow: {
    display: "flex",
    gap: "18px",
    overflowX: "auto",
  },
  newsCard: {
    minWidth: "260px",
    borderRadius: "16px",
    border: "2px solid #FFFFFF",
    overflow: "hidden",
    background: "rgba(0,0,0,0.7)",
    flexShrink: 0,
  },
  newsThumb1: {
    height: "120px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  newsThumb2: {
    height: "120px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  newsThumb3: {
    height: "120px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  newsCardBody: {
    padding: "10px 12px 12px 12px",
  },
  newsTag: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    opacity: 0.8,
  },
  newsTitle: {
    marginTop: "4px",
    fontSize: "15px",
    fontWeight: "700",
  },
  newsText: {
    marginTop: "4px",
    fontSize: "13px",
    opacity: 0.85,
  },

  /* CORE SECTION + CARDS */
  section: {
    maxWidth: "1300px",
    margin: "0 auto 50px auto",
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
  cardLarge: {
    gridColumn: "span 2",
  },
  cardOffset: {
    marginTop: "18px",
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

  /* 5) TEAM SPOTLIGHT */
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

  /* 6) EVENT BAR */
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
  },
  eventBarLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  eventBarLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    color: "#00B4FF",
  },
  eventBarTitle: {
    fontSize: "14px",
    fontWeight: "700",
  },
  eventBarRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  eventBarDate: {
    fontSize: "13px",
    opacity: 0.9,
  },
  eventBarCountdown: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#00B4FF",
  },

  /* 7) RECRUITING STRIP */
  recruitStrip: {
    maxWidth: "1300px",
    margin: "0 auto 30px auto",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    overflowX: "auto",
  },
  recruitLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    color: "#00B4FF",
    whiteSpace: "nowrap",
  },
  recruitItems: {
    display: "flex",
    gap: "10px",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
  recruitItem: {
    opacity: 0.9,
  },
  recruitDot: {
    opacity: 0.6,
  },

  /* 8) PLAYER OF THE WEEK */
  playerOfWeekSection: {
    maxWidth: "1300px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
  },
  playerOfWeekCard: {
    borderRadius: "18px",
    border: "2px solid #FFFFFF",
    background: "rgba(0,0,0,0.7)",
    padding: "18px 20px",
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  playerOfWeekPhoto: {
    flex: "0 0 160px",
    borderRadius: "14px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "140px",
  },
  playerOfWeekInfo: {
    flex: "1 1 260px",
  },
  playerOfWeekLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    opacity: 0.8,
  },
  playerOfWeekName: {
    marginTop: "6px",
    fontSize: "18px",
    fontWeight: "800",
  },
  playerOfWeekMeta: {
    marginTop: "4px",
    fontSize: "13px",
    opacity: 0.9,
  },
  playerOfWeekText: {
    marginTop: "8px",
    fontSize: "14px",
    opacity: 0.9,
  },

  /* 9) GALLERY */
  gallerySection: {
    maxWidth: "1300px",
    margin: "0 auto 30px auto",
    padding: "0 20px",
  },
  galleryTitle: {
    fontSize: "20px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "12px",
  },
  galleryRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "12px",
  },
  galleryItem1: {
    borderRadius: "14px",
    border: "2px solid #FFFFFF",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "120px",
  },
  galleryItem2: {
    borderRadius: "14px",
    border: "2px solid #FFFFFF",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "120px",
  },
  galleryItem3: {
    borderRadius: "14px",
    border: "2px solid #FFFFFF",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "120px",
  },

  /* 10) SOCIAL BAR */
  socialBar: {
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
  },
  socialLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
  },
  socialIcons: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  socialPill: {
    padding: "6px 12px",
    borderRadius: "999px",
    border: "1px solid #FFFFFF",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },

  /* 11) MISSION + BRAND STRIP */
  missionBanner: {
    maxWidth: "1300px",
    margin: "0 auto 18px auto",
    padding: "12px 20px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.7)",
    textAlign: "center",
  },
  missionText: {
    fontSize: "14px",
    opacity: 0.9,
  },
  brandStrip: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "26px 20px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.7)",
    textAlign: "center",
  },
  brandTitle: {
    fontSize: "18px",
    fontWeight: "800",
    marginBottom: "8px",
  },
  brandText: {
    fontSize: "14px",
    opacity: 0.9,
  },

  /* FOOTER */
  footer: {
    marginTop: "40px",
    textAlign: "center",
    opacity: 0.7,
  },
  footerText: {
    fontSize: "13px",
  },
};

export default PublicHome;

