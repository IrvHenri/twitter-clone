import React from "react";
import "../style/notifications.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <main className="main-feed">
      <nav>
        <div className="nav-row">
          <h1>Notifications</h1>
          <SettingsOutlinedIcon
            style={{ fontSize: "1.5rem", fill: "#50b7f5" }}
            className="explore-gear"
          />
        </div>
        <div className="nav-tabs">
          <Link to="/explore/tabs/forYou">All</Link>
          <Link to="/explore/tabs/covid19">Mentions</Link>
        </div>
      </nav>
    </main>
  );
};

export default Notifications;
