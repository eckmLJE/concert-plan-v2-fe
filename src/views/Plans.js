import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPlans } from "../actions/plans";

import PlansList from "../components/PlanList";

class Plans extends Component {
  componentDidMount = () => {
    this.props.fetchPlans();
  };

  render() {
    return (
      <div className="plans">{this.props.plans.length && <PlansList />}</div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans,
  loggedIn: state.plans.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
