import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";

function SideBar() {
  let iconStyling = {
    marginRight: ".5em ",
    fontSize: "2rem",
    backgroundColor: "transparent",
    color: "none",
  };

  return (
    <div className="side-bar">
      <div className="twitter-logo">
        <TwitterIcon style={{ fill: "#fff", fontSize: "2rem" }} />
      </div>

      <button className="sidebar-link">
        <HomeIcon style={iconStyling} /> Home
      </button>
      <button className="sidebar-link">
        <SearchOutlinedIcon style={iconStyling} />
        Explore
      </button>
      <button className="sidebar-link">
        <NotificationsNoneIcon style={iconStyling} />
        Notifications
      </button>
      <button className="sidebar-link">
        <MailOutlineIcon style={iconStyling} />
        Messages
      </button>
      <button className="sidebar-link">
        <BookmarkBorderIcon style={iconStyling} />
        Bookmarks
      </button>
      <button className="sidebar-link">
        <ListAltIcon style={iconStyling} />
        Lists
      </button>
      <button className="sidebar-link">
        <PersonOutlineIcon style={iconStyling} />
        Profile
      </button>
      <button className="sidebar-link">
        <MoreHorizIcon style={iconStyling} />
        More
      </button>
      <button className="side-bar-btn btn">Tweet</button>

      <button className="profile-widget-btn btn">
        <Avatar
          alt="stock photo"
          src="/imgs/sampleAvi.jpg"
          style={{ marginRight: ".3em", background: "transparent" }}
        />
        <div>
          <p className="user-handle">
            User_Handle <LockIcon style={{ fontSize: "20px" }} />
          </p>
          <p>@Username</p>
        </div>
      </button>
    </div>
  );
}

export default SideBar;
