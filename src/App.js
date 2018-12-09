import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
          <NavBar
            isLoggedIn={isLoggedIn}
            loginToggle={this.loginToggle}
            displayLoginClicked={this.displayLoginHandler}
            displaySignupClicked={this.displaySignupHandler}
          />
          <Container>
            <Row>
              <Col />
              <Col className="text-center" sm="14" xl="12">
                <Route path="/contact" component={Contact} />
                <Route path="/docs" component={Docs} />
                <Route path="/links" component={Links} />
                <Route path="/projects" component={Projects} />
                <Route path="/" exact component={Updates} />
              </Col>
              <Col />
            </Row>
          </Container>
          <Footer displayPrivacy={this.displayPrivacyHandler} />

          <Login
            display={displayLoginModal}
            handleHide={this.hideLoginHandler}
          />

          <Signup
            display={displaySignupModal}
            handleHide={this.hideSignupHandler}
          />

          <Privacy
            display={displayPrivacyModal}
            handleHide={this.hidePrivacyHandler}
          />
        </React.Fragment>
      </Router>
    );
  }
}
