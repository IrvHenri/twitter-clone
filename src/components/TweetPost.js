import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TweetImg from "./TweetImg";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

function TweetPost({ tweet }) {
  return (
    <div className="tweet-post-container">
      <Avatar
        alt="stock photo"
        src="/imgs/sampleAvi.jpg"
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
        <p className="tweet-message">{tweet.tweet}</p>
        {tweet.imageUrl ? <TweetImg imageUrl={tweet.imageUrl} /> : null}

        <div className="tweet-post-toolbar">
          <ChatBubbleOutlineOutlinedIcon color="blue" />
          <RepeatOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <PublishOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default TweetPost;
