import React, { Component } from "react";

import { connect } from "react-redux";

import { addPlanUser } from "../actions/plans";

class JoinPlanButton extends Component {
  handleJoinPlan = e => {
    e.preventDefault();
    this.props.addPlanUser(this.props.plan.id);
  };

  render() {
    return (
      <div className="join-plan">
        <button onClick={this.handleJoinPlan}>Join Plan</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPlanUser: planId => dispatch(addPlanUser(planId))
});

export default connect(
  null,
  mapDispatchToProps
)(JoinPlanButton);
