import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TweetPost from "./TweetPost";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
function TweetForm() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweets, setTweets] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTweets((prevTweets) => [...prevTweets, tweetMessage]);
    console.log(tweets);
    setTweetMessage("");
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
              autoComplete="off"
              placeholder="What's happening?"
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
            />

            <div className="tweet-form-toolbar">
              <input
                type="text"
                name="tweetMessage"
                autoComplete="off"
                placeholder="Enter image URL"
                value={tweetMessage}
                onChange={(e) => setTweetMessage(e.target.value)}
              />

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
