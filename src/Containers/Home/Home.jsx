import React, { useEffect, useState } from "react";
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../Constants/constants";
import "./Home.css";

const Home = ({ isSidebarCollapsed }) => {
  const [data, setData] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
  const fetchVideos = async () => {
    const response = await fetch(API_URL);
    const responseData = await response.json();
    setData(responseData?.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div
      className={`container card-container ${
        isSidebarCollapsed ? "expanded-container" : ""
      }`}
    >
      {data?.map((item, index) => {
        return <VideoCard key={item?.id ? item?.id : index} video={item} />;
      })}
    </div>
  );
}

export default Home;
