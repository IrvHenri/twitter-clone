import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import { ModalContext } from "../ModalContext";
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

function SideBar(props) {
  const { toggleModal } = useContext(ModalContext);
  let iconStyling = {
    marginRight: ".5em ",
    fontSize: "2rem",
    backgroundColor: "transparent",
  };

  return (
    <div className="side-bar">
      <div className="twitter-logo">
        <TwitterIcon
          style={{ fill: "#fff", fontSize: "2rem" }}
          className="twitter-icon"
        />
      </div>

      <Link className="sidebar-link" to="/">
        <HomeIcon style={iconStyling} /> Home
      </Link>
      <Link className="sidebar-link" to="/explore">
        <SearchOutlinedIcon style={iconStyling} />
        Explore
      </Link>
      <Link className="sidebar-link" to="/notifications">
        <NotificationsNoneIcon style={iconStyling} />
        Notifications
      </Link>
      <Link className="sidebar-link" to="/messages">
        <MailOutlineIcon style={iconStyling} />
        Messages
      </Link>
      <Link className="sidebar-link" to="/bookmarks">
        <BookmarkBorderIcon style={iconStyling} />
        Bookmarks
      </Link>
      <Link className="sidebar-link" to="/lists">
        <ListAltIcon style={iconStyling} />
        Lists
      </Link>
      <Link className="sidebar-link" to="/profile">
        <PersonOutlineIcon style={iconStyling} />
        Profile
      </Link>
      <Link className="sidebar-link" to="/more">
        <MoreHorizIcon style={iconStyling} />
        More
      </Link>
      <button onClick={toggleModal} className="side-bar-btn btn">
        Tweet
      </button>

      <button className="profile-widget-btn btn">
        <Avatar
          alt="stock photo"
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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
