import React, { useContext, useEffect } from "react";
import db from "../firebase";
import "../style/mainfeed.css";
import { FormContext } from "../FormContext";
import TweetForm from "./TweetForm";
import TweetPost from "./TweetPost";

function MainFeed() {
  const { setTweets, tweets } = useContext(FormContext);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setTweets(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const tweetFeed = tweets.map((tweet, index) => (
    <TweetPost
      key={index}
      tweetMessage={tweet.tweetMessage}
      imageUrl={tweet.imageUrl}
    />
  ));

  return (
    <div className="main-feed">
      <TweetForm />
      <div className="tweet-feed">{tweetFeed}</div>
    </div>
  );
}

export default MainFeed;
