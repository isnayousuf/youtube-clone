import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../Constants/constants";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./Feed.css";

const Feed = ({isSidebarCollapsed }) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const [pageToken, setPageToken] = useState("");

  const fetchVideos = async (pageToken) => {
    let API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      if (pageToken) {
        API_URL  += `&pageToken=${pageToken}`;
      }
      setIsLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...data?.items]);
      setPageToken(data?.nextPageToken || "");
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [category]);

  useInfiniteScroll(() => {
    if(pageToken) {
      fetchVideos(pageToken);
    }
  })

  return (
    <div
      className={`video-card-container ${
        isSidebarCollapsed ? "expand-container" : "collapse-container"
      }
       ${isLoading ? "full-height" : ""}
      `}
    >
      <div className="card-container">
        {videos.length > 0 ? (
          videos.map((video, index) => <VideoCard key={`${video.id}-${index}`} video={video} />)
        ) : (
          <Loader />
        )}
      </div>
      <div id="loadMoreTrigger" style={{ height: "50px" }}></div>
    </div>
  );
};
export default Feed;
