import React, { Component } from "react";
import * as api from "../Utils/api";
class SingleUser extends Component {
  state = {
    user: "",
    isLoading: true
  };

  componentDidMount() {
    api.getUserByUsername().then(({ users }) => {
      this.setState({ users, isLoading: false });
    });
  }

  render() {
    return <div>This is the user's page</div>;
  }
}

export default SingleUser;
