import React from "react";
import { Link } from "react-router-dom";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

import ForYou from "../pages/explore-pages/ForYou";

const ExploreHeader = () => {
  return (
    <div>
      <header className="explore-tools">
        <div className="widgets-searchbar ">
          <SearchOutlinedIcon className="widgets-search-icon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <SettingsOutlinedIcon
          style={{ fontSize: "1.5rem", fill: "#50b7f5" }}
          className="explore-gear"
        />
      </header>
      <nav className="explore-nav">
        <Link to="/explore/tabs/forYou">For You</Link>
        <Link to="/explore/tabs/covid19">Covid-19</Link>
        <Link to="/explore/tabs/trending">Trending</Link>
        <Link to="/explore/tabs/news">News</Link>
        <Link to="/explore/tabs/sports">Sports</Link>
        <Link to="/explore/tabs/entertainment">Entertainment</Link>
      </nav>

      <ForYou />
    </div>
  );
};

export default ExploreHeader;
