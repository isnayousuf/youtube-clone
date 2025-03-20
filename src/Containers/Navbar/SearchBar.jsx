import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import "./Navbar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const handleSearch = () => {
    if (debouncedQuery.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(debouncedQuery)}`);
    }
  };

  return (
    <div className="search-box flex-div">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={handleSearch} 
      />
      <span onClick={handleSearch}>
        <Search size={14} strokeWidth={1.5} absoluteStrokeWidth />
      </span>
    </div>
  );
};

export default SearchBar;
