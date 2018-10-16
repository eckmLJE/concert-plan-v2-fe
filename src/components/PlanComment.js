import React from "react";

import moment from "moment";

const PlanComment = props => (
  <div className="plan-comment-card">
    <h4>{props.comment.content}</h4>
    <p>{props.comment.user_name}</p>
  </div>
);

export default PlanComment;
