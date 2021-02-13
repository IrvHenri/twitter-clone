import React from "react";
import Avatar from "@material-ui/core/Avatar";

function TweetForm() {
  return (
    <div className="tweet-form-container">
      <a href="#" className="home-link">
        Home
      </a>

      <form>
        <Avatar
          alt="stock photo"
          src="/img/stock-photo.jpg"
          style={{
            margin: ".5em",
          }}
        />
        <input type="text" placeholder="What's happening?"></input>
      </form>
      <div className="tweet-form-toolbar">
        <div>1,2,3,4 </div>
        <button className="tweet-form-btn">Tweet</button>
      </div>
    </div>
  );
}

export default TweetForm;
