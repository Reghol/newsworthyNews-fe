import React, { Component } from "react";
import * as api from "../Utils/api";

export default class Votes extends Component {
  state = { voteChange: 0 };

  handleClick = num => {
    const id = this.props.id;
    const { type } = this.props;

    api.patchVotesById(id, num, type);
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + num };
    });
  };
  render() {
    const { voteChange } = this.state;
    return (
      <div>
        <p>Votes: {this.props.votes + voteChange}</p>

        <button
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