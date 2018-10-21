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
