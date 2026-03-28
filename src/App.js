import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HOME
import PublicHome from "./pages/public/home/PublicHome";

// PLAYERS
import PlayersIndex from "./pages/public/players/PlayersIndex";
import PlayersList from "./pages/public/players/PlayersList";
import PublicPlayerProfile from "./pages/public/players/PublicPlayerProfile";
import PublicPlayer_JalenBrooks from "./pages/public/players/PublicPlayer_JalenBrooks";

// TEAMS
import Teams from "./pages/public/teams/Teams";
import PublicTeams from "./pages/public/teams/PublicTeams";
import PublicTeamProfile from "./pages/public/teams/PublicTeamProfile";

// NEWS
import News from "./pages/public/news/News";
import PublicNews from "./pages/public/news/PublicNews";
import PublicNewsArticle from "./pages/public/news/PublicNewsArticle";

// EVENTS
import Events from "./pages/public/events/Events";
import PublicEvents from "./pages/public/events/PublicEvents";
import PublicEventProfile from "./pages/public/events/PublicEventProfile";

// MEDIA
import Media from "./pages/public/media/Media";
import PublicMedia from "./pages/public/media/PublicMedia";
import PublicMediaContent from "./pages/public/media/PublicMediaContent";
import PublicMediaContentProfile from "./pages/public/media/PublicMediaContentProfile";

// RANKINGS
import Rankings from "./pages/public/rankings/Rankings";
import PublicRankings from "./pages/public/rankings/PublicRankings";
import PublicRankingProfile from "./pages/public/rankings/PublicRankingProfile";

// HIGHLIGHTS
import PublicHighlights from "./pages/public/highlights/PublicHighlights";

// TRENDING
import FreshmenToWatch from "./pages/public/trending/FreshmenToWatch";
import ShowcaseStandouts from "./pages/public/trending/ShowcaseStandouts";
import TopGuardsPNW from "./pages/public/trending/TopGuardsPNW";
import UpdatedClassRankings from "./pages/public/trending/UpdatedClassRankings";

// SEARCH
import PublicSearch from "./pages/public/search/PublicSearch";
import PublicSearchResults from "./pages/public/search/PublicSearchResults";

// SITEMAP
import SiteMap from "./pages/public/sitemap/SiteMap";

// STATIC PAGES
import StaticAbout from "./pages/public/static/About";
import StaticContact from "./pages/public/static/Contact";
import StaticPrivacyPolicy from "./pages/public/static/PrivacyPolicy";
import StaticTermsOfService from "./pages/public/static/TermsOfService";

// INFO / SUPPORT
import About from "./pages/public/about/About";
import Contact from "./pages/public/contact/Contact";
import CoachesCorner from "./pages/public/coaches/CoachesCorner";
import FAQ from "./pages/public/faq/FAQ";
import Privacy from "./pages/public/privacy/Privacy";
import TermsOfService from "./pages/public/terms/TermsOfService";
import ReportIssue from "./pages/public/support/ReportIssue";
import CoachSubmission from "./pages/public/submissions/CoachSubmission";
import EventSubmission from "./pages/public/submissions/EventSubmission";
import MediaSubmission from "./pages/public/submissions/MediaSubmission";
import PlayerSubmission from "./pages/public/submissions/PlayerSubmission";

// ADMIN DASHBOARD
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<PublicHome />} />

        {/* PLAYERS */}
        <Route path="/public/players" element={<PlayersIndex />} />
        <Route path="/public/players/list" element={<PlayersList />} />
        <Route path="/public/players/profile" element={<PublicPlayerProfile />} />
        <Route path="/public/players/jalen-brooks" element={<PublicPlayer_JalenBrooks />} />

        {/* TEAMS */}
        <Route path="/public/teams" element={<Teams />} />
        <Route path="/public/teams/list" element={<PublicTeams />} />
        <Route path="/public/teams/profile" element={<PublicTeamProfile />} />

        {/* NEWS */}
        <Route path="/public/news" element={<News />} />
        <Route path="/public/news/list" element={<PublicNews />} />
        <Route path="/public/news/article" element={<PublicNewsArticle />} />

        {/* EVENTS */}
        <Route path="/public/events" element={<Events />} />
        <Route path="/public/events/list" element={<PublicEvents />} />
        <Route path="/public/events/profile" element={<PublicEventProfile />} />

        {/* MEDIA */}
        <Route path="/public/media" element={<Media />} />
        <Route path="/public/media/list" element={<PublicMedia />} />
        <Route path="/public/media/content" element={<PublicMediaContent />} />
        <Route path="/public/media/content/profile" element={<PublicMediaContentProfile />} />

        {/* RANKINGS */}
        <Route path="/public/rankings" element={<Rankings />} />
        <Route path="/public/rankings/list" element={<PublicRankings />} />
        <Route path="/public/rankings/profile" element={<PublicRankingProfile />} />

        {/* HIGHLIGHTS */}
        <Route path="/public/highlights" element={<PublicHighlights />} />

        {/* TRENDING */}
        <Route path="/public/trending/freshmen-to-watch" element={<FreshmenToWatch />} />
        <Route path="/public/trending/showcase-standouts" element={<ShowcaseStandouts />} />
        <Route path="/public/trending/top-guards-pnw" element={<TopGuardsPNW />} />
        <Route path="/public/trending/updated-class-rankings" element={<UpdatedClassRankings />} />

        {/* SEARCH */}
        <Route path="/public/search" element={<PublicSearch />} />
        <Route path="/public/search/results" element={<PublicSearchResults />} />

        {/* SITEMAP */}
        <Route path="/public/sitemap" element={<SiteMap />} />

        {/* STATIC PAGES */}
        <Route path="/public/static/about" element={<StaticAbout />} />
        <Route path="/public/static/contact" element={<StaticContact />} />
        <Route path="/public/static/privacy" element={<StaticPrivacyPolicy />} />
        <Route path="/public/static/terms" element={<StaticTermsOfService />} />

        {/* INFO / SUPPORT */}
        <Route path="/public/about" element={<About />} />
        <Route path="/public/contact" element={<Contact />} />
        <Route path="/public/coaches" element={<CoachesCorner />} />
        <Route path="/public/faq" element={<FAQ />} />
        <Route path="/public/privacy" element={<Privacy />} />
        <Route path="/public/terms" element={<TermsOfService />} />
        <Route path="/public/support" element={<ReportIssue />} />

        {/* SUBMISSIONS */}
        <Route path="/public/submissions/coach" element={<CoachSubmission />} />
        <Route path="/public/submissions/event" element={<EventSubmission />} />
        <Route path="/public/submissions/media" element={<MediaSubmission />} />
        <Route path="/public/submissions/player" element={<PlayerSubmission />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;