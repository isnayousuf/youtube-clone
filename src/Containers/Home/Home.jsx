import React, { useState } from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = ({ isSidebarCollapsed }) => {
  const [category, setCategory] = useState(0)
  return (
    <div>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`container ${
          isSidebarCollapsed ? "" : "expanded-container"
        }`}
      >
        <Feed category={category}/>
      </div>
    </div>
  );
};

export default Home;
