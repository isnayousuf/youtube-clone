import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Navbar from "./Containers/Navbar/Navbar";
import Video from "./Containers/Video/Video";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div>
      <Navbar setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <Routes>
        <Route
          path="/"
          element={<Home isSidebarCollapsed={isSidebarCollapsed} />}
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
