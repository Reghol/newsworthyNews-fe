import React from "react";
import "./Css styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-wrapper">
      <h4>author: {comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-date">
        {new Date(comment.created_at).toLocaleString()}
      </p>
    </div>
  );
};

export default CommentCard;
