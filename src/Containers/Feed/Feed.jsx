import React from 'react';
import { Link } from "react-router-dom";
import VideImage from "../../assets/afternoon-icon.svg";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed" >
      <Link to={`video/20/4521`} className="card">
        <img src={VideImage} alt="video thumbnail" />
        <h2>Vide Title</h2>
        <h3>Channel name</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
    </div>
  );
}

export default Feed
