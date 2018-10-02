import React from "react";
import { connect } from "react-redux";

import { removePlanUser } from "../actions/plans";

const LeavePlanButton = () => {
  return (
    <div className="leave-plan">
      <button onClick={() => console.log("not yet functional")}>
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
