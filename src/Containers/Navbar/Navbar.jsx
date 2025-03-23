import { Bell, Menu } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";
import UserProfile from "../../Components/UserProfile";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ({ setIsSidebarCollapsed, setIsRightSidebarOpen }) => {

  const handleShowRightSidebar =() => {
    setIsRightSidebarOpen((prevState) => !prevState );
  }
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
        <SearchBar />
      </div>
      <div className="nav-right flex-div gap-25">
        <Bell size={20} strokeWidth={1.5} absoluteStrokeWidth className="notification-icon"/>

        <UserProfile handleProfileClick={handleShowRightSidebar} />
      </div>
    </nav>
  );
};

export default Navbar
