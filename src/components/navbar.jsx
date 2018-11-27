import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, } from 'reactstrap';
  import FontAwesome from "react-fontawesome";

import Updates from "./updates";
import Projects from "./projects";
import Docs from "./docs";
import Links from "./links";
import Contact from "./contact";


function InactiveSession(props) {
  return (
    <Nav>
      <NavItem id="signupAnchor" className="pointer" onClick={props.displaySignupClicked}>
        <FontAwesome name='user-plus' /> Signup</NavItem>
      <NavItem id="loginAnchor" className="pointer" onClick={props.displayLoginClicked}>
        <FontAwesome name='sign-in' /> Login</NavItem>
    </Nav>
  );
}

function ActiveSession(props) {
  return (
    <Nav>
      <NavItem id="homeAnchor" className="pointer" onClick={props.onClick}>
        <FontAwesome name='home' /> Home</NavItem>
      <NavItem id="logoutAnchor" className="pointer" onClick={props.onClick}>
        <FontAwesome name='sign-out' /> Logout</NavItem>
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
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  handleUpdatesClick = () => { ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot")); }
  handleProjectsClick = () => { ReactDOM.render(<Projects />, document.getElementById("jumbotronRoot")); }
  handleDocsClick = () => { ReactDOM.render(<Docs />, document.getElementById("jumbotronRoot")); }
  handleLinksClick = () => { ReactDOM.render(<Links />, document.getElementById("jumbotronRoot")); }
  handleContactClick = () => { ReactDOM.render(<Contact />, document.getElementById("jumbotronRoot")); }

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
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <img id="whiteSheep" src="../img/sheep.png" alt="whitesheep" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="pointer" onClick={this.handleUpdatesClick}>Updates</NavItem>
            <NavItem className="pointer" onClick={this.handleProjectsClick}>Projects</NavItem>
            <NavItem className="pointer" onClick={this.handleDocsClick}>Documentation</NavItem>
            <NavItem className="pointer" onClick={this.handleLinksClick}>Links</NavItem>
            <NavItem className="pointer" onClick={this.handleContactClick}>Contact</NavItem>
          </Nav>
          {loginControl}
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
