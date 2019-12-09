import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ArticleCard from "./ArticleCard";
import * as api from "../Utils/api";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc"
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate = prevProps => {
    if (this.props !== prevProps) {
      this.fetchArticles();
    }
  };

  fetchArticles = () => {
    const { topic, username, limit, sort } = this.props;
    let { sort_by, order } = this.state;
    if (sort) {
      sort_by = sort;
    }
    api
      .getAllArticles(topic, username, sort_by, limit, order)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      });
  };
  render() {
    const { articles } = this.state;

    return (
      <div className="articlesListMainLayout">
        <h1> Articles</h1>
        <SearchBar></SearchBar>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
