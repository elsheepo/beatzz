import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";

class LoginForm extends Component {

  constructor(props, context) {
    this.state = {
      username: '',
      password: '',
      isValid: false
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  getUsernameValidationState() {
    const length = this.state.username.length;
    if (length > 0) return 'success';
    return null;
  }

  getPasswordValidationState() {
    const length = this.state.password.length;
    if (length > 8) return 'success';
    else if (length > 0 && length < 8) return 'error';
    return null;
  }

  handleUsernameChange(e) { this.setState({ username: e.target.value}); }
  handlePasswordChange(e) {  this.setState({ password: e.target.value}); }

  render() {
    return (
      <form>
        <FormGroup
          controlId="username"
          validationState={this.getUsernameValidationState()}
        >
          <ControlLabel>username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleUsernameChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="password"
          validationState={this.getPasswordValidationState()}
        >
          <ControlLabel>password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default LoginForm;
