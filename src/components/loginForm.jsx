import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: "",
      touched: {
        email: false,
        password: false
      },
      isValid: false
    };
  }

  validateEmail() {
    const email = this.state.email;
    const length = this.state.email.length;
    if (length === 0) return null;
    else if (length > 0 && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
      return "warning";
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
      return "success";
    return null;
  }

  validatePassword() {
    const length = this.state.password.length;
    if (length >= 8) return "success";
    else if (length > 0 && length < 8) return "warning";
    return null;
  }

  validateForm() {
    const emailIsValid = this.validateEmail();
    const passwordIsValid = this.validatePassword();
    if (emailIsValid === "success" && passwordIsValid === "success") {
      return true;
    }
    return false;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = this.validateForm();
    const isDisabled = this.validateForm();
    return !isDisabled;
  }

  render() {
    const errors = this.validateForm();
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" validationState={this.validateEmail()}>
          <Label>email</Label>
          <Input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={this.handleBlur("email")}
            className={shouldMarkError("password") ? "error" : ""}
          />
          <FormFeedback />
        </FormGroup>
        <FormGroup
          controlId="password"
          validationState={this.validatePassword()}
        >
          <Label>password</Label>
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            onBlur={this.handleBlur("password")}
            className={shouldMarkError("password") ? "error" : ""}
          />
          <FormFeedback />
        </FormGroup>
        <hr />
        <div className="text-right">
          <Button onClick={this.props.handleHide}>cancel</Button>
          <Button bsStyle="primary" type="submit" disabled={isDisabled}>
            login
          </Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
