import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import FontAwesome from "react-fontawesome";


const InactiveSession = (props) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem
        id="signupAnchor"
        className="pointer"
        onClick={props.displaySignupClicked}
      >
        <span className="nav-link">
          <FontAwesome name="user-plus" /> Signup
        </span>
      </NavItem>
      <NavItem
        id="loginAnchor"
        className="pointer"
        onClick={props.displayLoginClicked}
      >
        <span className="nav-link">
          <FontAwesome name="sign-in" /> Login
        </span>
      </NavItem>
    </Nav>
  );
}
InactiveSession.propTypes = {
  displaySignupClicked: PropTypes.func,
  displayLoginClicked: PropTypes.func
};

const ActiveSession = (props) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem id="homeAnchor" className="pointer">
        <span className="nav-link">
          <FontAwesome name="home" /> Home
        </span>
      </NavItem>
      <NavItem id="logoutAnchor" className="pointer" onClick={props.logout}>
        <span className="nav-link">
          <FontAwesome name="sign-out" /> Logout
        </span>
      </NavItem>
    </Nav>
  );
}
ActiveSession.propTypes = {
  logout: PropTypes.bool
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      defaultExpanded: true,
      collapseOnSelect: true
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    //const isLoggedIn = this.props.isLoggedIn;
    const isLoggedIn = this.props.loggedIn
    let loginControl;

    if (isLoggedIn) {
      loginControl = (
        <ActiveSession
          className="d-flex justify-content-end"
          logout={this.props.toggleLogin}
        />
      );
    } else {
      loginControl = (
        <InactiveSession
          className="d-flex justify-content-end"
          displayLoginClicked={this.props.displayLoginClicked}
          displaySignupClicked={this.props.displaySignupClicked}
        />
      );
    }

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <img id="whiteSheep" src="../img/sheep.png" alt="whitesheep" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/">
              <NavItem className="pointer">
                <span className="nav-link">Updates</span>
              </NavItem>
            </Link>
            <Link to="/projects">
              <NavItem className="pointer">
                <span className="nav-link">Projects</span>
              </NavItem>
            </Link>
            <Link to="/docs">
              <NavItem className="pointer">
                <span className="nav-link">Documentation</span>
              </NavItem>
            </Link>
            <Link to="/links">
              <NavItem className="pointer">
                <span className="nav-link">Links</span>
              </NavItem>
            </Link>
            <Link to="/contact">
              <NavItem className="pointer">
                <span className="nav-link">Contact</span>
              </NavItem>
            </Link>
          </Nav>
          {loginControl}
        </Collapse>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  toggleLogin: PropTypes.func,
  displayLoginClicked: PropTypes.func,
  displaySignupClicked: PropTypes.func
};

const mapStateToProps = (state) => {
  const { loggedIn } = state.loggedIn;
  return { loggedIn };
}

export default connect(mapStateToProps)(Navbar)
