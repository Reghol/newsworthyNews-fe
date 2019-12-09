import React, { Component } from "react";
import "./Css styles/Sidebar.css";
import * as api from "../Utils/api";
import { Link } from "@reach/router";

class Sidebar extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount = () => {
    api.getAllTopics().then(({ topics }) => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <div>
          <h3 className="topics-header">Choose Topic</h3>
        </div>
        <div className="topics-wrapper">
          <Link className="topic-link" to="/articles">
            all articles
          </Link>
          {topics.map(topic => {
            return (
              <Link
                className="topic-link"
                to={`/topic/${topic.slug}`}
                key={topic.slug}
              >
                {topic.slug}
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
