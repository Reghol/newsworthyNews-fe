import React, { Component } from "react";
import * as api from "../Utils/api";
import ArticlesList from "./ArticlesList";
import "./Css styles/SingleUser.css";

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
      <>
        <div className="singleUser">
          <p>Username: {username}</p>
          <p>Name: {name}</p>
          <img className="picture" alt="bla bla bla" src={avatar_url}></img>
          <p>User Profile</p>
        </div>

        <ArticlesList author={username}></ArticlesList>
      </>
    );
  }
}

export default SingleUser;
