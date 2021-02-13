import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainFeed />
    </div>
  );
}

export default App;
