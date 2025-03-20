import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
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
  const location = useLocation();
  const hideNavigationPages = location.pathname === "/page-not-found";

  return (
    <div>
      {!hideNavigationPages && (
        <Navbar
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          setIsRightSidebarOpen={setIsRightSidebarOpen}
        />
      )}
      {!hideNavigationPages && (
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
      )}

      {!hideNavigationPages && (
        <RightSidebar
          isRightSidebarOpen={isRightSidebarOpen}
          setIsRightSidebarOpen={setIsRightSidebarOpen}
        />
      )}
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
        <Route
          path="/page-not-found"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
