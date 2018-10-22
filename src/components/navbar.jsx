import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, Image, Glyphicon, OverlayTrigger, Popover } from "react-bootstrap";

import Updates from "./updates";
import Projects from "./projects";
import Docs from "./docs";
import Links from "./links";
import Contact from "./contact";

class InactiveSession extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  handleSignupShow = () => { document.getElementById('signup').style.display = 'block' }
  render() {
    return (
      <Nav pullRight>
        <NavItem id="signupAnchor" onClick={this.handleSignupShow}>
          <Glyphicon glyph="user" /> Signup
        </NavItem>
        <NavItem id="loginAnchor" onClick={this.props.displayLoginClicked}>
          <Glyphicon glyph="log-in" /> Login
        </NavItem>
      </Nav>
    );
  }
}

class ActiveSession extends Component {
  render() {
    return (
      <Nav pullRight>
        <NavItem id="homeAnchor" onClick={this.props.onClick}>
          <Glyphicon glyph="home" /> Home
        </NavItem>
        <NavItem id="logoutAnchor" onClick={this.props.onClick}>
          <Glyphicon glyph="log-out" /> Logout
        </NavItem>
      </Nav>
    );
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      defaultExpanded: true,
      collapseOnSelect: true
    };
  }

  handleLogoutClick = () => { this.setState({isLoggedIn: false}) }
  
  handleUpdatesClick = () => { ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot")); }
  handleProjectsClick = () => { ReactDOM.render(<Projects />, document.getElementById("jumbotronRoot")); }
  handleDocsClick = () => { ReactDOM.render(<Docs />, document.getElementById("jumbotronRoot")); }
  handleLinksClick = () => { ReactDOM.render(<Links />, document.getElementById("jumbotronRoot")); }
  handleContactClick = () => { ReactDOM.render(<Contact />, document.getElementById("jumbotronRoot")); }

  render() {
    
    const popover = (
      <Popover id="modal-popover" title="bug reports appreciated!">
        Please, while browsing, take note of any bugs found and email them to me via the contact form!
      </Popover>
    );
    const isLoggedIn = this.props.isLoggedIn;
    let loginControl;

    if (isLoggedIn) {
      loginControl = <ActiveSession onClick={this.props.loginToggle} />;
    } else {
      loginControl = <InactiveSession displayLoginClicked={this.props.displayLoginClicked} />;
    }

    return (
      <Navbar fixedTop inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>
              <OverlayTrigger overlay={popover}>
                <Image id="whiteSheep" src="../img/sheep.png" alt="whitesheep" />
              </OverlayTrigger>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={this.handleUpdatesClick}>
              Updates
            </NavItem>
            <NavItem onClick={this.handleProjectsClick}>
              Projects
            </NavItem>
            <NavItem onClick={this.handleDocsClick}>
              Documentation
            </NavItem>
            <NavItem onClick={this.handleLinksClick}>
              Links
            </NavItem>
            <NavItem onClick={this.handleContactClick}>
              Contact
            </NavItem>
          </Nav>
          {loginControl}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
