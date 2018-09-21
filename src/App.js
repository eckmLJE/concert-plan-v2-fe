import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";

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
        <Footer />
      </div>
    );
  }
}

export default App;
