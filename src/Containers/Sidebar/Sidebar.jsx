import {
  BookOpenText,
  Gamepad2,
  Home as HomeIcon,
  MemoryStick,
  Music,
  Newspaper,
  Trophy,
  Truck,
  TvMinimalPlay,
  User
} from "lucide-react";
import React from 'react';
import "./Sidebar.css";

const Sidebar = ({ isSidebarCollapsed }) => {
  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapse-sidebar" : ""}`}>
      <div className="shortcut-links">
        <div className="flex-div side-link">
          <HomeIcon size={20} />
          <p>Home</p>
        </div>

        <div className="flex-div side-link">
          <Gamepad2 size={20} />
          <p>Gaming</p>
        </div>

        <div className="flex-div side-link">
          <Truck size={20} />
          <p>Automobiles</p>
        </div>

        <div className="flex-div side-link">
          <Trophy size={20} />
          <p>Sports</p>
        </div>

        <div className="flex-div side-link">
          <TvMinimalPlay size={20} />
          <p>Entertainment</p>
        </div>

        <div className="flex-div side-link">
          <MemoryStick size={20} />
          <p>Technologies </p>
        </div>

        <div className="flex-div side-link">
          <Music size={20} />
          <p>Music</p>
        </div>

        <div className="flex-div side-link">
          <BookOpenText size={20} />
          <p>Blog</p>
        </div>

        <div className="flex-div side-link">
          <Newspaper size={20} />
          <p>News</p>
        </div>
      </div>

      <hr />

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="flex-div side-link">
          <User size={20} />
          <p>User1</p>
        </div>

        <div className="flex-div side-link">
          <User size={20} />
          <p>User2</p>
        </div>

        <div className="flex-div side-link">
          <User size={20} />
          <p>User3</p>
        </div>

        <div className="flex-div side-link">
          <User size={20} />
          <p>User4</p>
        </div>

        <div className="flex-div side-link">
          <User size={20} />
          <p>User5</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar
