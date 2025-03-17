import React from 'react';
import VideoPlayer from "../../Components/VideoPlayer";
import Recommended from "../Recommended/Recommended";
import './Video.css';
const Video = () => {
  return (
    <div className="play-container">
      <VideoPlayer />
      <Recommended />
    </div>
  );
}

export default Video
