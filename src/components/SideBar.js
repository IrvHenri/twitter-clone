import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";

function SideBar() {
  let iconStyling = {
    marginRight: ".5em ",
    fontSize: "2rem",
  };

  return (
    <div className="side-bar">
      <div className="twitter-logo">
        <TwitterIcon style={{ fill: "#fff", fontSize: "2rem" }} />
      </div>

      <a href="#" className="sidebar-link">
        <HomeIcon style={iconStyling} /> Home
      </a>
      <a href="#" className="sidebar-link">
        <WhatshotIcon style={iconStyling} />
        Explore
      </a>
      <a href="#" className="sidebar-link">
        <NotificationsNoneIcon style={iconStyling} />
        Notifications
      </a>
      <a href="#" className="sidebar-link">
        <MailOutlineIcon style={iconStyling} />
        Messages
      </a>
      <a href="#" className="sidebar-link">
        <BookmarkBorderIcon style={iconStyling} />
        Bookmarks
      </a>
      <a href="#" className="sidebar-link">
        <ListAltIcon style={iconStyling} />
        Lists
      </a>
      <a href="#" className="sidebar-link">
        <PersonOutlineIcon style={iconStyling} />
        Profile
      </a>
      <a href="#" className="sidebar-link">
        <MoreHorizIcon style={iconStyling} />
        More
      </a>
      <button className="side-bar-btn">Tweet</button>

      <a href="#" className="profile-widget-btn">
        <Avatar
          alt="stock photo"
          src="/imgs/sampleAvi.jpg"
          style={{ marginRight: ".3em" }}
        />
        <div>
          <p className="user-handle">
            User_Handle <LockIcon style={{ fontSize: "20px" }} />
          </p>
          <p>Username</p>
        </div>
      </a>
    </div>
  );
}

export default SideBar;
