import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import Home from "./Containers/Home/Home";
import Navbar from "./Containers/Navbar/Navbar";
import Sidebar from "./Containers/Sidebar/Sidebar";
import Video from "./Containers/Video/Video";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [category, setCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar
        setIsSidebarCollapsed={setIsSidebarCollapsed}
        setSearchQuery={setSearchQuery}
      />
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        category={category}
        setCategory={setCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isSidebarCollapsed={isSidebarCollapsed}
              category={category}
              setCategory={setCategory}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video isSidebarCollapsed={isSidebarCollapsed} />}
        />
        <Route
          path="/results"
          element={<SearchResults isSidebarCollapsed={isSidebarCollapsed} />}
        />
      </Routes>
    </div>
  );
};

export default App;
