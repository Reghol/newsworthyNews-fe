import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ArticleCard from "./ArticleCard";
import * as api from "../Utils/api";
import ErrorMessage from "./ErrorMessage";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    username: null,
    err: null
  };

  componentDidMount() {
    const { username } = this.props;
    this.setState({ username });
    this.fetchArticles();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by, order } = this.state;
    if (this.props !== prevProps) {
      this.fetchArticles();
    }
    if (
      prevState.page !== page ||
      prevState.sort_by !== sort_by ||
      prevState.order !== order
    ) {
      this.fetchArticles();
    }
  };

  changeSortBy = sort_by => {
    this.setState({ sort_by: sort_by });
  };

  changeOrder = order => {
    this.setState({ order: order });
  };

  fetchArticles = () => {
    const { topic, limit, sort, username } = this.props;
    let { sort_by, order } = this.state;
    if (sort) {
      sort_by = sort;
    }
    api
      .getAllArticles(topic, sort_by, limit, order)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
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
    const { articles, err, isLoading } = this.state;
    if (err) return <ErrorMessage err={err} />;
    if (isLoading) return <p>loading...</p>;
    return (
      <div className="articlesListMainLayout">
        <h1> Articles</h1>
        <SearchBar
          articles={articles}
          changeSortBy={this.changeSortBy}
          changeOrder={this.changeOrder}
        ></SearchBar>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
