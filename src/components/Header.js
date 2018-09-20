import React, { Component } from "react";

import { connect } from "react-redux";

import { navToHome } from "../actions/navs";
import { navToFeed } from "../actions/navs";
import { navToProfile } from "../actions/navs";

class Header extends Component {
  state = {
    activeNav: "feed"
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
      case "feed":
        this.props.navToFeed();
        break;
      case "profile":
        this.props.navToProfile();
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
          <div name="feed" className={this.checkNav("feed")}>
            FEED
          </div>
          <div name="profile" className={this.checkNav("profile")}>
            PROFILE
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
  navToFeed: () => dispatch(navToFeed()),
  navToProfile: () => dispatch(navToProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
