import {
  User
} from "lucide-react";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { YTCategories } from "../Constants/data.jsx";
import "./Sidebar.css";

const Sidebar = ({ isSidebarCollapsed }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(0)

  const handleCategoryChange = (val) => {
    setCategory(val);
    if(val === 0) {
      navigate('/');
    } else {
      navigate(`/feed/${val}`);
    }
    
  };

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapse-sidebar" : ""}`}>
      <div className="shortcut-links">
        {YTCategories.map((item) => (
          <div
            key={item.value}
            className={`flex-div side-link ${
              category === item.value ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(item.value)}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="separator-container">
        <div className="separator"></div>
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="flex-div side-link">
          <User strokeWidth={1.5} absoluteStrokeWidth size={24} />
          <p>User1</p>
        </div>

        <div className="flex-div side-link">
          <User strokeWidth={1.5} absoluteStrokeWidth size={24} />
          <p>User2</p>
        </div>

        <div className="flex-div side-link">
          <User strokeWidth={1.5} absoluteStrokeWidth size={24} />
          <p>User3</p>
        </div>

        <div className="flex-div side-link">
          <User strokeWidth={1.5} absoluteStrokeWidth size={24} />
          <p>User4</p>
        </div>

        <div className="flex-div side-link">
          <User strokeWidth={1.5} absoluteStrokeWidth size={20} />
          <p>User5</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar
