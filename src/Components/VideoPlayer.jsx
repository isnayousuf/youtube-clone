import { CopyPlus, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import React from 'react';
import "../Containers/Feed/Feed.css";
import ChannelLogo from "../assets/afternoon-icon.svg";
const VideoPlayer = () => {
  return (
    <div className="play-video">
      <video src="" controls autoPlay muted />
      <h3>ABC</h3>
      <div className="play-video-info flex-div">
        <p>1231 &bull; 2 days ago</p>

        <div>
          <span>
            <ThumbsUp size={20} className="mr-8" /> 125
          </span>

          <span>
            <ThumbsDown size={20} className="mr-8" /> 125
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
          <p>Channel Name</p>
          <span>1million Subscribers</span>
        </div>
        <button className="subscribe-cta">Subscribe</button>
      </div>

      <div className="video-desc">
        <p>abc</p>
        <p>Subscribe channel to Watch more</p>
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
}

export default VideoPlayer
