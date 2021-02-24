import React, { useContext } from "react";
import { FormContext } from "../FormContext";
import Avatar from "@material-ui/core/Avatar";
import TweetPost from "./TweetPost";

function TweetForm() {
  const { tweets, handleSubmit, handleChange, tweetPost } = useContext(
    FormContext
  );

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
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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
