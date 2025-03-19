import React from 'react';
import ProfileIcon from "../assets/profile-icon.webp";

const UserProfile = ({handleProfileClick}) => {
  return (
    <div className="user-profile-icon" onClick={handleProfileClick}>
      <img src={ProfileIcon} alt="user-profile-image" />
    </div>
  );
}

export default UserProfile
