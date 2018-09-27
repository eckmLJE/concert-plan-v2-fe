import React, { Component } from "react";
import { connect } from "react-redux";

import { postPlan } from "../actions/plans";
import { navToPlanId } from "../actions/navs";

class PlanButton extends Component {
  handleStartPlan = e => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    if (name === "make-plan") {
      const concert = this.props.concert;

      const planData = {
        name: concert.name,
        tmid: concert.id,
        datetime: concert.dates.start.dateTime,
        venue: concert._embedded.venues[0].name,
        imgUrl: this.props.imgUrl
      };
      this.props.postPlan(planData);
    } else {
      this.props.navToPlanId(name);
    }
  };

  checkConcertPlan = () => {
    const concertPlan = this.props.plans.find(
      plan => plan.attributes.tmid === this.props.concert.id
    );
    return concertPlan ? concertPlan.id : false;
  };

  render() {
    const concertPlanId = this.checkConcertPlan();
    return (
      <div className="plan-button">
        {concertPlanId && !!this.props.plans.length ? (
          <div className="view-plan-button">
            <button name={concertPlanId} onClick={this.handleStartPlan}>
              View Plan
            </button>
          </div>
        ) : (
          <div className="make-plan-button">
            <button name="make-plan" onClick={this.handleStartPlan}>
              Start Plan
            </button>
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
  postPlan: planData => dispatch(postPlan(planData)),
  navToPlanId: id => dispatch(navToPlanId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanButton);
