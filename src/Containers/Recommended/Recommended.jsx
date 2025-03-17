import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { viewCountConverter } from "../../utils";
import "./Recommended.css";

const Recommended = ({ categoryId }) => {
  const [data, setData] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchRecommendedVideos = async() => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;
    const res = await fetch(url);
    const recommendedVideos = await res.json();     
    console.log("rrecommededVides", recommendedVideos);

    if(recommendedVideos?.items?.length > 0 ) {
      setData(recommendedVideos.items);
    }
    
  }

  useEffect(() => {

    fetchRecommendedVideos();
  }, [categoryId])



  return (
    <div className="recommended">
      {data?.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="recommended-item-list" key={`${item?.id ? item?.id :  index}`}>
          <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
          <div className="video-info">
            <h4>{item?.snippet?.title}</h4>
            <p>{item?.snippet?.channelTitle}</p>
            <p>{viewCountConverter(item?.statistics?.viewCount)} Views </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended
