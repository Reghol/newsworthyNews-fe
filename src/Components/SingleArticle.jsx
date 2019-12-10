import React, { Component } from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";
import "./Css styles/SingleArticle.css";

class SingleArticle extends Component {
  state = {
    isLoading: true,
    article: {},
    isVisible: false,
    comments: [],
    username: null
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    Promise.all([
      api.getArticleById(article_id),
      api.getCommentsByArticleId(article_id)
    ]).then(([{ article }, { comments }]) => {
      this.setState({ article, comments, isLoading: false });
    });
  };

  handleClickShowHide = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  addNewComment = comment => {
    this.setState(currState => {
      return { comments: [comment, ...currState.comments] };
    });
  };

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id);
    const newState = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: newState });
  };

  render() {
    const { article, isLoading, comments, username } = this.state;

    if (isLoading)
      return (
        <>
          <p>Loading...</p>
        </>
      );
    return (
      <div className="article-wrapper">
        <div className="article-header">
          <h1>{article.title}</h1>
          <h2> by {article.author}</h2>
          <div className="articles-body">
            <p>{article.body}</p>
          </div>
        </div>
        <div className="votes-wrapper">{}</div>
        <div className="comments-wrapper">
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                deleteComment={this.deleteComment}
              ></CommentCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SingleArticle;
