import React, { useState } from "react";
import "../style/tweetPost.css";
import Avatar from "@material-ui/core/Avatar";
import TweetImg from "./TweetImg";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

function TweetPost({ tweetMessage, imageUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRetweet, setIsRetweet] = useState(false);
  return (
    <div className="tweet-post-container">
      <Avatar
        alt="stock photo"
        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        className="tweet-avatar"
      />
      <div className="tweet-post-content">
        <div className="tweet-post-title">
          <p>
            UserName123
            <VerifiedUserIcon className={"tweet-verified-badge"} />
          </p>
          <span className="tweet-post-handle">@username</span>
        </div>
        <p className="tweet-message">{tweetMessage}</p>
        {imageUrl ? <TweetImg imageUrl={imageUrl} /> : null}

        <div className="tweet-post-toolbar">
          <ChatBubbleOutlineOutlinedIcon className="post-action-button" />
          <RepeatOutlinedIcon
            onClick={() => setIsRetweet(!isRetweet)}
            style={{ fill: `${isRetweet ? "#19BF63" : ""}` }}
            className="post-action-button"
          />
          <FavoriteBorderOutlinedIcon
            onClick={() => setIsFavorite(!isFavorite)}
            style={{ fill: `${isFavorite ? "red" : ""}` }}
            className="post-action-button"
          />
          <PublishOutlinedIcon className="post-action-button" p={5} />
        </div>
      </div>
    </div>
  );
}

export default TweetPost;
