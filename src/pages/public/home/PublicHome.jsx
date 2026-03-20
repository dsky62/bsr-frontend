import React from "react";

function PublicHome() {
  const styles = {
    page: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "40px",
    },

    /* HERO SECTION */
    hero: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "40px 20px 20px 20px",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "42px",
      fontWeight: "900",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "16px",
      opacity: 0.85,
      marginBottom: "30px",
    },

    /* NAV GRID */
    navGrid: {
      maxWidth: "1300px",
      margin: "0 auto 40px auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "14px",
    },
    navItem: {
      padding: "14px 0",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.25)",
      textAlign: "center",
      fontSize: "15px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      background: "rgba(0,0,0,0.6)",
      cursor: "pointer",
      transition: "0.25s",
    },

    /* FEATURED MIX */
    heroMix: {
      maxWidth: "1300px",
      margin: "0 auto 40px auto",
      padding: "0 20px",
      borderRadius: "14px",
      border: "2px solid #FFFFFF",
      background:
        "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80') center/cover",
      minHeight: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: "20px",
      position: "relative",
      overflow: "hidden",
    },
    heroMixOverlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
    },
    heroMixContent: {
      position: "relative",
      zIndex: 2,
      padding: "0 10px",
    },
    heroMixPlay: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "6px",
    },
    heroMixPlayCircle: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "2px solid #FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.6)",
      boxShadow: "0 0 14px rgba(0,180,255,0.9)",
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

    /* TRENDING BAR */
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

    /* HIGHLIGHT REEL */
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

    /* CONNECT WITH BSR */
    connectSection: {
      maxWidth: "1300px",
      margin: "0 auto 40px auto",
      padding: "0 20px",
      textAlign: "center",
    },
    connectTitle: {
      fontSize: "20px",
      fontWeight: "800",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: "14px",
    },
    connectRow: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    connectLink: {
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "14px",
      opacity: 0.9,
    },

    /* FOOTER */
    footer: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "10px 20px 30px 20px",
      textAlign: "center",
      opacity: 0.7,
    },
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroTitle}>BROOKS SCOUTING REPORT</div>
        <div style={styles.heroSubtitle}>
          Built for the culture, the evaluators, and the next wave of hoopers.
        </div>
      </div>

      {/* NAV GRID */}
      <div style={styles.navGrid}>
        <div style={styles.navItem}>Rankings</div>
        <div style={styles.navItem}>Players</div>
        <div style={styles.navItem}>Teams</div>
        <div style={styles.navItem}>Events</div>
        <div style={styles.navItem}>Media</div>
      </div>

      {/* FEATURED MIX */}
      <div style={styles.heroMix}>
        <div style={styles.heroMixOverlay}></div>
        <div style={styles.heroMixContent}>
          <div style={styles.heroMixPlay}>
            <div style={styles.heroMixPlayCircle}>
              <div style={styles.heroMixPlayTriangle}></div>
            </div>
            <div style={styles.heroMixLabel}>Featured Mix</div>
          </div>
          <div style={styles.heroMixTitle}>PNW Guards • Mixtape Vol. 1</div>
          <div style={styles.heroMixText}>
            Handles, pace, and shot‑making from the region’s top guards.
          </div>
        </div>
      </div>

      {/* TRENDING BAR */}
      <div style={styles.trendingBar}>
        <span style={styles.trendingItem}>Top Guards in the PNW</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Showcase Standouts</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Updated Class Rankings</span>
        <span style={styles.trendingDot}>•</span>
        <span style={styles.trendingItem}>Rising Freshmen to Watch</span>
      </div>

      {/* HIGHLIGHT REEL */}
      <div style={styles.reelSection}>
        <div style={styles.reelTitle}>Highlight Reel</div>

        <div style={styles.reelRow}>
          {/* Card 1 */}
          <div style={styles.reelCard}>
            <div style={styles.reelThumb}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={styles.reelCard}>
            <div style={styles.reelThumb2}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={styles.reelCard}>
            <div style={styles.reelThumb3}></div>
            <div style={styles.reelPlay}>
              <div style={styles.reelPlayCircle}>
                <div style={styles.reelPlayTriangle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECT WITH BSR */}
      <div style={styles.connectSection}>
        <div style={styles.connectTitle}>Connect With BSR</div>
        <div style={styles.connectRow}>
          <a style={styles.connectLink} href="#">Instagram</a>
          <a style={styles.connectLink} href="#">X / Twitter</a>
          <a style={styles.connectLink} href="#">YouTube</a>
          <a style={styles.connectLink} href="#">Facebook</a>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Brooks Scouting Report. All rights reserved.
      </div>

    </div>
  );
}

export default PublicHome;


