import React, { Component } from "react";
import * as api from "../Utils/api";

export default class PostComment extends Component {
  state = { username: "", body: "" };

  handleChange = event => {
    this.setState({ username: this.props.username, body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, addNewComment } = this.props;
    api
      .postCommentByArticleId(article_id, this.state)

      .then(({ comment }) => {
        addNewComment(comment);

        this.setState({ body: "" });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg
          }
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="mytext"
          required
          type="text"
          value={this.state.body}
          placeholder="write your comment here..."
          onChange={this.handleChange}
        />

        <button className="button-global-style">Submit comment</button>
      </form>
    );
  }
}
