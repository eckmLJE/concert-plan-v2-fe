import React, { Component } from "react";
import { connect } from "react-redux";

import { postComment } from "../actions/plans";

class CommentAddNew extends Component {
  state = { content: "" };

  handleCommentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    const comment = {
      plan_id: this.props.planId,
      user_id: this.props.userId,
      content: this.state.content
    };
    this.props.postComment(comment);
  };

  render() {
    return (
      <div className="add-plan-comment">
        <textarea
          onChange={this.handleCommentChange}
          name="comment"
          cols="50"
          rows="5"
          value={this.state.content}
        />
        <button onClick={this.handleCommentSubmit}>Add Comment</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: comment => dispatch(postComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(CommentAddNew);
