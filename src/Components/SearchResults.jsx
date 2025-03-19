import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../Containers/Constants/constants";
import VideoCard from "./VideoCard";

const SearchResults = ({ isSidebarCollapsed }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetchVideos();
    }
  }, [searchQuery]);

  const fetchVideos = async () => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${encodeURIComponent(
      searchQuery
    )}&key=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className={`video-card-container ${isSidebarCollapsed ? 'expand-container' : 'collapse-container'}`}>
      <div className="card-container">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
