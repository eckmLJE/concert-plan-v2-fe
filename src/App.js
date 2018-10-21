import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./views/Home";
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";
import PlanView from "./views/PlanView";
// import User from "./views/User";

import Header from "./views/Header";
import Footer from "./views/Footer";

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
          <Route path="/plans/:id" component={PlanView} />
          {/* <Route exact path="/profile" component={User} /> */}
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
