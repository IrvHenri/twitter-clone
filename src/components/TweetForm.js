import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TweetPost from "./TweetPost";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
function TweetForm() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweets, setTweets] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTweets((prevTweets) => [...prevTweets, tweetMessage]);
    console.log(tweets);
  }

  const tweetFeed = tweets.map((tweet, index) => (
    <TweetPost key={index} tweet={tweet} />
  ));

  return (
    <div>
      <div className="tweet-form-container">
        <button className="home-link">Home</button>
        <div className="form-content">
          <Avatar
            alt="stock photo"
            src="/imgs/sampleAvi.jpg"
            className="form-avatar"
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="tweetMessage"
              placeholder="What's happening?"
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
            />
            <div className="tweet-form-toolbar">
              <div className="tweet-form-toolbar-media">
                <PermMediaOutlinedIcon className="toolbar-media-btn" />
                <GifOutlinedIcon className="toolbar-media-btn" />

                <SentimentSatisfiedOutlinedIcon className="toolbar-media-btn" />
              </div>
              <button className="tweet-form-btn btn" type="submit">
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="tweet-feed">{tweetFeed}</div>
    </div>
  );
}

export default TweetForm;
