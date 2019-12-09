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
