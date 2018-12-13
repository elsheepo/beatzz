import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

function InactiveSession(props) {
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

function ActiveSession(props) {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem id="homeAnchor" className="pointer" onClick={props.onClick}>
        <span className="nav-link">
          <FontAwesome name="home" /> Home
        </span>
      </NavItem>
      <NavItem id="logoutAnchor" className="pointer" onClick={props.onClick}>
        <span className="nav-link">
          <FontAwesome name="sign-out" /> Logout
        </span>
      </NavItem>
    </Nav>
  );
}
ActiveSession.propTypes = {
  onClick: PropTypes.bool
};

export default class NavBar extends Component {
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
    const isLoggedIn = this.props.isLoggedIn;
    let loginControl;

    if (isLoggedIn) {
      loginControl = (
        <ActiveSession
          className="d-flex justify-content-end"
          onClick={this.props.loginToggle}
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
            <NavItem className="pointer">
              <NavLink>
                <Link to="/">Updates</Link>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink>
                <Link to="/projects">Projects</Link>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink>
                <Link to="/docs">Documentation</Link>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink>
                <Link to="/links">Links</Link>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink>
                <Link to="/contact">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
          {loginControl}
        </Collapse>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  loginToggle: PropTypes.func,
  displayLoginClicked: PropTypes.func,
  displaySignupClicked: PropTypes.func
};
