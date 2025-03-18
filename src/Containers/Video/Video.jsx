import React from 'react';
import { useParams } from "react-router-dom";
import VideoPlayer from "../../Components/VideoPlayer";
import Recommended from "../Recommended/Recommended";
import './Video.css';
const Video = ({isSidebarCollapsed}) => {

  const {videoId, categoryId} = useParams()
  return (
    <div className="play-container">
      <VideoPlayer
        videoId={videoId}
        categoryId={categoryId}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Video
