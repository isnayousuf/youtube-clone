import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PrimaryYoutubeLinks, SecondaryYoutubeLinks } from "../../Constants/constants.js";
import { YTCategories } from "../../Constants/data.jsx";
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

    <div style={{ paddingTop: "30px",  display: `${isSidebarCollapsed ? 'none' : 'block'}`}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px'}}>
          {PrimaryYoutubeLinks.map((link, index) => {
            return (
              <a href={link.url} style={{ fontSize: "12px" }} key={index}>
                {link?.linkText}
              </a>
            );
          })}
        </div>
        <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px'}}>
          {SecondaryYoutubeLinks.map((link, index) => {
            return (
              <a href={link.url} style={{ fontSize: "12px" }} key={index}>
                {link?.linkText}
              </a>
            );
          })}
        </div>

        <p style={{ fontSize: "12px", marginTop: '20px' }}>© 2025 Isna Yousuf</p>
      </div>
    </div>
  );
};

export default Sidebar
