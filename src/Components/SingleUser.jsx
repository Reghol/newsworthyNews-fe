import React, { Component } from "react";
import * as api from "../Utils/api";
class SingleUser extends Component {
  state = {
    username: null,
    name: null,
    avatar: null,
    isLoading: true
  };

  componentDidMount() {
    const { username } = this.props;

    api.getUserByUsername(username).then(({ data }) => {
      const { username, name, avatar_url } = data.user;
      this.setState({ username, name, avatar_url, isLoading: false });
    });
  }

  render() {
    const { username, name, avatar_url, isLoading } = this.state;
    if (isLoading)
      return (
        <div>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    return (
      <div>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Avatar:</p>
        <img
          alt="bla bla bla"
          style={{ height: "50%", width: "50%" }}
          src={avatar_url}
        ></img>
        <div>Articles</div>
      </div>
    );
  }
}

export default SingleUser;
