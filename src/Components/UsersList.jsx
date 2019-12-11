import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";
import "./Css styles/UsersList.css";

export default class UsersList extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllUsers().then(({ users }) => {
      this.setState({ users, isLoading: false });
    });
  }
  render() {
    const { users, isLoading } = this.state;
    if (isLoading)
      return (
        <div>
          <p>Loading...</p>
        </div>
      );

    return (
      <div className="">
        {users.map(user => {
          return (
            <main className="users-card" key={user.username}>
              <Link to={`/users/${user.username}`}>
                <h3 className="users-name">
                  {user.name} - <i>{user.username}</i>
                </h3>
              </Link>
              <img
                className="users-image"
                src={user.avatar_url}
                alt={`${user.username} pict`}
                height="42"
                width="42"
              />
            </main>
          );
        })}
      </div>
    );
  }
}
