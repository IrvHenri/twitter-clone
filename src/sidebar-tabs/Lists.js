import React from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import "../style/lists.css";
const Lists = () => {
  return (
    <main className="main-feed">
      <nav>
        <div className="nav-row">
          <h1>Lists</h1>
          <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
        </div>
      </nav>
      <section className="pinned-lists">
        <div>
          <div>
            <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
          </div>
        </div>
        <div>
          <div>
            <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
          </div>
        </div>
        <div>
          <div>
            <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
          </div>
        </div>
        <div>
          <div>
            <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
          </div>
        </div>
      </section>
      <section className="discover-lists"></section>
      <section className="your-lists"></section>
    </main>
  );
};

export default Lists;
