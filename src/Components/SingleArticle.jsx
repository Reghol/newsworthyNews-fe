import React, { Component } from "react";
import * as api from "../Utils/api";

class SingleArticle extends Component {
  state = {
    isLoading: true,
    article: {},
    isVisible: false,
    comments: []
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

  render() {
    console.log(this.state.comments);
    const { article, isLoading, comments, isVisible } = this.state;

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
          <h2>{article.author}</h2>
        </div>
        <div className="votes-wrapper">
          <p>Votes Up and Down</p>
        </div>
        <div className="article-body">
          <p>{article.body}</p>
        </div>
        <div className="votes-wrapper">{}</div>
      </div>
    );
  }
}

export default SingleArticle;
