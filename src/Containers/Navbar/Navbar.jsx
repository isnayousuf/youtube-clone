import { Bell, CircleEllipsis, CircleUser, Menu, Search } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ setIsSidebarCollapsed }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div className="menu-icon">
          <Menu
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
          <Search size={14} />
        </div>
      </div>

      <div className="nav-right flex-div gap-25">
        <Search size={30} />
        <CircleEllipsis size={30} />
        <Bell size={30} />
        <CircleUser size={30} className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar
