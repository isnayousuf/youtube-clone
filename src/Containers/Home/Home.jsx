import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../Constants/constants";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./Home.css";

const Home = ({ isSidebarCollapsed }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const fetchVideos = async (nextPageToken) => {
   let API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${API_KEY}`;

    try {
      if (nextPageToken) {
        API_URL += `&pageToken=${nextPageToken}`;
      }
      setIsLoading(true);
      const response = await fetch(API_URL);
      const responseData = await response.json();
      setData((prevData) => [...prevData, ...responseData?.items]);
      setNextPageToken(responseData.nextPageToken || "");
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

   useInfiniteScroll(() => {
     if (nextPageToken) {
      fetchVideos(nextPageToken);
     }
   });

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
            return <VideoCard key={`${item?.id}-${index}`} video={item} />;
          })}
        </>
      )}
      <div id="loadMoreTrigger" style={{ height: "50px" }}></div>
    </div>
  );
};

export default Home;
