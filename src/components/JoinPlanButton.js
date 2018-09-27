import React, { Component } from "react";

class JoinPlanButton extends Component {
  handleJoinPlan = e => {
    e.preventDefault();
    console.log(this.props.plan);
  };

  render() {
    return (
      <div className="join-plan">
        <button onClick={this.handleJoinPlan}>Join Plan</button>
      </div>
    );
  }
}

export default JoinPlanButton;
