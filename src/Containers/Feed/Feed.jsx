import moment from "moment";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { viewCountConverter } from "../../utils";
import "./Feed.css";

const Feed = ({category}) => {

  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${apiKey}`;

  const fetchVideos = async () => {
    const response = await fetch(API_URL);
     const responseData = await response.json();
     setData(responseData?.items);
  }

  useEffect(()=>{
    fetchVideos();
  }, [category])

  return (
    <div className="feed">
      {data?.map((item, index) => {
        return (
          <Link
            to={`video/${item?.snippet?.categoryId}/${item?.id}`}
            className="card"
          >
            <img
              src={item?.snippet?.thumbnails?.medium?.url}
              alt="video thumbnail"
            />
            <h2 className="video-title">{item?.snippet?.title}</h2>
            <p className="channel-title">{item?.snippet?.channelTitle}</p>
            <p>
              {viewCountConverter(item?.statistics?.viewCount)} &bull;{" "}
              {moment(item?.snippet?.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
      
    </div>
  );
}

export default Feed
