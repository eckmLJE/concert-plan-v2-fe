import React, { Component } from "react";
import { connect } from "react-redux";

import LoginPanel from "../components/LoginPanel";
import UserPanel from "../components/UserPanel";

class User extends Component {
  render() {
    return (
      <div className="user">
        {!this.props.loggedIn && <LoginPanel />}
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
