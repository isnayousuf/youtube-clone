import React, { useEffect, useState } from 'react';
import VideoCard from "../../Components/VideoCard";
import { API_KEY } from "../../constants";
import "./Feed.css";

const Feed = ({category}) => {


  const [data, setData] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;

  const fetchVideos = async () => {
    const response = await fetch(API_URL);
     const responseData = await response.json();
     setData(responseData?.items);
  }

  useEffect(() => {
    fetchVideos();
  }, [category]);

  return (
    <div className="feed card-container">
      {data?.map((item, index) => {
        return <VideoCard key={item?.id ? item?.id : index} video={item} />;
      })}
    </div>
  );
}

export default Feed
