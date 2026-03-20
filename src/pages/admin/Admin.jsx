import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div className="admin-header-left">
          <Link to="/" className="admin-home-link">← Back to Homepage</Link>
        </div>

        <div className="admin-header-center">
          <h1 className="admin-title">Brooks Scouting Report</h1>
          <p className="admin-tagline">Built for Hoopers · Admin Control Room</p>
        </div>

        <div className="admin-header-right">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="admin-social-link"
          >
            Dom Brooks Twitter
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="admin-main">

        {/* COACHES CORNER */}
        <section className="admin-section">
          <h2 className="admin-section-title">Dom Brooks Hub</h2>
          <div className="admin-grid">

            <Link to="/admin/dashboard" className="admin-card admin-card-accent">
              <h3 className="admin-card-title">Coaches Corner</h3>
              <p className="admin-card-text">
                Dom’s conversations, decisions, and notes with coaches.
              </p>
            </Link>

            <Link to="/admin/media" className="admin-card">
              <h3 className="admin-card-title">Highlight Reel</h3>
              <p className="admin-card-text">
                Manage Dom’s highlight reels and featured videos.
              </p>
            </Link>

            <Link to="/admin/news" className="admin-card">
              <h3 className="admin-card-title">Dom Features</h3>
              <p className="admin-card-text">
                Articles and features written from Dom’s perspective.
              </p>
            </Link>

            <Link to="/admin/partners" className="admin-card">
              <h3 className="admin-card-title">Brand & Partners</h3>
              <p className="admin-card-text">
                Manage BSR partners and brand relationships.
              </p>
            </Link>

          </div>
        </section>

        {/* CORE MODULES */}
        <section className="admin-section">
          <h2 className="admin-section-title">BSR Data Modules</h2>
          <div className="admin-grid">

            <Link to="/admin/players" className="admin-card">
              <h3 className="admin-card-title">Players</h3>
              <p className="admin-card-text">Player data, scouting notes, reels.</p>
            </Link>

            <Link to="/admin/teams" className="admin-card">
              <h3 className="admin-card-title">Teams</h3>
              <p className="admin-card-text">Programs, rosters, relationships.</p>
            </Link>

            <Link to="/admin/events" className="admin-card">
              <h3 className="admin-card-title">Events</h3>
              <p className="admin-card-text">Camps, showcases, tournaments.</p>
            </Link>

            <Link to="/admin/camps" className="admin-card">
              <h3 className="admin-card-title">Camps</h3>
              <p className="admin-card-text">Dom’s camps and clinics.</p>
            </Link>

            <Link to="/admin/rankings" className="admin-card">
              <h3 className="admin-card-title">Rankings</h3>
              <p className="admin-card-text">Class rankings and boards.</p>
            </Link>

            <Link to="/admin/media" className="admin-card">
              <h3 className="admin-card-title">Media Library</h3>
              <p className="admin-card-text">Photos, videos, assets.</p>
            </Link>

            <Link to="/admin/news" className="admin-card">
              <h3 className="admin-card-title">News & Stories</h3>
              <p className="admin-card-text">Articles and updates.</p>
            </Link>

            <Link to="/admin/testimonials" className="admin-card">
              <h3 className="admin-card-title">Testimonials</h3>
              <p className="admin-card-text">Voices from the BSR community.</p>
            </Link>

          </div>
        </section>

        {/* SUPPORT MODULES */}
        <section className="admin-section">
          <h2 className="admin-section-title">Support & Structure</h2>
          <div className="admin-grid">

            <Link to="/admin/coaches" className="admin-card">
              <h3 className="admin-card-title">Coaches</h3>
              <p className="admin-card-text">Coaches in the network.</p>
            </Link>

            <Link to="/admin/staff" className="admin-card">
              <h3 className="admin-card-title">Staff</h3>
              <p className="admin-card-text">BSR staff and roles.</p>
            </Link>

            <Link to="/admin/faq" className="admin-card">
              <h3 className="admin-card-title">FAQ</h3>
              <p className="admin-card-text">Questions and answers.</p>
            </Link>

            <Link to="/admin/partners" className="admin-card">
              <h3 className="admin-card-title">Partners</h3>
              <p className="admin-card-text">Organizations supporting BSR.</p>
            </Link>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="admin-footer">
        <p className="admin-footer-text">
          Dom Brooks · Owner, Brooks Scouting Report · Built by DLW Solutions
        </p>
      </footer>
    </div>
  );
}

