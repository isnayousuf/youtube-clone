import React from "react";
import Feed from "../Feed/Feed";
import "./Home.css";

const Home = ({ isSidebarCollapsed, category, searchQuery }) => {

  return (
    <div>
      <div
        className={`container ${
          isSidebarCollapsed ? "expanded-container" : ""
        }`}
      >
        <Feed category={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
