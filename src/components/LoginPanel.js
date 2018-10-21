import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions/user";

class LoginPanel extends Component {
  state = { email: "", password: "" };

  handleInput = e => {
    const property = e.target.getAttribute("name");
    const change = e.target.value.toLowerCase();
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
      <div className="login">
        <div>Please Log In</div>
        <br />
        <form>
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authenticateUser: userData => dispatch(authenticateUser(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPanel);
