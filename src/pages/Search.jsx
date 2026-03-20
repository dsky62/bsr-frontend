import React, { useState } from "react";
import { Link } from "react-router-dom";
import PublicNav from "../components/PublicNav";
import PublicFooter from "../components/PublicFooter";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) return;

    // Replace with real API search
    const mockResults = [
      {
        id: 1,
        type: "player",
        title: "Dom Brooks",
        subtitle: "G • Class of 2026 • Seattle Elite",
        img: "/images/news1.jpg",
      },
      {
        id: 2,
        type: "team",
        title: "Seattle Elite",
        subtitle: "Seattle, WA",
        img: "/images/news2.jpg",
      },
      {
        id: 3,
        type: "news",
        title: "2026 Spring Showcase Standouts",
        subtitle: "Event recap and top performers",
        img: "/images/news3.jpg",
      },
      {
        id: 4,
        type: "media",
        title: "Prospect Spotlight: Dom Brooks",
        subtitle: "Video breakdown and analysis",
        img: "/images/spotlight.jpg",
      },
    ];

    setResults(mockResults);
  };

  const getLink = (item) => {
    if (item.type === "player") return `/players/${item.id}`;
    if (item.type === "team") return `/teams/${item.id}`;
    if (item.type === "news") return `/news/${item.id}`;
    if (item.type === "media") return `/media/${item.id}`;
    return "/";
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      <PublicNav />

      {/* HEADER */}
      <div className="w-full bg-[#1F2937] border-b border-[#2D3748] py-6 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Search
          </h1>
          <p className="text-gray-300 text-xs mt-1">
            Find players, teams, events, media, and news.
          </p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 bg-[#1F2937] border border-[#2D3748] rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6]"
            placeholder="Search players, teams, events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-[#3B82F6] text-white text-sm font-semibold rounded-md hover:bg-[#2563EB] transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-4xl mx-auto px-4 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((item) => (
          <Link
            key={item.id}
            to={getLink(item)}
            className="bg-[#1F2937] border border-[#2D3748] rounded-md overflow-hidden hover:border-[#3B82F6] transition"
          >
            <img
              src={item.img}
              className="w-full h-40 object-cover"
              alt={item.title}
            />

            <div className="p-4">
              <h3 className="font-bold text-white text-sm">{item.title}</h3>
              <p className="text-gray-300 text-xs mt-1">{item.subtitle}</p>
              <p className="text-gray-400 text-[11px] mt-1 capitalize">
                {item.type}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* FOOTER CREDIT */}
      <p className="text-center text-gray-500 text-[10px] mb-4">
        Built by DLW Solutions LLC
      </p>

      <PublicFooter />
    </div>
  );
};

export default Search;

