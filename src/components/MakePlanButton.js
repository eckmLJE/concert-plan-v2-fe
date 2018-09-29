import React, { Component } from "react";
import { connect } from "react-redux";

import { postPlan } from "../actions/plans";

class MakePlanButton extends Component {
  handleStartPlan = e => {
    e.preventDefault();
    const concert = this.props.concert;
    const planData = {
      name: concert.name,
      tmid: concert.id,
      datetime: concert.dates.start.dateTime,
      venue: concert._embedded.venues[0].name,
      imgUrl: this.props.imgUrl,
      creator_id: this.props.currentUser.id
    };
    this.props.postPlan(planData);
  };

  render() {
    return (
      <div className="plan-button make-plan-button">
        <button onClick={this.handleStartPlan}>Start Plan</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  postPlan: planData => dispatch(postPlan(planData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakePlanButton);
