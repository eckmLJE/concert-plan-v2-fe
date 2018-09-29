import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import StartPlanButton from "../components/StartPlanButton";
import ViewPlanButton from "../components/ViewPlanButton";

class PlanButtonSwitcher extends Component {
  checkConcertPlan = () => {
    const concertPlan = this.props.plans.find(
      plan => plan.attributes.tmid === this.props.concert.id
    );
    return concertPlan ? concertPlan.id : false;
  };

  planButtonSwitch = () => {
    const concertPlan = this.checkConcertPlan();
    return concertPlan ? (
      <ViewPlanButton planId={concertPlan} key={this.props.concert.tmid} />
    ) : (
      <StartPlanButton
        concert={this.props.concert}
        imgUrl={this.props.imgUrl}
        key={this.props.concert.tmid}
      />
    );
  };

  render() {
    return <Fragment>{this.planButtonSwitch()}</Fragment>;
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  null
)(PlanButtonSwitcher);
