import React from 'react';
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import './Home.css';

const Home = ({ isSidebarCollapsed }) => {
  return (
    <div>
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
      <div className={`container ${isSidebarCollapsed ? '' : 'expanded-container'}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home
