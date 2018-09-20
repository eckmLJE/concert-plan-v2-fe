import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import Feed from "./views/Feed";
import Profile from "./views/Profile";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/profile" component={Profile} />
        <Footer />
      </div>
    );
  }
}

export default App;
