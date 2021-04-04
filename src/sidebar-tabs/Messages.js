import React from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import "../style/messages.css";

const Messages = () => {
  return (
    <main className="main-feed messages-feed">
      <nav>
        <div className="nav-row">
          <h1>Messages</h1>
          <div>
            <SettingsOutlinedIcon
              style={{ fontSize: "1.5rem", fill: "#50b7f5" }}
            />
            <MailOutlineIcon
              style={{ fontSize: "1.5rem", fill: "#50b7f5", marginLeft: "1em" }}
            />
          </div>
        </div>
        <div className="widgets-searchbar messages-searchbar">
          <SearchOutlinedIcon className="widgets-search-icon" />
          <input placeholder="Search for people and groups" type="text" />
        </div>
      </nav>

      <section>
        <div className="sample-post">
          <Avatar
            alt="stock photo"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            style={{ marginRight: ".3em", background: "transparent" }}
          />
          <div>
            <div className="user-details">
              <p>
                User_Handle <LockIcon style={{ fontSize: "20px" }} />
              </p>
              <p className="user-handler">@Username</p>
            </div>

            <p className="user-handler"> You shared a tweet.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Messages;
