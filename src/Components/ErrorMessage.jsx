import React from "react";

const ErrorMessage = ({ err }) => {
  return (
    <div>
      <h3>Error</h3>
      <p>{err.status}</p>
      <p>{err.msg}</p>
    </div>
  );
};

export default ErrorMessage;
