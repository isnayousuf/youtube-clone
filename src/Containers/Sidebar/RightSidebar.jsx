import React from 'react';
import UserProfile from "../../Components/UserProfile";
import { User } from "../Constants/constants";

const RightSidebar = ({ isRightSidebarOpen }) => {
  
  return (
    <div
      className={`right-sidebar ${isRightSidebarOpen ? "show-sidebar" : ""}`}
    >
      <div className="profile-details ">
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
    </div>
  );
};

export default RightSidebar
