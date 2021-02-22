import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TweetPost from "./TweetPost";

function TweetForm() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweets, setTweets] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTweets((prevTweets) => [
      ...prevTweets,
      { tweet: tweetMessage, imageUrl: imageUrl },
    ]);
    setTweetMessage("");
    setImageUrl("");
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
              autoComplete="off"
              placeholder="What's happening?"
              value={tweetMessage}
              required
              onChange={(e) => setTweetMessage(e.target.value)}
            />

            <div className="tweet-form-toolbar">
              <input
                type="text"
                name="imageUrl"
                autoComplete="off"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />

              <button
                disabled={!tweetMessage}
                className="tweet-form-btn btn"
                type="submit"
              >
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
