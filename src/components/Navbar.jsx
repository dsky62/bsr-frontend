import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-orange-500">
          Brooks Scouting Report
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm">
          <Link to="/players" className="hover:text-orange-400 transition">
            Players
          </Link>

          <Link to="/teams" className="hover:text-orange-400 transition">
            Teams
          </Link>

          <Link to="/rankings" className="hover:text-orange-400 transition">
            Rankings
          </Link>

          <Link to="/events" className="hover:text-orange-400 transition">
            Events
          </Link>

          {/* MEDIA */}
          <Link to="/media" className="hover:text-orange-400 transition">
            Media
          </Link>

          {/* TESTIMONIALS */}
          <Link to="/testimonials" className="hover:text-orange-400 transition">
            Testimonials
          </Link>

          {/* NEWS */}
          <Link to="/news" className="hover:text-orange-400 transition">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

