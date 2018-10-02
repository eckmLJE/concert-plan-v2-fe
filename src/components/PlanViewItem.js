import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PlanViewPanel from "./PlanViewPanel";
import { setCurrentPlan } from "../actions/plans";

class PlanViewItem extends Component {
  componentDidMount = () => {
    const currentPlan = this.findPlanFromParams();
    this.props.setCurrentPlan(currentPlan);
  };

  findPlanFromParams = () => {
    const planId = this.props.planId;
    return this.props.plans.find(plan => plan.id === planId);
  };

  

  render() {
    return (
      <Fragment>{this.props.currentPlan ? <PlanViewPanel /> : null}</Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  plans: state.plans.plans,
  currentPlan: state.plans.currentPlan
});

const mapDispatchToProps = dispatch => ({
  setCurrentPlan: plan => dispatch(setCurrentPlan(plan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanViewItem);
