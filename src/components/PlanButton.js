import React, { Component } from "react";
import { connect } from "react-redux";

import { postPlan } from "../actions/plans";

class PlanButton extends Component {
  handleStartPlan = e => {
    e.preventDefault();
    const planData = {
      name: this.props.concert.name,
      tmid: this.props.concert.id,
      datetime: this.props.concert.dates.start.dateTime
    };
    this.props.postPlan(planData);
  };

  render() {
    return (
      <div className="make-plan-button">
        <button onClick={this.handleStartPlan}>Start Plan</button>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
// });

const mapDispatchToProps = dispatch => ({
  postPlan: planData => dispatch(postPlan(planData))
});

export default connect(
  null,
  mapDispatchToProps
)(PlanButton);
