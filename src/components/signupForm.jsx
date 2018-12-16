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
      displayNotice: false
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

  render() {
    const displayNotice = this.state.displayNotice;

    return (
      <AvForm onValidSubmit={this.handleValidSubmit}>
        {displayNotice ? (
          <React.Fragment>
            <Card id="signupCard">
              <PrivacyNotice />
            </Card>

            <Button id="return-to-form" color="primary" onClick={this.toggle}>
              return to form
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Fields validatePassword2={this.validate} />
            <AvGroup check>
              <AvInput type="checkbox" name="accept" required />
              <p>
                {"Agree to the "}
                <span onClick={this.toggle}>
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

const Fields = props => {
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
      />
      <AvField
        name="lastName"
        label="last name"
        type="text"
        errorMessage="required"
        validate={{
          required: { value: true }
        }}
      />
      <AvField
        name="signupEmail"
        label="email"
        type="email"
        errorMessage="Invalid email"
        validate={{
          required: { value: true }
        }}
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
      />
      <AvField
        name="password2"
        label="password"
        type="password"
        validate={{ async: props.validatePassword2 }}
      />
    </React.Fragment>
  );
};

Fields.propTypes = {
  validatePassword2: PropTypes.func
};
