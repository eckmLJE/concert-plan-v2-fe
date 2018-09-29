import React, { Component } from "react";
import { connect } from "react-redux";

import { navToPlanId } from "../actions/navs";

class ViewPlanButton extends Component {
  handleNavToPlan = e => {
    e.preventDefault();
    this.props.navToPlanId(this.props.planId);
  };

  render() {
    return (
      <div className="plan-button view-plan-button">
        <button onClick={this.handleNavToPlan}>View Plan</button>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
// });

const mapDispatchToProps = dispatch => ({
  navToPlanId: planId => dispatch(navToPlanId(planId))
});

export default connect(
  null,
  mapDispatchToProps
)(ViewPlanButton);
