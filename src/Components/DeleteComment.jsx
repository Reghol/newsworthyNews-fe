import React from "react";

export default function DeleteComment({ comment_id, deleteComment }) {
  return (
    <button
      size="sm"
      color="secondary"
      value={comment_id}
      onClick={() => {
        deleteComment(comment_id);
      }}
    >
      Expunge comment
    </button>
  );
}
