import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Plans.css";
import "../css/Buttons.css";

import { fetchPlans } from "../actions/plans";

import PlansList from "../containers/PlanList";
import Spinner from "../components/Spinner";

class Plans extends Component {
  componentDidMount = () => {
    this.props.fetchPlans();
  };

  render() {
    return (
      <div className="plans">
        {this.props.loggedIn ? null : <h2>Log in to make and view Plans.</h2>}
        {!!this.props.loggedIn && !this.props.plans.length ? <Spinner /> : null}
        {!!this.props.plans.length ? <PlansList /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
