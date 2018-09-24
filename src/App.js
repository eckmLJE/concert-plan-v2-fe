import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";
import User from "./views/User";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/profile" component={User} />
        <Footer />
      </div>
    );
  }
}

export default App;
