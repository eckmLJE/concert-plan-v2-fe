import React, { Component } from "react";

import "../css/PlanView.css";

import { connect } from "react-redux";

import PlanViewItem from "../components/PlanViewItem";

class PlanView extends Component {
  findPlanFromParams = () => {
    const planId = this.props.match.params.id;
    return this.props.plans.find(plan => plan.id === planId);
  };

  render() {
    return (
      <div className="plan-view">
        {!!this.props.plans.length && (
          <PlanViewItem plan={this.findPlanFromParams()} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans
});

//   const mapDispatchToProps = dispatch => ({
//     fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(PlanView);
