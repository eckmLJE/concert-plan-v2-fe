import React from "react";
import { connect } from "react-redux";

import { logOutUser } from "../actions/user";

const UserPanel = props => {
  return (
    <div className="user-panel">
      <div className="log-out">
        <button onClick={props.logOutUser}>Log Out</button>
      </div>
      <div className="user-data">
        <div className="user-data-item">Username: {props.currentUser.name}</div>
        <div className="user-data-item">Email: {props.currentUser.email}</div>
        <div className="user-data-item">Number of Plans: {props.currentUser.plans.length}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
