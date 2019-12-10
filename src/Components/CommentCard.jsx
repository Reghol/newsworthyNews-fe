import React from "react";
import "./Css styles/CommentCard.css";
import Votes from "./Votes";

const CommentCard = ({ comment, username }) => {
  return (
    <div className="comment-wrapper">
      <h4>author: {comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-date">
        {new Date(comment.created_at).toLocaleString()}
      </p>
      <Votes
        type="comment"
        id={comment.comment_id}
        votes={comment.votes}
        username={username}
      />
    </div>
  );
};

export default CommentCard;
