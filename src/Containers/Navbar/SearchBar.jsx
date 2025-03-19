import { Search } from "lucide-react";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const SearchBar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="search-box flex-div">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span onClick={handleSearch}>
        <Search size={14} strokeWidth={1.5} absoluteStrokeWidth />
      </span>
    </div>
  );
};

export default SearchBar
