import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
const Explore = () => {
  return (
    <main className="main-feed">
      <section className="explore-tools">
        <div className="widgets-searchbar">
          <SearchOutlinedIcon className="widgets-search-icon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <SettingsOutlinedIcon className="explore-gear" />
      </section>
    </main>
  );
};

export default Explore;
