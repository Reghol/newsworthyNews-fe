import React, { Component } from "react";
import * as api from "../Utils/api";
import CommentCard from "./CommentCard";
import "./Css styles/SingleArticle.css";
import PostComment from "./PostComment";
import ErrorMessage from "./ErrorMessage";
import Votes from "./Votes";

class SingleArticle extends Component {
  state = {
    isLoading: true,
    article: {},
    isVisible: false,
    comments: [],
    username: null,
    err: null
  };
  componentDidMount = () => {
    const { username } = this.props;
    this.setState({ username, err: null });
    this.fetchAll();
  };

  fetchAll() {
    const { article_id } = this.props;
    Promise.all([
      api.getArticleById(article_id),
      api.getCommentsByArticleId(article_id)
    ])
      .then(([{ article }, { comments }]) => {
        this.setState({ article, comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg
          }
        });
      });
  }
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

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      const { username } = this.props;
      this.setState({ username, isLoggedIn: true });
    }
  };

  render() {
    const {
      article,
      isLoading,
      comments,
      username,
      err,
      isVisible
    } = this.state;
    if (err) return <ErrorMessage err={err} />;
    if (isLoading)
      return (
        <>
          <p>Loading...</p>
        </>
      );
    return (
      <div className="article-wrapper">
        <div className="article-header">
          <div className="article-picture">
            <div className=".img-fluid">
              {article.topic === "cooking" && (
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/5/51/Food-pot-kitchen-cooking_%2823957429659%29.jpg"
                  }
                  alt="boiling pot"
                />
              )}
              {article.topic === "football" && (
                <img
                  style={{ border: "solid", height: "100%", width: "100%" }}
                  src={
                    "http://www.ultras-tifo.net/images/stories/2019/4/Lechia-Legia/Lechia-Legia-7.jpg"
                  }
                  alt="Lechia Gdansk Ultras"
                />
              )}
              {article.topic === "coding" && (
                <img
                  style={{ border: "solid", height: "100%", width: "100%" }}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Matrix_coding.jpg"
                  }
                  alt="Coding is not like in the Matrix"
                />
              )}
            </div>
          </div>
          <h1>{article.title}</h1>
          <h2> by {article.author}</h2>
          <div className="articles-body">
            <p>{article.body}</p>
          </div>
          <Votes
            type="articles"
            id={article.article_id}
            votes={article.votes}
            username={username}
          />
        </div>

        <div className="post-commentWrapper">
          {username ? (
            <PostComment
              username={username}
              addNewComment={this.addNewComment}
              article_id={this.props.article_id}
            ></PostComment>
          ) : null}
        </div>

        <div className="comments-wrapper">
          <button
            className="button-global-style"
            onClick={this.handleClickShowHide}
          >
            {isVisible ? "Hide comments" : "Show comments"}
          </button>
          {isVisible
            ? comments.map(comment => {
                return (
                  <CommentCard
                    username={username}
                    key={comment.comment_id}
                    comment={comment}
                    deleteComment={this.deleteComment}
                    addNewComment={this.addNewComment}
                  ></CommentCard>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default SingleArticle;
