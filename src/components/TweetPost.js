import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import TweetImg from "./TweetImg";

function TweetPost() {
  return (
    <div className="tweet-post-container">
      <Avatar
        alt="stock photo"
        src={"./imgs/stock-photo"}
        style={{
          margin: ".5em",
        }}
      />
      <div className="tweet-post-content">
        <div className="tweet-post-title">
          <p>
            User Handle <LockIcon style={{ fontSize: "20px" }} />
          </p>
          <time>9m</time>
        </div>

        <p>
          text text text text
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        <TweetImg />
        <div>Tool bar section</div>
      </div>
    </div>
  );
}

export default TweetPost;
