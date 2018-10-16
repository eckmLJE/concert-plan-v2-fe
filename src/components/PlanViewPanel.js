import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import JoinPlanButton from "./JoinPlanButton";
import LeavePlanButton from "./LeavePlanButton";

import PlanCommentList from "../containers/PlanCommentList";
import CommentAddNew from "./CommentAddNew";

class PlanViewPanel extends Component {
  checkPlanStarter = () => {
    const creatorId = this.props.currentPlan.attributes["creator-id"];
    return creatorId === this.props.currentUser.id.toString() ? (
      "You"
    ) : (
      <span className="plan-user">
        {
          this.props.currentPlan.attributes.users.find(
            user => user.id.toString() === creatorId
          ).name
        }
      </span>
    );
  };

  checkPlanUsers = () => {
    const currentUserId = this.props.currentUser.id;
    return this.props.currentPlan.attributes.users.some(
      user => user.id.toString() === currentUserId
    );
  };

  userIsNotStarter = id => {
    const creatorId = this.props.currentPlan.attributes["creator-id"];
    return id !== creatorId;
  };

  render() {
    return (
      <div className="plan-item-container">
        <div className="plan-item">
          <div className="plan-item-details">
            <h3 style={{ display: "inline-block" }}>
              {this.props.currentPlan.attributes.name}
            </h3>

            <p>
              {moment(this.props.currentPlan.attributes.datetime).format(
                "MMMM Do YYYY, h:mm a"
              )}
            </p>
            <p>{this.props.currentPlan.attributes.venue}</p>
          </div>
          <div className="plan-user-details">
            <div className="plan-starter">
              {this.checkPlanStarter()} started this plan.
            </div>
            {this.props.currentUser && this.checkPlanUsers() ? (
              <LeavePlanButton plan={this.props.currentPlan} />
            ) : (
              <JoinPlanButton plan={this.props.currentPlan} />
            )}
            <div className="plan-users">
              <h4>Signed on friends:</h4>
              {this.props.currentPlan.attributes.users.map(
                user =>
                  this.userIsNotStarter(user.id.toString()) ? (
                    <div className="plan-user signed-on" key={user.id}>
                      {user.name}
                    </div>
                  ) : null
              )}
            </div>
          </div>
        </div>
        {this.props.currentPlan.attributes.comments.length ? (
          <PlanCommentList
            comments={this.props.currentPlan.attributes.comments}
          />
        ) : null}
        <CommentAddNew
          userId={this.props.currentUser.id}
          planId={this.props.currentPlan.id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  plans: state.plans.plans,
  currentPlan: state.plans.currentPlan
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentPlan: plan => dispatch(setCurrentPlan(plan))
// });

export default connect(
  mapStateToProps,
  null
)(PlanViewPanel);
