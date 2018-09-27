import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./views/Home";
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";
import User from "./views/User";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { loadUser } from "./actions/user";

class App extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };



  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/concerts" component={Concerts} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/profile" component={User} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
