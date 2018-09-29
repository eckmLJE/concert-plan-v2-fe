import React from "react";
import { connect } from "react-redux";

import PlanListItem from "./PlanListItem";

const PlanList = props => {
  return (
    <div className="plan-list">
      {props.plans.map(plan => (
        <PlanListItem key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  plans: state.plans.plans
});

//   const mapDispatchToProps = dispatch => ({
//     fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(PlanList);
