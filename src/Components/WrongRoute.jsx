import React from "react";
import { Link } from "@reach/router";

const WrongRoute = () => {
  return (
    <div>
      <h3>Route not found</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default WrongRoute;
