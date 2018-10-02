import React from "react";
import { connect } from "react-redux";

import { removePlanUser } from "../actions/plans";

const LeavePlanButton = props => {
  return (
    <div className="leave-plan">
      <button onClick={() => props.removePlanUser(props.plan.id)}>
        Leave Plan
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removePlanUser: planId => dispatch(removePlanUser(planId))
});

export default connect(
  null,
  mapDispatchToProps
)(LeavePlanButton);
