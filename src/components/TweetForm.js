import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TweetPost from "./TweetPost";

function TweetForm() {
  const [tweetPost, setTweetPost] = useState({
    tweetMessage: "",
    imageUrl: "",
  });
  const [tweets, setTweets] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTweetPost((prevTweetPost) => ({ ...prevTweetPost, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTweets((prevTweets) => [...prevTweets, tweetPost]);
    setTweetPost({
      tweetMessage: "",
      imageUrl: "",
    });
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
              value={tweetPost.tweetMessage}
              required
              onChange={handleChange}
            />

            <div className="tweet-form-toolbar">
              <input
                type="text"
                name="imageUrl"
                autoComplete="off"
                placeholder="Enter image URL"
                value={tweetPost.imageUrl}
                onChange={handleChange}
              />

              <button
                disabled={!tweetPost.tweetMessage}
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
