import React from "react";
import * as api from "../Utils/api";
import "./Css styles/Login.css";
class Login extends React.Component {
  state = {
    username: "jessjelly",
    password: "password",
    err: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    api
      .getUserByUsername(username)
      .then(user => {
        if (password === "password") {
          this.props.loginUser(username);
        } else {
          this.setState({
            err: {
              msg: "incorrect password!"
            }
          });
        }
      })
      .catch(err => {
        this.setState({
          err: {
            status: 404,
            msg: "invalid username"
          }
        });
      });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { err } = this.state;
    return (
      <div className="login-container">
        <h3>Login</h3>
        <form className="login-container form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            <input
              className="login-container input"
              id="username"
              type="text"
              onChange={this.handleChange}
              placeholder="username"
              autoComplete="off"
              required
              value="jessjelly"
            />
          </label>
          <h4>Password</h4>
          <label htmlFor="password">
            <input
              className="login-container input"
              type="password"
              id="password"
              onChange={this.handleChange}
              placeholder="password"
              value="password"
              autoComplete="off"
            />
          </label>
          <button className="login-container button" type="submit">
            Login
          </button>
          {err && <p>{err.msg}</p>}
        </form>
      </div>
    );
  }
}

export default Login;
