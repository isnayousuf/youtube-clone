import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../constants";
import "./Feed.css";

const Feed = ({isSidebarCollapsed }) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("data", data);

      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [category]);

  return (
    <div
      className={`video-card-container ${
        isSidebarCollapsed ? "expand-container" : "collapse-container"
      }`}
    >
      <div className="card-container">
        {videos.length > 0 ? (
          videos.map((video) => <VideoCard key={video.id} video={video} />)
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
};
export default Feed;
