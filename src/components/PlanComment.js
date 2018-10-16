import React from "react";

import moment from "moment";

const PlanComment = props => (
  <div className="plan-comment-card">
    <p>
      <span>{props.comment.user_name}</span> at{" "}
      {moment(props.comment.created_at).format("MMMM Do YYYY, h:mm:ss a")}
    </p>
    <h4>{props.comment.content}</h4>
  </div>
);

export default PlanComment;
