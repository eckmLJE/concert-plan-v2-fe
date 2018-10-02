import React from "react";
import { connect } from "react-redux";

import { removePlanUser } from "../actions/plans";

const LeavePlanButton = props => {
  return (
    <div className="leave-plan">
      {props.plan.attributes["creator-id"] !== props.currentUser.id ? (
        <button onClick={() => props.removePlanUser(props.plan.id)}>
          Leave Plan
        </button>
      ) : (
        <p>(plan creators cannot leave)</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  removePlanUser: planId => dispatch(removePlanUser(planId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeavePlanButton);
