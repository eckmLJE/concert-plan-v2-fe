import React, { Component } from "react";
import moment from "moment";

class PlanItem extends Component {
  render() {
    return (
      <div className="plan-item">
        <div className="plan-label">PLAN</div>
        <img src={this.props.plan.attributes["img-url"]} alt="" />
        <div className="concert-item-details">
          <h3>{this.props.plan.attributes.name}</h3>
          <p>
            {moment(this.props.plan.attributes.dateTime).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </p>
          <p>{this.props.plan.attributes.venue}</p>
        </div>
      </div>
    );
  }
}

export default PlanItem;
