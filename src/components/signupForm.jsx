import React, { Component } from "react";
import { Card, FormGroup, Button } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput
} from "availity-reactstrap-validation";
import PrivacyNotice from "./privacyNotice";
import PropTypes from "prop-types";
import _debounce from "lodash.debounce";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNotice: false,
      firstName: "",
      lastName: "",
      password1: "",
      password2: "",
      agreed: false
    };
  }

  validate = _debounce((value, ctx, input, cb) => {
    const x = document.getElementById("password1").value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      cb(value === x);
    }, 500);
  }, 300);

  handleValidSubmit = (event, values) => {
    this.setState({ values });
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("password1").value;
    fetch("./includes/signup.inc.php", {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  toggle = () => {
    this.setState({
      displayNotice: !this.state.displayNotice
    });
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    const displayNotice = this.state.displayNotice;

    return (
      <AvForm onValidSubmit={this.handleValidSubmit}>
        {displayNotice ? (
          <React.Fragment>
            <Card className="privacy-card">
              <PrivacyNotice />
            </Card>

            <Button id="return-to-form" color="primary" onClick={this.toggle}>
              return to form
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Fields
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              signupEmail={this.state.signupEmail}
              password1={this.state.password1}
              password2={this.state.password2}
              agreed={this.state.agreed}
              validatePassword2={this.validate}
              onChange={this.handleChange}
            />
            <AvGroup check>
              <AvInput type="checkbox" name="accept" required />
              <p>
                {"Agree to the "}
                <span
                  name="accept"
                  onClick={this.toggle}
                  onChange={this.handleChange}
                  value={this.state.agreed}
                >
                  <u>terms and conditions</u>
                </span>
              </p>
            </AvGroup>
            <hr />
            <div className="text-right">
              <FormGroup>
                <Button onClick={this.props.handleHide}>cancel</Button>
                <Button color="primary">Submit</Button>
              </FormGroup>
            </div>
          </React.Fragment>
        )}
      </AvForm>
    );
  }
}

SignupForm.propTypes = {
  handleHide: PropTypes.func,
  displayPrivacy: PropTypes.bool
};

class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      signupEmail: this.props.signupEmail,
      password1: this.props.password1,
      password2: this.props.password2
    };
  }

  render() {
    return (
      <React.Fragment>
        <AvField
          name="firstName"
          label="first name"
          type="text"
          errorMessage="required"
          validate={{
            required: { value: true }
          }}
          onChange={this.props.onChange}
          value={this.state.firstName}
        />
        <AvField
          name="lastName"
          label="last name"
          type="text"
          errorMessage="required"
          validate={{
            required: { value: true }
          }}
          onChange={this.props.onChange}
          value={this.state.lastName}
        />
        <AvField
          name="signupEmail"
          label="email"
          type="email"
          errorMessage="Invalid email"
          validate={{
            required: { value: true }
          }}
          onChange={this.props.onChange}
          value={this.state.signupEmail}
        />
        <AvField
          name="password1"
          label="password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
            minLength: {
              value: 8,
              errorMessage: "Your name must be at least 8 characters"
            }
          }}
          onChange={this.props.onChange}
          value={this.state.password1}
        />
        <AvField
          name="password2"
          label="password"
          type="password"
          validate={{ async: this.props.validatePassword2 }}
          onChange={this.props.onChange}
          value={this.state.password2}
        />
      </React.Fragment>
    );
  }
}

Fields.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  signupEmail: PropTypes.string,
  password1: PropTypes.string,
  password2: PropTypes.string,
  validatePassword2: PropTypes.func,
  onChange: PropTypes.func
};
