import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import Feed from "./Containers/Feed/Feed";
import Home from "./Containers/Home/Home";
import Navbar from "./Containers/Navbar/Navbar";
import RightSidebar from "./Containers/Sidebar/RightSidebar";
import Sidebar from "./Containers/Sidebar/Sidebar";
import Video from "./Containers/Video/Video";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

 
  return (
    <div>
      <Navbar setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
      <RightSidebar isRightSidebarOpen={isRightSidebarOpen} />
      <Routes>
        <Route
          path="/"
          element={<Home isSidebarCollapsed={isSidebarCollapsed} />}
        />
        <Route
          path="/feed/:category"
          element={<Feed isSidebarCollapsed={isSidebarCollapsed} />}
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
