import React from "react";
import TweetForm from "./TweetForm";
import TweetFeed from "./TweetFeed";
import TweetPost from "./TweetPost";

function MainFeed() {
  return (
    <div className="main-feed">
      <TweetForm />
      <TweetFeed />
    </div>
  );
}

export default MainFeed;
