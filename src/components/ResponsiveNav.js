import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { navToHome } from "../actions/navs";
import { navToConcerts } from "../actions/navs";
import { navToPlans } from "../actions/navs";
import { navToUser } from "../actions/navs";

import { navTo } from "../actions/navs";

class MainNav extends Component {
  state = { hamActive: false };

  checkNav = name => {
    return this.props.activeNav === name
      ? "navItem navActive"
      : "navItem navInactive";
  };

  switchHam = () => {
    this.setState({
      hamActive: !this.state.hamActive
    });
  };

  handleNav = e => {
    const nav = e.target.getAttribute("name");
    console.log(nav);
    if (nav || nav === "") {
      this.props.navTo(nav);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="nav" onClick={this.handleNav}>
          <div name="" className={this.checkNav("")}>
            HOME
          </div>
          <div name="concerts" className={this.checkNav("concerts")}>
            CONCERTS
          </div>
          <div name="plans" className={this.checkNav("plans")}>
            PLANS
          </div>
          <div name="profile" className={this.checkNav("profile")}>
            {this.props.loggedIn ? "PROFILE" : "LOG IN"}
          </div>
        </div>
        <div className="nav-mobile">
          <div className="hamburger" onClick={this.switchHam}>
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
          </div>
          {this.state.hamActive ? (
            <div className="nav-mobile-container" onClick={this.handleNav}>
              <div className="nav-mobile-menu" onClick={this.switchHam}>
                <div className="nav-mobile-item" name="home">
                  HOME
                </div>
                <div className="nav-mobile-item" name="concerts">
                  CONCERTS
                </div>
                <div className="nav-mobile-item" name="plans">
                  PLANS
                </div>
                <div className="nav-mobile-item" name="profile">
                  {this.props.loggedIn ? "PROFILE" : "LOG IN"}
                </div>
              </div>
              <div
                className="nav-mobile-x"
                onClick={() =>
                  this.setState({ hamActive: !this.state.hamActive })
                }
              >
                X
              </div>
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activeNav: state.navs.activeNav,
  location: state.router.location.pathname,
  loggedIn: state.user.loggedIn,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  navTo: nav => dispatch(navTo(nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
