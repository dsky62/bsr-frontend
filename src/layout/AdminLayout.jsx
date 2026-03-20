import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <header className="w-full border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide">Admin Dashboard</h1>
        <Link
          to="/"
          className="text-sm text-orange-400 hover:text-orange-300 transition"
        >
          Return to Site
        </Link>
      </header>

      <main className="flex-1 w-full p-6">
        {children}
      </main>

      <footer className="w-full text-center py-6 text-xs tracking-wide border-t border-zinc-800">
        <span className="text-zinc-500">Built by </span>
        <span className="font-bold text-orange-500">DLW Solutions LLC</span>
      </footer>

    </div>
  );
};

export default AdminLayout;

