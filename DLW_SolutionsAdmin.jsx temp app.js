import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===========================
   PUBLIC PAGES
=========================== */

// HOME
import PublicHome from "./pages/public/home/PublicHome";

// MEDIA
import PublicMedia from "./pages/public/media/PublicMedia";

// PLAYERS
import PublicPlayers from "./pages/public/players/PublicPlayers";
import PublicPlayerProfile from "./pages/public/players/PublicPlayerProfile";

// TEAMS
import PublicTeams from "./pages/public/teams/PublicTeams";
import PublicTeamProfile from "./pages/public/teams/PublicTeamProfile";

// EVENTS
import PublicEvents from "./pages/public/events/PublicEvents";
import PublicEventProfile from "./pages/public/events/PublicEventProfile";

// RANKINGS
import PublicRankings from "./pages/public/rankings/PublicRankings";

// SEARCH
import PublicSearch from "./pages/public/search/PublicSearch";
import PublicSearchResults from "./pages/public/search/PublicSearchResults";

// NEWS
import PublicNews from "./pages/public/news/PublicNews";
import PublicNewsArticle from "./pages/public/news/PublicNewsArticle";

// STATIC PAGES
import About from "./pages/public/static/About";
import Contact from "./pages/public/static/Contact";
import PrivacyPolicy from "./pages/public/static/PrivacyPolicy";
import TermsOfService from "./pages/public/static/TermsOfService";

/* ===========================
   ADMIN PAGES
=========================== */

// DASHBOARD
import Admin from "./pages/admin/Admin";

// CORE MODULES
import Players from "./pages/admin/Players";
import Teams from "./pages/admin/Teams";
import Events from "./pages/admin/Events";
import Camps from "./pages/admin/Camps";
import Coaches from "./pages/admin/Coaches";
import Media from "./pages/admin/Media";
import Rankings from "./pages/admin/Rankings";
import News from "./pages/admin/News";
import FAQ from "./pages/admin/FAQ";
import Staff from "./pages/admin/Staff";
import Partners from "./pages/admin/Partners";
import Testimonials from "./pages/admin/Testimonials";

// ADD MODULES
import AddPlayer from "./pages/admin/AddPlayer";
import AddTeam from "./pages/admin/AddTeam";
import AddEvent from "./pages/admin/AddEvent";
import AddCamp from "./pages/admin/AddCamp";
import AddCoach from "./pages/admin/AddCoach";
import AddMedia from "./pages/admin/AddMedia";
import AddRankings from "./pages/admin/AddRankings";
import AddFAQ from "./pages/admin/AddFAQ";
import AddStaff from "./pages/admin/AddStaff";
import AddPartner from "./pages/admin/AddPartner";
import AddTestimonial from "./pages/admin/AddTestimonial";

// EDIT MODULES
import EditPlayer from "./pages/admin/EditPlayer";
import EditTeam from "./pages/admin/EditTeam";
import EditEvent from "./pages/admin/EditEvent";
import EditCamp from "./pages/admin/EditCamp";
import EditCoach from "./pages/admin/EditCoach";
import EditMedia from "./pages/admin/EditMedia";
import EditRanking from "./pages/admin/EditRanking";
import EditFAQ from "./pages/admin/EditFAQ";
import EditStaff from "./pages/admin/EditStaff";
import EditPartner from "./pages/admin/EditPartner";
import EditTestimonial from "./pages/admin/EditTestimonial";


/* ===========================
   ROUTER
=========================== */

const App = () => {
  return (
    <Router>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PublicHome />} />

        <Route path="/public/media" element={<PublicMedia />} />

        <Route path="/public/players" element={<PublicPlayers />} />
        <Route path="/public/players/:id" element={<PublicPlayerProfile />} />

        <Route path="/public/teams" element={<PublicTeams />} />
        <Route path="/public/teams/:id" element={<PublicTeamProfile />} />

        <Route path="/public/events" element={<PublicEvents />} />
        <Route path="/public/events/:id" element={<PublicEventProfile />} />

        <Route path="/public/rankings" element={<PublicRankings />} />

        <Route path="/public/search" element={<PublicSearch />} />
        <Route path="/public/search/results" element={<PublicSearchResults />} />

        <Route path="/public/news" element={<PublicNews />} />
        <Route path="/public/news/article/:id" element={<PublicNewsArticle />} />

        <Route path="/public/about" element={<About />} />
        <Route path="/public/contact" element={<Contact />} />
        <Route path="/public/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/public/terms-of-service" element={<TermsOfService />} />


        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Admin />} />

        <Route path="/admin/players" element={<Players />} />
        <Route path="/admin/teams" element={<Teams />} />
        <Route path="/admin/events" element={<Events />} />
        <Route path="/admin/camps" element={<Camps />} />
        <Route path="/admin/coaches" element={<Coaches />} />
        <Route path="/admin/media" element={<Media />} />
        <Route path="/admin/rankings" element={<Rankings />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/faq" element={<FAQ />} />
        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/partners" element={<Partners />} />
        <Route path="/admin/testimonials" element={<Testimonials />} />

        {/* ADD ROUTES */}
        <Route path="/admin/add/player" element={<AddPlayer />} />
        <Route path="/admin/add/team" element={<AddTeam />} />
        <Route path="/admin/add/event" element={<AddEvent />} />
        <Route path="/admin/add/camp" element={<AddCamp />} />
        <Route path="/admin/add/coach" element={<AddCoach />} />
        <Route path="/admin/add/media" element={<AddMedia />} />
        <Route path="/admin/add/rankings" element={<AddRankings />} />
        <Route path="/admin/add/faq" element={<AddFAQ />} />
        <Route path="/admin/add/staff" element={<AddStaff />} />
        <Route path="/admin/add/partner" element={<AddPartner />} />
        <Route path="/admin/add/testimonial" element={<AddTestimonial />} />

        {/* EDIT ROUTES */}
        <Route path="/admin/edit/player/:id" element={<EditPlayer />} />
        <Route path="/admin/edit/team/:id" element={<EditTeam />} />
        <Route path="/admin/edit/event/:id" element={<EditEvent />} />
        <Route path="/admin/edit/camp/:id" element={<EditCamp />} />
        <Route path="/admin/edit/coach/:id" element={<EditCoach />} />
        <Route path="/admin/edit/media/:id" element={<EditMedia />} />
        <Route path="/admin/edit/ranking/:id" element={<EditRanking />} />
        <Route path="/admin/edit/faq/:id" element={<EditFAQ />} />
        <Route path="/admin/edit/staff/:id" element={<EditStaff />} />
        <Route path="/admin/edit/partner/:id" element={<EditPartner />} />
        <Route path="/admin/edit/testimonial/:id" element={<EditTestimonial />} />

      </Routes>
    </Router>
  );
};

export default App;

