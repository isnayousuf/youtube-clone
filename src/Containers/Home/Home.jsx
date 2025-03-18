import React from "react";
import Feed from "../Feed/Feed";
import "./Home.css";

const Home = ({ isSidebarCollapsed, category, setCategory }) => {
  return (
    <div>
      <div
        className={`container ${
          isSidebarCollapsed ? "expanded-container" : ""
        }`}
      >
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
