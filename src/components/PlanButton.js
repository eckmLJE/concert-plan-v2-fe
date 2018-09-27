import React, { Component } from "react";
import { connect } from "react-redux";

import { postPlan } from "../actions/plans";

class PlanButton extends Component {
  handleStartPlan = e => {
    e.preventDefault();
    const concert = this.props.concert;
    const planData = {
      name: concert.name,
      tmid: concert.id,
      datetime: concert.dates.start.dateTime,
      venue: concert._embedded.venues[0]
    };
    this.props.postPlan(planData);
  };

  checkConcertPlan = () => {
    const concertPlan = this.props.plans.find(
      plan => plan.attributes.tmid === this.props.concert.id
    );
    console.log(concertPlan);
    return concertPlan ? concertPlan.id : false;
    // return this.props.plans.includes(plan => plan.tmid === this.props.concert.id)
  };

  render() {
    const concertPlanId = this.checkConcertPlan();
    return (
      <div className="plan-button">
        {concertPlanId ? (
          <div className="view-plan-button">
            <button onClick={this.handleStartPlan}>View Plan</button>
          </div>
        ) : (
          <div className="make-plan-button">
            <button onClick={this.handleStartPlan}>Start Plan</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans
});

const mapDispatchToProps = dispatch => ({
  postPlan: planData => dispatch(postPlan(planData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanButton);
