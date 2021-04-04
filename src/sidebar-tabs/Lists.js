import React from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import "../style/lists.css";
const Lists = () => {
  return (
    <main className="main-feed lists-container">
      <nav>
        <div className="nav-row">
          <h1>Lists</h1>
          <PostAddIcon style={{ fontSize: "1.5rem", fill: "#50b7f5" }} />
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
      <section className="discover-lists">
        <h1>Discover new Lists</h1>
        <div className="discover-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "1.2rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Writing</p>
          <button>Follow</button>
        </div>

        <div className="discover-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "1.2rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Writing</p>
          <button>Follow</button>
        </div>
        <div className="discover-item">
          <div className="list-square">
            <PostAddIcon
              style={{
                fontSize: "1.2rem",
                fill: "#50b7f5",
                background: "inherit",
              }}
            />
          </div>
          <p>Writing</p>
          <button>Follow</button>
        </div>
      </section>
      <section className="your-lists"></section>
    </main>
  );
};

export default Lists;
