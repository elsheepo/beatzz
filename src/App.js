import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Docs from "./components/docs";
import Links from "./components/links";
import Projects from "./components/projects";
import Updates from "./components/updates";
import Footer from "./components/footer";
import Privacy from "./components/privacyModal";
import Signup from "./components/signupModal";
import Login from "./components/loginModal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      displayLogin: false,
      displaySignup: false,
      displayPrivacy: false
    };
  }

  loginToggle = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  displayLoginHandler = () => {
    this.setState({ displayLogin: true });
  };
  hideLoginHandler = () => {
    this.setState({ displayLogin: false });
  };

  displaySignupHandler = () => {
    this.setState({ displaySignup: true });
  };
  hideSignupHandler = () => {
    this.setState({ displaySignup: false });
  };

  displayPrivacyHandler = () => {
    this.setState({ displayPrivacy: true });
  };
  hidePrivacyHandler = () => {
    this.setState({ displayPrivacy: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const displayLoginModal = this.state.displayLogin;
    const displaySignupModal = this.state.displaySignup;
    const displayPrivacyModal = this.state.displayPrivacy;

    return (
      <Router>
        <React.Fragment>
          <div className="wrapper">
            <div id="navbarRoot">
              <NavBar
                isLoggedIn={isLoggedIn}
                loginToggle={this.loginToggle}
                displayLoginClicked={this.displayLoginHandler}
                displaySignupClicked={this.displaySignupHandler}
              />
            </div>
            <div id="loginRoot">
              <Login
                display={displayLoginModal}
                handleHide={this.hideLoginHandler}
              />
            </div>
            <div id="signupRoot">
              <Signup
                display={displaySignupModal}
                handleHide={this.hideSignupHandler}
              />
            </div>
            <div id="privacyRoot">
              <Privacy
                display={displayPrivacyModal}
                handleHide={this.hidePrivacyHandler}
              />
            </div>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-sm-2" id="leftPanelRoot" />
                <div className="col-sm-8">
                  <div id="jumbotronRoot">
                    <Route path="/contact" component={Contact} />
                    <Route path="/docs" component={Docs} />
                    <Route path="/links" component={Links} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/" exact component={Updates} />
                  </div>
                </div>
                <div className="col-sm-2" id="rightPanelRoot" />
              </div>
            </div>
          </div>
          <div id="footerRoot">
            <Footer displayPrivacyClicked={this.displayPrivacyHandler} />
          </div>
          <div className="push" />
        </React.Fragment>
      </Router>
    );
  }
}
