import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedLayer2, setExpandedLayer2] = useState(null);

  const toggleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
    setExpandedLayer2(null);
  };

  const toggleLayer2 = (cardId, layer2Id) => {
    setExpandedLayer2(expandedLayer2 === `${cardId}-${layer2Id}` ? null : `${cardId}-${layer2Id}`);
  };

  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div className="admin-header-left">
          <Link to="/" className="admin-home-link">← Back to Homepage</Link>
        </div>

        <div className="admin-header-center">
          <h1 className="admin-title">Brooks Scouting Report</h1>
          <p className="admin-tagline">Built for Hoopers • Admin Control Room</p>
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

            <div 
              className="admin-card admin-card-accent"
              onClick={() => toggleExpand('dashboard')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Coaches Corner</h3>
              <p className="admin-card-text">
                Dom's conversations, decisions, and notes with coaches.
              </p>
              {expandedCard === 'dashboard' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('dashboard', 'main')}>
                    <span className="admin-layer2-label">Main Dashboard</span>
                    {expandedLayer2 === 'dashboard-main' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/dashboard" className="admin-layer3-link">View Dashboard</Link>
                        <Link to="/admin/dashboard" className="admin-layer3-link">Edit Notes</Link>
                        <Link to="/admin/dashboard" className="admin-layer3-link">Add Conversation</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/admin/coaches" className="admin-layer2-link">Coaches Network</Link>
                </div>
              )}
            </div>

            <Link to="/admin/media" className="admin-card">
              <h3 className="admin-card-title">Highlight Reel</h3>
              <p className="admin-card-text">
                Manage Dom's highlight reels and featured videos.
              </p>
            </Link>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('features')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Dom Features</h3>
              <p className="admin-card-text">
                Articles and features written from Dom's perspective.
              </p>
              {expandedCard === 'features' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('features', 'all')}>
                    <span className="admin-layer2-label">All Features</span>
                    {expandedLayer2 === 'features-all' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">View All</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Filter by Date</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Sort by Views</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('features', 'add')}>
                    <span className="admin-layer2-label">Add New Feature</span>
                    {expandedLayer2 === 'features-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">Create Article</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Upload Media</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Set Tags</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('features', 'featured')}>
                    <span className="admin-layer2-label">Featured Stories</span>
                    {expandedLayer2 === 'features-featured' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">View Featured</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Manage Pinned</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Archive Old</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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

            <div 
              className="admin-card"
              onClick={() => toggleExpand('players')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Players</h3>
              <p className="admin-card-text">Player data, scouting notes, reels.</p>
              {expandedCard === 'players' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('players', 'list')}>
                    <span className="admin-layer2-label">All Players</span>
                    {expandedLayer2 === 'players-list' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/players" className="admin-layer3-link">View List</Link>
                        <Link to="/admin/players" className="admin-layer3-link">Search Players</Link>
                        <Link to="/admin/players" className="admin-layer3-link">Export Data</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('players', 'add')}>
                    <span className="admin-layer2-label">Add Player</span>
                    {expandedLayer2 === 'players-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/players/add" className="admin-layer3-link">New Profile</Link>
                        <Link to="/admin/players/add" className="admin-layer3-link">Bulk Upload</Link>
                        <Link to="/admin/players/add" className="admin-layer3-link">Import CSV</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('teams')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Teams</h3>
              <p className="admin-card-text">Programs, rosters, relationships.</p>
              {expandedCard === 'teams' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('teams', 'list')}>
                    <span className="admin-layer2-label">All Teams</span>
                    {expandedLayer2 === 'teams-list' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/teams" className="admin-layer3-link">View Teams</Link>
                        <Link to="/admin/teams" className="admin-layer3-link">Filter by Region</Link>
                        <Link to="/admin/teams" className="admin-layer3-link">View Rosters</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('teams', 'add')}>
                    <span className="admin-layer2-label">Add Team</span>
                    {expandedLayer2 === 'teams-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/teams/add" className="admin-layer3-link">Create Team</Link>
                        <Link to="/admin/teams/add" className="admin-layer3-link">Add Roster</Link>
                        <Link to="/admin/teams/add" className="admin-layer3-link">Set Conference</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('events')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Events</h3>
              <p className="admin-card-text">Camps, showcases, tournaments.</p>
              {expandedCard === 'events' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('events', 'list')}>
                    <span className="admin-layer2-label">All Events</span>
                    {expandedLayer2 === 'events-list' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/events" className="admin-layer3-link">View Events</Link>
                        <Link to="/admin/events" className="admin-layer3-link">Filter by Type</Link>
                        <Link to="/admin/events" className="admin-layer3-link">View Schedule</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('events', 'add')}>
                    <span className="admin-layer2-label">Add Event</span>
                    {expandedLayer2 === 'events-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/events/add" className="admin-layer3-link">Create Event</Link>
                        <Link to="/admin/events/add" className="admin-layer3-link">Set Location</Link>
                        <Link to="/admin/events/add" className="admin-layer3-link">Add Teams</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('camps')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Camps</h3>
              <p className="admin-card-text">Dom's camps and clinics.</p>
              {expandedCard === 'camps' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('camps', 'list')}>
                    <span className="admin-layer2-label">All Camps</span>
                    {expandedLayer2 === 'camps-list' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/camps" className="admin-layer3-link">View Camps</Link>
                        <Link to="/admin/camps" className="admin-layer3-link">View Registrations</Link>
                        <Link to="/admin/camps" className="admin-layer3-link">Export List</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('camps', 'add')}>
                    <span className="admin-layer2-label">Add Camp</span>
                    {expandedLayer2 === 'camps-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/camps/add" className="admin-layer3-link">New Camp</Link>
                        <Link to="/admin/camps/add" className="admin-layer3-link">Set Schedule</Link>
                        <Link to="/admin/camps/add" className="admin-layer3-link">Pricing</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('rankings')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">Rankings</h3>
              <p className="admin-card-text">Class rankings and boards.</p>
              {expandedCard === 'rankings' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('rankings', 'list')}>
                    <span className="admin-layer2-label">All Rankings</span>
                    {expandedLayer2 === 'rankings-list' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/rankings" className="admin-layer3-link">View All</Link>
                        <Link to="/admin/rankings" className="admin-layer3-link">By Class</Link>
                        <Link to="/admin/rankings" className="admin-layer3-link">By Position</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('rankings', 'add')}>
                    <span className="admin-layer2-label">Add Rankings</span>
                    {expandedLayer2 === 'rankings-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/rankings/add" className="admin-layer3-link">New Ranking</Link>
                        <Link to="/admin/rankings/add" className="admin-layer3-link">Bulk Add</Link>
                        <Link to="/admin/rankings/add" className="admin-layer3-link">Update Order</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('rankings', 'manage')}>
                    <span className="admin-layer2-label">Manage Rankings</span>
                    {expandedLayer2 === 'rankings-manage' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/rankings" className="admin-layer3-link">Edit Rankings</Link>
                        <Link to="/admin/rankings" className="admin-layer3-link">Delete Old</Link>
                        <Link to="/admin/rankings" className="admin-layer3-link">Archive</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/admin/media" className="admin-card">
              <h3 className="admin-card-title">Media Library</h3>
              <p className="admin-card-text">Photos, videos, assets.</p>
            </Link>

            <div 
              className="admin-card"
              onClick={() => toggleExpand('news')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">News & Stories</h3>
              <p className="admin-card-text">Articles and updates.</p>
              {expandedCard === 'news' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('news', 'all')}>
                    <span className="admin-layer2-label">All News</span>
                    {expandedLayer2 === 'news-all' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">View News</Link>
                        <Link to="/admin/news" className="admin-layer3-link">By Category</Link>
                        <Link to="/admin/news" className="admin-layer3-link">By Date</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('news', 'add')}>
                    <span className="admin-layer2-label">Add Article</span>
                    {expandedLayer2 === 'news-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">Create Article</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Upload Images</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Publish</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('news', 'manage')}>
                    <span className="admin-layer2-label">Manage News</span>
                    {expandedLayer2 === 'news-manage' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">Edit Articles</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Delete</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Archive</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('news', 'featured')}>
                    <span className="admin-layer2-label">Featured Stories</span>
                    {expandedLayer2 === 'news-featured' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/news" className="admin-layer3-link">View Featured</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Make Featured</Link>
                        <Link to="/admin/news" className="admin-layer3-link">Remove Featured</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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

            <div 
              className="admin-card"
              onClick={() => toggleExpand('faq')}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="admin-card-title">FAQ</h3>
              <p className="admin-card-text">Questions and answers.</p>
              {expandedCard === 'faq' && (
                <div className="admin-card-layer2">
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('faq', 'all')}>
                    <span className="admin-layer2-label">All FAQs</span>
                    {expandedLayer2 === 'faq-all' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/faq" className="admin-layer3-link">View All</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">By Category</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">Most Viewed</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('faq', 'add')}>
                    <span className="admin-layer2-label">Add FAQ</span>
                    {expandedLayer2 === 'faq-add' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/faq" className="admin-layer3-link">New Question</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">Set Category</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">Publish</Link>
                      </div>
                    )}
                  </div>
                  <div className="admin-layer2-item" onClick={() => toggleLayer2('faq', 'manage')}>
                    <span className="admin-layer2-label">Manage FAQs</span>
                    {expandedLayer2 === 'faq-manage' && (
                      <div className="admin-card-layer3">
                        <Link to="/admin/faq" className="admin-layer3-link">Edit FAQs</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">Delete</Link>
                        <Link to="/admin/faq" className="admin-layer3-link">Reorder</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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
          Dom Brooks • Owner, Brooks Scouting Report • Built by DLW Solutions
        </p>
      </footer>
    </div>
  );
}