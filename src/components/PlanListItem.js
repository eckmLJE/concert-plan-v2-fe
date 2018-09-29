import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/PlanListItem.css";

import { navToPlanId } from "../actions/navs";

class PlanListItem extends Component {
  pluralizeFriendLength = () => {
    const length = this.props.plan.attributes.users.length;
    return length === 1 ? `${length} friend` : `${length} friends`;
  };

  handleViewPlan = e => {
    e.preventDefault();
    this.props.navToPlanId(this.props.plan.id);
  };

  render() {
    return (
      <div className="plan-list-item">
        <div className="plan-list-item-name">
          {this.props.plan.attributes.name}
          {` (${this.pluralizeFriendLength()})`}
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
  navToPlanId: id => dispatch(navToPlanId(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PlanListItem);
