import React from "react";

const TweetImg = ({ imageUrl }) => {
  return (
    <div className="tweet-img-container">
      <img src={imageUrl} alt=" posted url" className="tweet-img" />
    </div>
  );
};

export default TweetImg;
