import React from "react";
import Modal from "react-modal";
import { Link } from "@reach/router";
import "./Css styles/Header.css";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserAstronaut,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black"
  }
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { username } = this.props;
    this.setState({ username });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  clickLogin = () => {
    this.setState({ modalIsOpen: true });
  };

  clickLogout = () => {
    this.setState({ username: null });
    this.props.loginUser(null);
  };

  loginUser = username => {
    this.setState({ username, modalIsOpen: false });
    this.props.loginUser(username);
  };

  render() {
    const { username } = this.state;
    return (
      <>
        <div className="headerContainer">
          <div>
            <h2 className="title">NC NEWSWORTHY NEWS</h2>
          </div>
        </div>

        <div className="navbar">
          <Link to="/" className="mainHeader">
            <FontAwesomeIcon icon={faHome} />
            Homepage
          </Link>
          <Link to="/users" className="usersHeader">
            <FontAwesomeIcon icon={faUserAstronaut} />
            <i className="e">Users</i>
          </Link>
          <p onClick={this.clickLogin} className="logout">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </p>
          {username && (
            <p className="logout" onClick={this.clickLogout}>
              {username} logout
              <FontAwesomeIcon icon={faSignOutAlt} />
            </p>
          )}
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
        >
          <Login loginUser={this.loginUser} />
        </Modal>
      </>
    );
  }
}

export default Header;
