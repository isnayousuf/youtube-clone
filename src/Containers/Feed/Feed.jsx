import React, { useEffect, useState } from 'react';
import VideoCard from "../../Components/VideoCard";
import "./Feed.css";

const Feed = ({category, searchQuery}) => {


  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  // const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&${searchQuery}&key=${apiKey}`;
const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}${
  searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""
}&key=${apiKey}`;

  const fetchVideos = async () => {
    const response = await fetch(API_URL);
     const responseData = await response.json();
     setData(responseData?.items);
  }

  useEffect(() => {
    fetchVideos();
  }, [category, searchQuery]);

  return (
    <div className="feed card-container">
      {data?.map((item, index) => {
        return <VideoCard key={item?.id ? item?.id : index} video={item} />;
      })}
    </div>
  );
}

export default Feed
