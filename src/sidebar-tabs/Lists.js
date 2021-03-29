import React from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import "../style/lists.css";
const Lists = () => {
  return (
    <main className="main-feed">
      <nav>
        <div className="nav-row">
          <h1>Lists</h1>
          <PostAddIcon style={{ fontSize: "1.5rem", fill: "inherit" }} />
        </div>
      </nav>
      <h1>Pinned Lists</h1>
      <section className="pinned-lists">
        <div className="list-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "2.5rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>History</p>
        </div>
        <div className="list-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "2.5rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Science</p>
        </div>
        <div className="list-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "2.5rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Comedy</p>
        </div>
        <div className="list-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "2.5rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Arts</p>
        </div>
      </section>
      <section className="discover-lists"></section>
      <section className="your-lists"></section>
    </main>
  );
};

export default Lists;
