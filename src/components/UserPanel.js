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
        <p>
          <strong>Username:</strong> {props.currentUser.name}
        </p>
        <p>
          <strong>Email:</strong> {props.currentUser.email}
        </p>
        <br />
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
