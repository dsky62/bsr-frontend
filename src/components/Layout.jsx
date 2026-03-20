import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        {children}
      </main>

      <footer className="w-full text-center py-6 text-xs tracking-wide">
        <span className="text-zinc-500">Built by </span>
        <span className="font-bold text-orange-500">DLW Solutions LLC</span>
      </footer>
    </div>
  );
};

export default Layout;

