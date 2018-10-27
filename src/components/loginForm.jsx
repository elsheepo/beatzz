import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class LoginForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: '',
      isValid: false
    };
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

  handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) }

  render() {
    return (
      <form>
        <FormGroup
          controlId="username"
          validationState={this.getUsernameValidationState()}
          minLength="1"
          maxLength="12"
        >
          <ControlLabel>username</ControlLabel>
          <FormControl
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="password"
          validationState={this.getPasswordValidationState()}
        >
          <ControlLabel>password</ControlLabel>
          <FormControl
          name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default LoginForm;
