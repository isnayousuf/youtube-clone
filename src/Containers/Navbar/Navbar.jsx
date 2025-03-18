import { Bell, CircleUser, Menu, Search } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ setIsSidebarCollapsed }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div className="menu-icon">
          <Menu
            strokeWidth={1.5}
            absoluteStrokeWidth
            onClick={() => {
              setIsSidebarCollapsed((prevState) =>
                prevState === false ? true : false
              );
            }}
          />
        </div>
        <Link to="/">
          <div className="logo-container"></div>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <Search size={14} strokeWidth={1.5} absoluteStrokeWidth />
        </div>
      </div>
      <div className="nav-right flex-div gap-25">
     
        <Bell size={20} strokeWidth={1.5} absoluteStrokeWidth />
        <CircleUser
          size={30}
          strokeWidth={1.5}
          absoluteStrokeWidth
          className="user-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar
