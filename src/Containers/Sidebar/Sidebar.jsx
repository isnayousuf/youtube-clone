import {
  BookOpenText,
  Gamepad2,
  House,
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

const Sidebar = ({ isSidebarCollapsed, category, setCategory }) => {

  const handleCategoryChange = (val) => {
    setCategory(val)
  }
  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapse-sidebar" : ""}`}>
      <div className="shortcut-links">
        <div
          className={`flex-div side-link ${category === 0 ? "active" : ""}`}
          onClick={() => handleCategoryChange(0)}
        >
          <House size={24} className="side-icon" />
          <p>Home</p>
        </div>

        <div
          className={`flex-div side-link ${category === 20 ? "active" : ""}`}
          onClick={() => handleCategoryChange(20)}
        >
          <Gamepad2 size={24} className="side-icon" />
          <p>Gaming</p>
        </div>

        <div
          className={`flex-div side-link ${category === 2 ? "active" : ""}`}
          onClick={() => handleCategoryChange(2)}
        >
          <Truck size={24} className="side-icon" />
          <p>Automobiles</p>
        </div>

        <div
          className={`flex-div side-link ${category === 17 ? "active" : ""}`}
          onClick={() => handleCategoryChange(17)}
        >
          <Trophy size={24} className="side-icon" />
          <p>Sports</p>
        </div>

        <div
          className={`flex-div side-link ${category === 24 ? "active" : ""}`}
          onClick={() => handleCategoryChange(24)}
        >
          <TvMinimalPlay size={24} className="side-icon" />
          <p>Entertainment</p>
        </div>

        <div
          className={`flex-div side-link ${category === 28 ? "active" : ""}`}
          onClick={() => handleCategoryChange(28)}
        >
          <MemoryStick size={24} className="side-icon" />
          <p>Technology </p>
        </div>

        <div
          className={`flex-div side-link ${category === 10 ? "active" : ""}`}
          onClick={() => handleCategoryChange(10)}
        >
          <Music size={24} className="side-icon" />
          <p>Music</p>
        </div>

        <div
          className={`flex-div side-link ${category === 22 ? "active" : ""}`}
          onClick={() => handleCategoryChange(22)}
        >
          <BookOpenText size={24} className="side-icon" />
          <p>People and Blogs</p>
        </div>

        <div
          className={`flex-div side-link ${category === 25 ? "active" : ""}`}
          onClick={() => handleCategoryChange(25)}
        >
          <Newspaper size={24} className="side-icon" />
          <p>News and Politics</p>
        </div>
      </div>

      <hr />

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="flex-div side-link">
          <User size={24} />
          <p>User1</p>
        </div>

        <div className="flex-div side-link">
          <User size={24} />
          <p>User2</p>
        </div>

        <div className="flex-div side-link">
          <User size={24} />
          <p>User3</p>
        </div>

        <div className="flex-div side-link">
          <User size={24} />
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
