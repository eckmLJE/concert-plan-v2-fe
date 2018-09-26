import React, { Component } from "react";

class PlanItem extends Component {
  render() {
    return <div className="plan-item">{this.props.plan.attributes.name}</div>;
  }
}

export default PlanItem;
