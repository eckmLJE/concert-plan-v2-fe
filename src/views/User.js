import React, { Component } from "react";
import { connect } from "react-redux";

import "../css/User.css";

import LoginPanel from "../components/LoginPanel";
import UserPanel from "../components/UserPanel";

import Spinner from "../components/Spinner";

class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="user-card">
          <h3>LOGIN INSTRUCTIONS</h3>
          <p>
            Log in with any of these four users to see their friend group's
            plans in action:
          </p>
          <ul>
            <li>
              <strong>email:</strong> alex@example.com
              <br />
              <strong>password:</strong> alex
            </li>
            <li>
              <strong>email:</strong> conor@example.com
              <br />
              <strong>password:</strong> conor
            </li>
            <li>
              <strong>email:</strong> josh@example.com
              <br />
              <strong>password:</strong> josh
            </li>
            <li>
              <strong>email:</strong> lucas@example.com
              <br />
              <strong>password:</strong> lucas
            </li>
          </ul>
        </div>
        {!this.props.loggedIn &&
          !this.props.loadingAuthStatus && <LoginPanel />}
        {!!this.props.loadingAuthStatus && (
          <Spinner content="Loading User..." />
        )}

        {!!this.props.currentUser && <UserPanel />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  currentUser: state.user.currentUser,
  loadingUserStatus: state.user.loadingUserStatus,
  loadingAuthStatus: state.user.loadingAuthStatus
});

// const mapDispatchToProps = dispatch => ({
//   authenticateUser: userData => dispatch(authenticateUser(userData))
// });

export default connect(
  mapStateToProps,
  null
)(User);
