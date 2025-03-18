import { Ellipsis, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../Containers/Feed/Feed.css";
import { viewCountConverter } from "../utils";
const VideoPlayer = ({ }) => {

  const {videoId} = useParams();

  const [videoDetails, setVideoDetails] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null)
  const [videoComments, setVideoComments] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY;
  const UrlEndPoints = {VIDEOS : "videos", CHANNEL : "channels"};
  const baseUrl = `https://www.googleapis.com/youtube/v3`;
  const urlParts = `?part=snippet%2CcontentDetails%2Cstatistics`;

  const fetchVideoData = async () =>{
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;

    const response = await fetch(API_URL);
    const videoDetailsData = await response.json();    
  if (videoDetailsData?.items?.length > 0) {
    setVideoDetails(videoDetailsData.items[0]); 
  }
  }


  const fetchVideoComments = async () => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=70&videoId=${videoId}&key=${apiKey}`;
    const res = await fetch(url);
    const commentData = await res.json();

    if (commentData?.items?.length > 0) {
      setVideoComments(commentData?.items);
    }
  };


  const fetchChannelData = async() => {
     if (!videoDetails?.snippet?.channelId) return;
    const channelId = videoDetails.snippet.channelId;
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`;
     const response = await fetch(url);
     const channelData = await response.json();
     
     if (channelData?.items?.length > 0) {
       setChannelInfo(channelData?.items[0]);
     }
      fetchVideoComments();
  }

  useEffect(() => {
     fetchVideoData();
  }, [videoId])

  useEffect(() => {
     fetchChannelData();
  }, [videoDetails])


  
  return (
    <div className="play-video">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder={0}
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
        <div className="publisher flex-div">
          <img
            src={
              channelInfo ? channelInfo?.snippet?.thumbnails?.default?.url : ""
            }
            alt="publisher image"
          />

          <div className="publisher-info-container">
            <p>{videoDetails ? videoDetails?.snippet?.channelTitle : ""}</p>
            <span className="subscribers-info">
              {channelInfo
                ? viewCountConverter(channelInfo?.statistics?.subscriberCount)
                : ""}{" "}
              Subscribers
            </span>
          </div>
          <div className="cta-container flex-div">
            <button className="join-cta">Join</button>
            <button className="subscribe-cta">Subscribe</button>
          </div>
        </div>

        <div className="flex-div gap-8">
          <div className="like-container flex-div">
            <span>
              <ThumbsUp size={20} className="mr-8" />
              {videoDetails
                ? viewCountConverter(videoDetails?.statistics?.likeCount)
                : "10"}
            </span>
            <div className="vertical-separator" />
            <span>
              <ThumbsDown size={20} />
            </span>
          </div>

          <div className="like-container flex-div">
            <Share2 size={20} className="mr-8" /> Share
          </div>

          <div className="like-container flex-div">
            <Ellipsis size={20} />
          </div>
        </div>
      </div>

      <div className="subtitle">
        <span>
          {videoDetails?.snippet?.title
            ? viewCountConverter(videoDetails?.statistics?.viewCount)
            : "1K"}{" "}
          Views
        </span>
        <span className="ml-5">
          {videoDetails
            ? moment(videoDetails?.snippet?.publishedAt).fromNow()
            : ""}
        </span>
        <p className="video-desc">
          {videoDetails
            ? videoDetails?.snippet?.description.slice(0, 300)
            : "Video Description"}
        </p> 
        {/* TODO: IMPLEMENT SHOW MORE ON CLICKING MORE HERE */}
      </div>

      <div className="comments-container">
        <h3>
          {videoDetails
            ? viewCountConverter(videoDetails?.statistics?.commentCount)
            : ""} Comments
        </h3>

        {videoComments?.map((comment, index) => {
          return (
            <div className="comment" key={comment?.id ? comment.id : index}>
              <img
                src={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
                alt="user profile"
              />
              <div className="comment-info">
                <h3>
                  {
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorDisplayName
                  }
                  <span>
                    {videoComments
                      ? moment(
                          comment?.snippet?.topLevelComment?.snippet
                            ?.publishedAt
                        ).fromNow()
                      : ""}
                  </span>
                </h3>
                <p
                  className="comment-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      comment?.snippet?.topLevelComment?.snippet?.textDisplay,
                  }}
                ></p>

                <div className="flex-div comment-action">
                  <div className="flex-div">
                    <span>
                      <ThumbsUp size={18} style={{ marginRight: "5px" }} />
                    </span>
                    <span className="comment-likes">
                      {viewCountConverter(
                        comment?.snippet?.topLevelComment?.snippet?.likeCount
                      )}
                    </span>
                  </div>
                  <div>
                    <ThumbsDown size={18} style={{ marginRight: "5px" }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPlayer
