import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Widgets = () => {
  return (
    <div className="widgets-container">
      <div className="widgets-input">
        <SearchOutlinedIcon className="widgets-search-icon" color="blue" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="twitter-embed-container">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed
          tweetId={"1345021162959503360"}
          className="widgets"
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          theme="dark"
          options={{ height: 400 }}
          noScrollbar
          noFooter
          className="widgets"
        />
      </div>
    </div>
  );
};

export default Widgets;
