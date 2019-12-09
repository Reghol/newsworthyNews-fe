import React from "react";
import { Link } from "@reach/router";
import "./Css styles/ArticleCard.css";
const ArticleCard = ({ article }) => {
  return (
    <Link
      className="article-card"
      to={`/articles/${article.article_id}`}
      key={article.article_id}
    >
      <div className="article-topic">
        <p>{article.topic}</p>
      </div>

      <div className="article-details">
        <div className="article-title">
          <h4>{article.title}</h4>
        </div>
        <p>Author: {article.author}</p>

        <div className="article-stats">
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <p>{new Date(article.created_at).toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
