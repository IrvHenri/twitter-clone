import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Widgets = () => {
  return (
    <div className="widgets-container">
      <div className="widgets-searchbar">
        <SearchOutlinedIcon className="widgets-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="twitter-embed-container">
        <h3>What's Happening</h3>
        <TwitterTweetEmbed
          tweetId={"1345021162959503360"}
          className="widgets"
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          theme="dark"
          options={{ height: 375 }}
          noScrollbar
          noFooter
          className="widgets"
        />
      </div>
      <div className="twitter-legal">
        <small>Terms of Service</small>
        <small>Privacy Policy</small>
        <small>Cookie Policy</small>
        <small>Ads Info</small>
        <small>More...</small>
        <small>2021 &copy Twitter-clone, Inc.</small>
      </div>
    </div>
  );
};

export default Widgets;
