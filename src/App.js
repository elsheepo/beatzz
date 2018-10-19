import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div id="navbarRoot"></div>
          <div id="loginRoot"></div>
          <div id="signupRoot"></div>
          <div id="privacyRoot"></div>
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-sm-2" id="leftPanelRoot"></div>
              <div className="col-sm-8">
                <div id="jumbotronRoot"></div>
              </div>
              <div className="col-sm-2" id="rightPanelRoot"></div>
            </div>
          </div>
        </div>
        <div id="footerRoot"></div>
      </React.Fragment>
    );
  }
}

export default App;
