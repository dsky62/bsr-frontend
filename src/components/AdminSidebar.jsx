import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "bg-orange-500 text-black"
      : "bg-zinc-900 text-white hover:bg-zinc-800";

  return (
    <div className="w-64 min-h-screen bg-black border-r border-zinc-800 p-5">
      <h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1>

      <nav className="space-y-3">

        <Link
          to="/admin/dashboard"
          className={`block px-4 py-2 rounded ${isActive("/admin/dashboard")}`}
        >
          Dashboard
        </Link>

        <Link
          to="/admin/players"
          className={`block px-4 py-2 rounded ${isActive("/admin/players")}`}
        >
          Players
        </Link>

        <Link
          to="/admin/teams"
          className={`block px-4 py-2 rounded ${isActive("/admin/teams")}`}
        >
          Teams
        </Link>

        <Link
          to="/admin/events"
          className={`block px-4 py-2 rounded ${isActive("/admin/events")}`}
        >
          Events
        </Link>

        <Link
          to="/admin/news"
          className={`block px-4 py-2 rounded ${isActive("/admin/news")}`}
        >
          News
        </Link>

        {/* ⭐ NEW RANKINGS SECTION */}
        <Link
          to="/admin/rankings"
          className={`block px-4 py-2 rounded ${isActive("/admin/rankings")}`}
        >
          Rankings
        </Link>

        <Link
          to="/admin/testimonials"
          className={`block px-4 py-2 rounded ${isActive("/admin/testimonials")}`}
        >
          Testimonials
        </Link>

        <Link
          to="/admin/faq"
          className={`block px-4 py-2 rounded ${isActive("/admin/faq")}`}
        >
          FAQ
        </Link>

        <Link
          to="/admin/staff"
          className={`block px-4 py-2 rounded ${isActive("/admin/staff")}`}
        >
          Staff
        </Link>

        <Link
          to="/admin/partners"
          className={`block px-4 py-2 rounded ${isActive("/admin/partners")}`}
        >
          Partners
        </Link>

        <Link
          to="/admin/coaches"
          className={`block px-4 py-2 rounded ${isActive("/admin/coaches")}`}
        >
          Coaches
        </Link>

        <Link
          to="/admin/camps"
          className={`block px-4 py-2 rounded ${isActive("/admin/camps")}`}
        >
          Camps
        </Link>

      </nav>
    </div>
  );
};

export default AdminSidebar;

