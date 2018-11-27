import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, } from 'reactstrap';

import Updates from "./updates";
import Projects from "./projects";
import Docs from "./docs";
import Links from "./links";
import Contact from "./contact";

function InactiveSession(props) {
  return (
    <Nav pullRight>
      <NavItem id="signupAnchor" onClick={this.props.displaySignupClicked} >
        <i class="fa user-plus" /> Signup</NavItem>
      <NavItem id="loginAnchor" onClick={this.props.displayLoginClicked} >
        <i class="fa sign-in-alt" /> Login</NavItem>
    </Nav>
  );
}

function ActiveSession(props) {
  return (
    <Nav pullRight>
      <NavItem id="homeAnchor" onClick={this.props.onClick} >
        <i class="fa home" /> Home</NavItem>
      <NavItem id="logoutAnchor" onClick={this.props.onClick} >
        <i class="fa sign-out-alt" /> Logout</NavItem>
     </Nav>
  );
}

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      isOpen: false,    
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
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    const isLoggedIn = this.props.isLoggedIn;
    let loginControl;

    if (isLoggedIn) {
      loginControl = 
        <ActiveSession onClick={this.props.loginToggle} />;
    } else {
      loginControl = 
        <InactiveSession 
          displayLoginClicked={this.props.displayLoginClicked} 
          displaySignupClicked={this.props.displaySignupClicked} />;
    }

    return (
      <Navbar  color="dark" dark expand="md">
        <NavbarBrand>
          {/* <OverlayTrigger overlay={popover}> */}
            <a><image id="whiteSheep" src="../img/sheep.png" alt="whitesheep" /></a>
          {/* </OverlayTrigger> */}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem onClick={this.handleUpdatesClick}>Updates</NavItem>
            <NavItem onClick={this.handleProjectsClick}>Projects</NavItem>
            <NavItem onClick={this.handleDocsClick}>Documentation</NavItem>
            <NavItem onClick={this.handleLinksClick}>Links</NavItem>
            <NavItem onClick={this.handleContactClick}>Contact</NavItem>
          </Nav>
          {loginControl}
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
