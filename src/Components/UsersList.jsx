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
        <div className="">
          {users.map(user => {
            return (
              <Link
                key={`/users/${user.username}`}
                style={{ textDecoration: "none" }}
                to={`/users/${user.username}`}
              >
                <main className="users-card" key={user.username}>
                  <h3 className="users-name">
                    {user.name} - <i className="users-name">{user.username}</i>
                  </h3>

                  <img
                    className="users-image"
                    src={user.avatar_url}
                    alt={`${user.username} pict`}
                    height="42"
                    width="42"
                  />
                </main>
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}
