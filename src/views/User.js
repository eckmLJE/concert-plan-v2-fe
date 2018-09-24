import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions/user";

class User extends Component {
  state = { email: "", password: "" };

  handleInput = e => {
    const property = e.target.getAttribute("name");
    const change = e.target.value;
    this.setState({
      [property]: change
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const userData = this.state;
    this.props.authenticateUser(userData);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="user">
        {this.props.loggedIn ? (
          <div
            style={{ color: "rgb(207, 12, 126)" }}
            className="la-ball-clip-rotate"
          >
            <div />
          </div>
        ) : (
          <div className="login">
            <input
              name="email"
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <button onClick={this.handleLogin}>Log In</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: userData => dispatch(authenticateUser(userData))
  // navToHome: () => dispatch(navToHome())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
