import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox } from 'react-bootstrap'

class SignupForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      isValid: false
    };
  }

  validateFirstNameLength() {
    const length = this.state.firstName.length;
    if (length > 0) return 'success';
    return null;
  }

  validateLastNameLength() {
    const length = this.state.lastName.length;
    if (length > 0) return 'success';
    return null;
  }

  validateEmail() {
    const email = this.state.email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) return 'success'; 
    return null;
  }

  validateUsernameLength() {
    const length = this.state.username.length;
    if (length > 0) return 'success';
    return null;
  }

  validatePassword() {
    const length = this.state.password.length;
    if (length >= 8) return 'success';
    else if (length > 0 && length < 8) return 'warning';
    return null;
  }

  validatePasswordRepeat() {
    const length = this.state.repeatPassword.length;
    if (length >= 8) return 'success';
    else if (length > 0 && length < 8) return 'warning';
    return null;
  }

  handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) }

  render() {
    return ( 
      <form>
        <FormGroup
          controlId="firstName"
          validationState={this.validateFirstNameLength()}
        >
          <ControlLabel>first name</ControlLabel>
          <FormControl
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="lastName"
          validationState={this.validateLastNameLength()}
        >
          <ControlLabel>last name</ControlLabel>
          <FormControl
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="email"
          validationState={this.validateEmail()}
        >
          <ControlLabel>email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="username"
          validationState={this.validateUsernameLength()}
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
          validationState={this.validatePassword()}
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

        <FormGroup
          controlId="repeatPassword"
          validationState={this.validatePasswordRepeat()}
        >
          <ControlLabel>repeat password</ControlLabel>
          <FormControl
            name="repeatPassword"
            type="password"
            value={this.state.repeatPassword}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <Checkbox validationState="success">You must agree with our Terms and Privacy Conditions</Checkbox>
      </form>
    );
  }
}

export default SignupForm;
