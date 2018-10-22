import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class Signup extends Component {
  constructor(props, content) {
    super(props, content);
    this.handleShow = this.handleShow.bind(this);
    this.state = { show: false };
  }
  handleCloseClick = () => { document.getElementById('signup').style.display = 'none' }
  handleShow() { this.setState({ show: true }); }
  render() {
    return (
      <React.Fragment>
        <div className="modal text-center" id="signup">
          <form className="modal-content animate" id="signupForm" autoComplete="off" noValidate>
            <div className="img-container">
              <span className="close" id="closeSignupFormSpan" title="Close Modal" onClick={this.handleCloseClick}>&times;</span>
              <img id="blacksheep" src="./img/blacksheep.png" alt="blacksheep" />
            </div>
            <Well bsSize="large">
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="first name" required data-validation-required-message="Please enter your first name." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="last name" required data-validation-required-message="Please enter your last name." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="signupEmail">Email Address</label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="email@address.com" required data-validation-required-message="Please enter your email address." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="signupUid">Username</label>
                  <input type="text" className="form-control" id="signupUid" placeholder="username" required data-validation-required-message="Please enter desired username." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="signupPwd">Password</label>
                  <input type="password" className="form-control" id="signupPwd" placeholder="password" required data-validation-required-message="Please enter your password." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <label className="control-label" htmlFor="signupPwdRepeat">Repeat Password</label>
                  <input type="password" className="form-control" id="signupPwdRepeat" placeholder="repeat password" required data-validation-required-message="Please re-enter your password." />
                  <p className="small text-left help-block text-danger"></p>
                </div>
              </div>
              <div className="text-left">
                <div className="control-group">
                  <div className="controls">
                    <p>You must agree to our <a id="privacyAnchor2">Terms & Privacy</a> to create an account.</p>
                    <label className="control-label" htmlFor="accept">
                      <input type="checkbox" className="form-control pointer" id="accept" required data-validation-required-message="You must agree to the Terms & Privacy conditions." /> I agree!
                    </label>
                    <p className="small text-left help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div id="signupSuccess"></div>
              <button type="submit" className="button blue" name="signupButton">Sign Up</button>
              <button type="button" className="button red" onClick={this.handleCloseClick}>Cancel</button>
            </Well>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
