import React, { Component } from "react";

import PlanComment from "../components/PlanComment";

class PlanCommentList extends Component {
  render() {
    return (
      <div className="plan-comment-list">
        {this.props.comments.map(comment => (
          <PlanComment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default PlanCommentList;
