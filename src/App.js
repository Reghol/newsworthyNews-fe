import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import WrongRoute from "./Components/WrongRoute";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import "./App.css";
import UsersList from "./Components/UsersList";
class App extends Component {
  state = {
    username: null,
    users: []
  };

  loginUser = username => {
    this.setState({ username });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <div className="header">
          <Header loginUser={this.loginUser} username={username}></Header>
        </div>
        <div className="mainBody">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>

          <div className="main">
            <Router>
              <ArticlesList path="/" username={username} />
              <ArticlesList path="/articles" username={username} />
              <ArticlesList path="/topic/:topic" username={username} />

              <SingleArticle path="/articles/:article_id" username={username} />
              <UsersList path="/users" username={username} />
              <WrongRoute default></WrongRoute>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
