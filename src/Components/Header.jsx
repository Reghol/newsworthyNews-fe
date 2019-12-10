import React from "react";
import Modal from "react-modal";
import { Link } from "@reach/router";
// import "./Css styles/Header.css";
import Login from "./Login";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      modalIsOpen: true
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
            <h2>NC NEWS</h2>
          </div>
        </div>

        <div className="navbar">
          <Link to="/" className="home">
            <i className="fas fa-2x fa-home"></i>
          </Link>
          {!username && (
            <i
              onClick={this.clickLogin}
              className="login fas fa-2x fa-sign-in-alt"
            ></i>
          )}
          {username && (
            <p className="logout" onClick={this.clickLogout}>
              {username} logout
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
