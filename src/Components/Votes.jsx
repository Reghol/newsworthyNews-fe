import React, { Component } from "react";
import * as api from "../Utils/api";

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
      <div>
        <p>Votes: {this.props.votes + voteChange}</p>

        <button
          className="button-global-style"
          disabled={voteChange === 1}
          size="sm"
          color="primary"
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Concur
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
          Condemn
        </button>
      </div>
    );
  }
}
