import React, { Component } from "react";

import "../css/PlanView.css";

import { connect } from "react-redux";

import { navTo } from "../actions/navs";


import PlanViewItem from "../components/PlanViewItem";

class PlanView extends Component {
  componentDidMount = () => {
  };

  render() {
    return (
      <div className="plan-view">
        <div className="plans-return" onClick={() => this.props.navTo("plans")}>
          <i />
          <div style={{ display: "inline-block", paddingLeft: "5px" }}>
            BACK TO PLANS
          </div>
        </div>
        {this.props.plans.length ? (
          <PlanViewItem planId={this.props.match.params.id} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans,
  currentPlan: state.plans.currentPlan
});

const mapDispatchToProps = dispatch => ({
  navTo: nav => dispatch(navTo(nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanView);
