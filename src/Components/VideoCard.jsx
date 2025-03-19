import moment from "moment";
import React from 'react';
import { Link } from "react-router-dom";
import "../Containers/Feed/Feed.css";
import { viewCountConverter } from "../utils";

const VideoCard = ({video}) => {
  return (
    <Link
      to={`video/${video?.snippet?.categoryId}/${video?.id}`}
      className="card"
    >
      <img src={video?.snippet?.thumbnails?.medium?.url} alt="video thumbnail" />
      <h2 className="video-title">{video?.snippet?.title}</h2>
      <p className="channel-title">{video?.snippet?.channelTitle}</p>
      <p>
        {viewCountConverter(video?.statistics?.viewCount)} &bull;{" "}
        {moment(video?.snippet?.publishedAt).fromNow()}
      </p>
    </Link>
 
  );
}

export default VideoCard
