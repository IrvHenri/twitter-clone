import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";
import Widgets from "./components/Widgets";
import Modal from "./components/Modal";
import Bookmarks from "./pages/mainfeed/Bookmarks";
import Explore from "./pages/mainfeed/Explore";
import Lists from "./pages/mainfeed/Lists";
import Messages from "./pages/mainfeed/Messages";
import Notifications from "./pages/mainfeed/Notifications";
import More from "./pages/mainfeed/More";
import Profile from "./pages/mainfeed/Profile";

function App() {
  return (
    <div className="App">
      <Modal />
      <SideBar />
      <Switch>
        <Route exact path="/">
          <MainFeed />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/lists">
          <Lists />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>

      <Widgets />
    </div>
  );
}

export default App;
