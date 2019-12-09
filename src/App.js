import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import WrongRoute from "./Components/WrongRoute";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import "./App.css";
class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header></Header>
        </div>
        <div className="mainBody">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>

          <div className="main">
            <Router>
              <WrongRoute default></WrongRoute>
              <ArticlesList path="/" />
              <ArticlesList path="/articles" />
              <ArticlesList path="/topic/:topic" />

              <SingleArticle path="/articles/:article_id" />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
