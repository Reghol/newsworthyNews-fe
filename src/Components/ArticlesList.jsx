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
    err: null,
    page: 1,
    limit: 10,
    maxPage: Infinity
  };

  componentDidMount() {
    const { username } = this.props;
    const { page, limit } = this.state;
    this.setState({ username });
    this.fetchArticles(page, limit);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by, order, limit } = this.state;
    if (this.props !== prevProps) {
      this.fetchArticles();
    }
    if (
      prevState.page !== page ||
      prevState.sort_by !== sort_by ||
      prevState.order !== order ||
      prevState.limit !== limit
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
  changePage = button => {
    this.setState(currentState => {
      return { page: currentState.page + button };
    });
  };
  fetchArticles = () => {
    const { topic } = this.props;
    let { sort_by, order, page, limit } = this.state;

    api
      .getAllArticles(topic, sort_by, page, order, limit)
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
    const { articles, err, isLoading, page, maxPage } = this.state;
    if (err) return <ErrorMessage err={err} />;
    if (isLoading) return <p>loading...</p>;
    return (
      <div className="articlesListMainLayout">
        <h1>
          Articles page {page} out of {maxPage}
        </h1>
        <button
          className="button-global-style"
          disabled={articles.length < 1}
          onClick={() => this.changePage(1)}
        >
          Next Page
        </button>
        <button
          className="button-global-style"
          disabled={page === 1}
          onClick={() => this.changePage(-1)}
        >
          Previous page
        </button>

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
