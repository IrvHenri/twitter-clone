import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import MainFeed from "./components/MainFeed";
import Widgets from "./components/Widgets";
import Modal from "./components/Modal";
import Bookmarks from "./sidebar-tabs/Bookmarks";
import Explore from "./sidebar-tabs/Explore";
import Lists from "./sidebar-tabs/Lists";
import Messages from "./sidebar-tabs/Messages";
import Notifications from "./sidebar-tabs/Notifications";
import More from "./sidebar-tabs/More";
import Profile from "./sidebar-tabs/Profile";
import ForYou from "./pages/explore-pages/ForYou";
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
        <Route exact path="/explore/tabs">
          <Explore />
        </Route>
        <Route path="/explore/tabs/forYou">
          <ForYou />
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
