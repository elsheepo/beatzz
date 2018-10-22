import React, { Component } from 'react';
import NavBar from './components/navbar';
import Updates from './components/updates';
import Footer from './components/footer';
import Privacy from './components/privacy';
import Signup from './components/signup';
import Login from './components/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      displayLogin: false,
      displaySignup: false,
      displayPrivacy: false
    };
  }

  loginToggle = () => { this.setState({isLoggedIn: !this.state.isLoggedIn})}
  displayLoginHandler = () => { this.setState({ displayLogin: true })}
  displaySignupHandler = () => { this.setState({ displaySignup: true })}

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const displayLoginModal = this.state.displayLogin;
    const displaySignupModal = this.state.displaySignup;
    const displayPrivacyModal = this.state.displayPrivacy;
    return (
      <React.Fragment>
        <div className="wrapper">
          <div id="navbarRoot">
            <NavBar
              isLoggedIn={isLoggedIn}
              loginToggle={this.loginToggle}
              displayLoginClicked={this.displayLoginHandler} 
              displaySignupClicked={this.displaySignupHandler} />
          </div>
          <div id="loginRoot">
            <Login
              display={displayLoginModal} />
          </div>
          <div id="signupRoot">
            <Signup
              display={displaySignupModal} />
          </div>
          <div id="privacyRoot">
            <Privacy
              display={displayPrivacyModal} />
          </div>
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-sm-2" id="leftPanelRoot"></div>
              <div className="col-sm-8">
                <div id="jumbotronRoot"><Updates /></div>
              </div>
              <div className="col-sm-2" id="rightPanelRoot"></div>
            </div>
          </div>
        </div>
        <div id="footerRoot"><Footer /></div>
      </React.Fragment>
    );
  }
}

export default App;
