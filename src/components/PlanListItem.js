import React, { Component } from "react";
import { connect } from "react-redux";

import { navToPlanId } from "../actions/navs";
import { setCurrentPlan } from "../actions/plans"

class PlanListItem extends Component {
  pluralizeFriendLength = () => {
    const length = this.props.plan.attributes.users.length;
    return length === 1 ? `${length} friend` : `${length} friends`;
  };

  handleViewPlan = e => {
    e.preventDefault();
    const planId = this.props.plan.id
    this.props.setCurrentPlan(planId)
    this.props.navToPlanId(planId);
  };

  render() {
    return (
      <div className="plan-list-item">
        <div className="plan-list-item-info">
          <div className="plan-list-item-name">
            {this.props.plan.attributes.name}
          </div>
          <div className="plan-list-item-friends">
            {` (${this.pluralizeFriendLength()})`}
          </div>
        </div>
        <div className="plan-list-item-button">
          <button onClick={this.handleViewPlan}>View Plan</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   plans: state.plans.plans,
//   currentUser: state.user.currentUser
// });

const mapDispatchToProps = dispatch => ({
  navToPlanId: id => dispatch(navToPlanId(id)),
  setCurrentPlan: id => dispatch(setCurrentPlan(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PlanListItem);
