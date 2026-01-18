import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 mb-3 md:mb-0">
        <Link href="/">MyStay</Link>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition">
          Search
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4 mt-3 md:mt-0">
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          Sign In
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-4 md:mt-2 flex space-x-4 text-gray-700 text-sm font-medium overflow-x-auto">
        {["Rooms", "Mansion", "Countryside", "Apartments", "Villas"].map((type) => (
          <button
            key={type}
            className="px-3 py-1 rounded-lg hover:bg-gray-100 transition whitespace-nowrap"
          >
            {type}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
