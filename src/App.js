import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";
import Widgets from "./components/Widgets";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <SideBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <MainFeed />
      <Widgets />
    </div>
  );
}

export default App;
