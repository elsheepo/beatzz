import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap'

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
      agreed: false,
      isValid: false
    };
  }

  
  handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) }
  handleCheckboxChange = (e) => { this.setState({agreed: !this.state.agreed}) }

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
    const length = this.state.email.length;
    if (length === 0) return null;
    else if (length > 0 && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'warning';
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
    return null;
  }

  validateUsernameLength() {
    const length = this.state.username.length;
    if (length > 0 && length < 13) return 'success';
    else if (length > 12) return 'error';
    return null;
  }

  validatePassword() {
    const length = this.state.password.length;
    if (length >= 8) return 'success';
    else if (length > 0 && length < 8) return 'warning';
    return null;
  }

  validatePasswordRepeat() {
    const firstEntry = this.state.password;
    const secondEntry = this.state.repeatPassword;
    if (secondEntry.length > 0 && secondEntry === firstEntry) return 'success';
    return null;
  }

  validateAgreement() {
    const agreed = this.state.agreed;
    if (agreed) return 'success';
    return null;
  }

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
        <Checkbox
          name="agreed"
          validationState={this.validateAgreement()}
          onChange={this.handleCheckboxChange} >You must agree with our Terms and Privacy Conditions</Checkbox>
          <hr />
          <div className="text-right">
            <Button onClick={this.props.handleHide} >cancel</Button>
            <Button bsStyle="primary" type="submit" disabled>signup</Button>
          </div>
      </form>
    );
  }
}

export default SignupForm;
