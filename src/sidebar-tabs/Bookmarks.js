import React, { useContext } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { FormContext } from "../FormContext";
import TweetPost from "../components/TweetPost";
const Bookmarks = () => {
  const { tweets } = useContext(FormContext);
  const tweetFeed = tweets.map((tweet, index) => (
    <TweetPost
      key={index}
      tweetMessage={tweet.tweetMessage}
      imageUrl={tweet.imageUrl}
    />
  ));
  return (
    <main className="main-feed">
      <nav>
        <div className="nav-row">
          <h1>Bookmarks</h1>
          <MoreHorizIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
        </div>
        <div className="nav-tabs"></div>
      </nav>
      {tweetFeed}
    </main>
  );
};

export default Bookmarks;
