import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import JoinPlanButton from "./JoinPlanButton";
import LeavePlanButton from "./LeavePlanButton";

class PlanViewItem extends Component {
  checkPlanStarter = () => {
    const creatorId = this.props.plan.attributes["creator-id"];
    return creatorId === this.props.currentUser.id.toString() ? (
      "You"
    ) : (
      <span className="plan-user">
        {
          this.props.plan.attributes.users.find(
            user => user.id.toString() === creatorId
          ).name
        }
      </span>
    );
  };

  checkPlanUsers = () => {
    const currentUserId = this.props.currentUser.id;
    return this.props.plan.attributes.users.some(
      user => user.id.toString() === currentUserId
    );
  };

  userIsNotStarter = id => {
    const creatorId = this.props.plan.attributes["creator-id"];
    return id !== creatorId;
  };

  render() {
    return (
      <div className="plan-item">
        <div className="plan-item-details">
          <h3 style={{ display: "inline-block" }}>
            {this.props.plan.attributes.name}
          </h3>

          <p>
            {moment(this.props.plan.attributes.datetime).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </p>
          <p>{this.props.plan.attributes.venue}</p>
        </div>
        <div className="plan-user-details">
          <div className="plan-starter">
            {this.checkPlanStarter()} started this plan.
          </div>
          {this.props.currentUser && this.checkPlanUsers() ? (
            <LeavePlanButton plan={this.props.plan} />
          ) : (
            <JoinPlanButton plan={this.props.plan} />
          )}
          <div className="plan-users">
            <h4>Signed on friends:</h4>
            {this.props.plan.attributes.users.map(
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
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  null
)(PlanViewItem);
