import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";
import Widgets from "./components/Widgets";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <SideBar />
      <MainFeed />
      <Widgets />
    </div>
  );
}

export default App;
