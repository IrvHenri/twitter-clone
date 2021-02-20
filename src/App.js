import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainFeed />
      <Widgets />
    </div>
  );
}

export default App;
