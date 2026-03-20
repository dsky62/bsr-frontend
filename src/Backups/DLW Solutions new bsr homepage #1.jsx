import React from "react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  const neon = "#00B4FF";
  const pill = {
    padding: "8px 14px",
    borderRadius: 20,
    border: `1px solid ${neon}`,
    color: neon,
    textDecoration: "none",
    fontSize: 12,
    marginRight: 8,
    background: "rgba(0,0,0,0.4)",
  };

  return (
    <div style={{ background: "#020203", color: "#fff", fontFamily: "Arial", paddingBottom: 40 }}>

      {/* HERO */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px", display: "flex", flexWrap: "wrap", gap: 30 }}>
        
        <div style={{ flex: "1 1 360px" }}>
          <img 
            src="/images/bsr-logo.png"
            alt="BSR Logo"
            style={{ width: 200, filter: "drop-shadow(0 0 12px #00B4FF)" }}
          />

          <p style={{ opacity: .9, marginTop: 10 }}>Film • Rankings • Stories • Culture</p>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Rankings</span>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Highlights</span>
            <span style={{ padding: "6px 12px", border: "1px solid #fff", borderRadius: 20, fontSize: 11, letterSpacing: "0.1em" }}>Players</span>
          </div>
        </div>

        <div style={{
          flex: "1 1 300px",
          border: `2px solid #fff`,
          borderRadius: 18,
          overflow: "hidden",
          background: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80') center/cover",
          minHeight: 220,
          position: "relative"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,.7),rgba(0,180,255,.2),rgba(0,0,0,.8))" }} />
          <div style={{ position: "absolute", bottom: 16, left: 16 }}>
            <div style={{ fontSize: 11, opacity: .8, letterSpacing: "0.16em" }}>Featured Mix</div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>PNW Guards • Vol. 1</div>
          </div>
        </div>
      </section>

      {/* TRENDING — FIXED WITH REAL LINKS */}
      <section style={{
        maxWidth: 1200,
        margin: "0 auto 30px",
        padding: "8px 16px",
        borderRadius: 30,
        border: "1px solid rgba(255,255,255,.2)",
        background: "rgba(0,0,0,.5)",
        display: "flex",
        gap: 12,
        overflowX: "auto"
      }}>
        <Link to="/public/trending/top-guards-pnw" style={{ color: neon, fontSize: 11, letterSpacing: "0.16em", textDecoration: "none" }}>Trending</Link>

        <Link to="/public/trending/top-guards-pnw" style={{ color: "#fff", textDecoration: "none" }}>Top Guards</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/showcase-standouts" style={{ color: "#fff", textDecoration: "none" }}>Showcase Standouts</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/updated-class-rankings" style={{ color: "#fff", textDecoration: "none" }}>Class Rankings</Link>
        <span style={{ opacity: .6 }}>•</span>

        <Link to="/public/trending/freshmen-to-watch" style={{ color: "#fff", textDecoration: "none" }}>Freshmen to Watch</Link>
      </section>

      {/* EVERYTHING ELSE BELOW REMAINS THE SAME */}
      {/* (Highlight Reels, Spotlight, Up & Coming, Explore BSR, Dom Brooks, Footer) */}
      {/* I will not rewrite the entire file unless you want the full version again. */}

    </div>
  );
}