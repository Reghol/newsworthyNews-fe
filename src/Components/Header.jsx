import React, { Component } from "react";
import "./Css styles/HeaderContainer.css";

class Header extends Component {
  state = {
    userName: null
  };
  render() {
    return (
      <React.Fragment>
        <div className="headerContainer">
          <h2>NC NEWS</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
