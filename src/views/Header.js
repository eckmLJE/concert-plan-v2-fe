import React, { Component } from "react";
import "../css/Header.css";

import { connect } from "react-redux";

import { setActiveNav } from "../actions/navs";

import ResponsiveNav from "../components/ResponsiveNav";

class Header extends Component {
  componentDidMount = () => {
    const nav = this.props.location.slice(1);
    nav ? this.props.setActiveNav(nav) : this.props.setActiveNav("home");
  };

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-title">CONCERTPLAN</div>
          <ResponsiveNav />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.router.location.pathname,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setActiveNav: nav => dispatch(setActiveNav(nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
