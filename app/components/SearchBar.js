"use client";
import { useState, useEffect } from "react";
import { searchCities } from "../data/cities";
import Link from "next/link";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const searchResults = searchCities(searchTerm);
      setResults(searchResults);
      setIsSearching(true);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchTerm]);

  return (
    <div className="relative max-w-4xl mx-auto mt-8 px-4">
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 pl-10 text-sm text-black border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search by city or province..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute left-3 top-4 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Search Results Dropdown */}
      {isSearching && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          {results.length > 0 ? (
            results.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="block px-4 py-3 hover:bg-slate-50 transition-colors"
              >
                <div className="font-medium text-slate-900">{city.name}</div>
                <div className="text-sm text-slate-600">{city.province}</div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-slate-600">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
}
