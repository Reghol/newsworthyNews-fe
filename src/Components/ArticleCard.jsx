import React from "react";
import { Link } from "@reach/router";
import "./Css styles/ArticleCard.css";
import Votes from "./Votes";
const ArticleCard = ({ article, username }) => {
  return (
    <div className="article-card">
      <div className="article-topic">
        <p>{article.topic}</p>
      </div>

      <div className="article-details">
        <div className="article-title">
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <h4>{article.title}</h4>
          </Link>
          <p>Author: {article.author}</p>
        </div>

        <div className="article-stats">
          <p>Comments: {article.comment_count}</p>
        </div>
        <p className="article-date">
          {new Date(article.created_at).toLocaleString()}
        </p>
        <Votes
          type="articles"
          id={article.article_id}
          votes={article.votes}
          username={username}
        />
      </div>

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
              style={{ height: "100%", width: "100%" }}
              src={
                "http://www.ultras-tifo.net/images/stories/2019/4/Lechia-Legia/Lechia-Legia-7.jpg"
              }
              alt="Lechia Gdansk Ultras"
            />
          )}
          {article.topic === "coding" && (
            <img
              style={{ height: "100%", width: "100%" }}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/2/2b/Matrix_coding.jpg"
              }
              alt="Coding is not like in the Matrix"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
