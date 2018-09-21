import React, { Component } from "react";

import { connect } from "react-redux";

import { navToHome } from "../actions/navs";
import { navToConcerts } from "../actions/navs";
import { navToPlans } from "../actions/navs";

class Header extends Component {
  state = {
    activeNav: "home"
  };

  componentDidMount = () => {
    const nav = this.props.location.slice(1);
    nav
      ? this.setState({ activeNav: nav })
      : this.setState({ activeNav: "home" });
  };

  checkNav = name => {
    return this.state.activeNav === name
      ? "navItem navActive"
      : "navItem navInactive";
  };

  handleNav = e => {
    const nav = e.target.getAttribute("name");
    this.setState({
      activeNav: nav
    });
    switch (nav) {
      case "home":
        this.props.navToHome();
        break;
      case "concerts":
        this.props.navToConcerts();
        break;
      case "plans":
        this.props.navToPlans();
        break;
      default:
        console.log("no nav");
    }
  };

  render() {
    return (
      <div className="header">
        <div className="nav" onClick={this.handleNav}>
          <div name="home" className={this.checkNav("home")}>
            HOME
          </div>
          <div name="concerts" className={this.checkNav("concerts")}>
            CONCERTS
          </div>
          <div name="plans" className={this.checkNav("plans")}>
            PLANS
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeNav: state.navs.activeNav,
  location: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(navToHome()),
  navToConcerts: () => dispatch(navToConcerts()),
  navToPlans: () => dispatch(navToPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
