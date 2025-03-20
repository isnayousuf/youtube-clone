import React from 'react';
import { useNavigate } from "react-router-dom";
import UserProfile from "../../Components/UserProfile";
import { User } from "../../Constants/constants";
import { RightSideOptions } from "../../Constants/data";

const RightSidebar = ({ isRightSidebarOpen, setIsRightSidebarOpen }) => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    setIsRightSidebarOpen(false);
    navigate("/page-not-found");
  };

  return (
    <div
      className={`right-sidebar ${isRightSidebarOpen ? "show-sidebar" : ""}`}
    >
      <div className="profile-details space-x">
        <UserProfile />
        <div className="user-details">
          <div>
            <p className="user-data">{User.name}</p>
            <p className="user-data">{User.email}</p>
          </div>
          <a href="" className="user-data channel-link">
            Create a channel
          </a>
        </div>
      </div>
      <hr className="separator my-10" />
      <div className="space-x right-links-container">
        {RightSideOptions.map((option, index) => {
          return (
            <div className="flex-div gap-8 side-link" onClick={handleLinkClick} key={option.value}>
              {option.icon}
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar
