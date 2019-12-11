import React from "react";
import "./Css styles/CommentCard.css";
import Votes from "./Votes";
import DeleteComment from "./DeleteComment";

const CommentCard = props => {
  const { comment, username } = props;
  return (
    <div className="comment-wrapper">
      <h4>author: {comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
      {username === comment.author ? (
        <DeleteComment
          comment_id={comment.comment_id}
          deleteComment={props.deleteComment}
        ></DeleteComment>
      ) : null}
      <p className="comment-date">
        {new Date(comment.created_at).toLocaleString()}
      </p>
      <Votes
        type="comments"
        id={comment.comment_id}
        votes={comment.votes}
        username={username}
      />
    </div>
  );
};

export default CommentCard;
