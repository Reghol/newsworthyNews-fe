import React, { Component } from "react";
import * as api from "../Utils/api";
import "./Css styles/Votes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default class Votes extends Component {
  state = { voteChange: 0, err: null };

  handleClick = num => {
    const id = this.props.id;
    const { type } = this.props;

    api.patchVotesById(id, num, type);
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + num, err: null };
    });
  };
  render() {
    const { voteChange } = this.state;
    return (
      <>
        <p className="votes-counter">
          Total Votes: {this.props.votes + voteChange}
        </p>
        <div className="button-wrapper">
          <button
            className="button-global-style"
            disabled={voteChange === 1}
            size="sm"
            color="primary"
            onClick={() => {
              this.handleClick(1);
            }}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            Yay
          </button>

          <button
            className="button-global-style"
            disabled={voteChange === -1}
            size="sm"
            color="secondary"
            onClick={() => {
              this.handleClick(-1);
            }}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            Nay
          </button>
        </div>
      </>
    );
  }
}
