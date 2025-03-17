import { CopyPlus, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import "../Containers/Feed/Feed.css";
import ChannelLogo from "../assets/afternoon-icon.svg";
import { viewCountConverter } from "../utils";
const VideoPlayer = ({ videoId, categoryId }) => {

  const [videoDetails, setVideoDetails] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;

  const fetchVideoData = async () =>{
    const response = await fetch(API_URL);
    const videoDetailsData = await response.json();
    console.log("videoDetailsData", videoDetailsData);
    
    setVideoDetails(videoDetailsData.items[0]);
  }

  useEffect(() => {
     fetchVideoData()
  }, [videoId])

  console.log("videoDetails", videoDetails);
  
  return (
    <div className="play-video">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}autocontrols=1`}
          title={videoDetails?.snippet?.title || "Video Player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <h3>
        {videoDetails?.snippet?.title
          ? videoDetails?.snippet?.title
          : "Video Title"}
      </h3>
      <div className="play-video-info flex-div">
        <p>
          {videoDetails?.snippet?.title
            ? viewCountConverter(videoDetails?.statistics?.viewCount)
            : "1K"}
          &bull;{" "}
          {videoDetails
            ? moment(videoDetails?.snippet?.publishedAt).fromNow()
            : ""}
        </p>

        <div>
          <span>
            <ThumbsUp size={20} className="mr-8" />{" "}
            {videoDetails
              ? viewCountConverter(videoDetails?.statistics?.likeCount)
              : "10"}
          </span>

          <span>
            <ThumbsDown size={20} className="mr-8" /> Dislike
          </span>

          <span>
            <Share2 size={20} className="mr-8" /> Share
          </span>

          <span>
            <CopyPlus size={20} className="mr-8" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher flex-div">
        <img src={ChannelLogo} alt="publisher image" />

        <div className="publisher-info-container">
          <p>{videoDetails ? videoDetails?.snippet?.channelTitle : ""}</p>
          <span>1million Subscribers</span>
        </div>
        <button className="subscribe-cta">Subscribe</button>
      </div>

      <div className="video-desc">
        <p>
          {videoDetails
            ? videoDetails?.snippet?.description.slice(0, 250)
            : "Video Description"}
        </p>
        <p>
          {videoDetails
            ? viewCountConverter(videoDetails?.statistics?.commentCount)
            : ""}
        </p>
        <h4>130 comments</h4>

        <div className="comment">
          <img src="" alt="user profile" />
          <div>
            <h3>
              USERNAME <span>1 day ago</span>
            </h3>
            <p>comment</p>

            <div className="flex-div comment-action">
              <ThumbsUp size={20} style={{ marginRight: "5px" }} />
              <span>233</span>
              <ThumbsDown size={20} style={{ marginRight: "5px" }} />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer
