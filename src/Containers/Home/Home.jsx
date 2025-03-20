import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../Constants/constants";
import "./Home.css";

const Home = ({ isSidebarCollapsed }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const responseData = await response.json();
      setData(responseData?.items);
    } catch (err) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div
      className={`container card-container 
    ${isSidebarCollapsed ? "expanded-container" : ""} 
    ${isLoading ? "full-height" : ""}`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.map((item, index) => {
            return <VideoCard key={item?.id ? item?.id : index} video={item} />;
          })}
        </>
      )}
    </div>
  );
};

export default Home;
