import React, { Component } from "react";
import { FormGroup, Button } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput
} from "availity-reactstrap-validation";
import PropTypes from "prop-types";
import _debounce from "lodash.debounce";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: ""
    };
  }

  // debounce to not pound the 'server'
  validate = _debounce((value, ctx, input, cb) => {
    // cancel pending 'network call'
    clearTimeout(this.timeout);
    // simulate network call
    this.timeout = setTimeout(() => {
      cb(value === "");
    }, 500);
  }, 300);

  render() {
    return (
      <AvForm>
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
          name="email"
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
          validate={{ async: this.validate }}
        />
        <AvGroup check>
          <AvInput type="checkbox" name="checkItOut" required />
          <p>
            {"Agree to the "}
            <a href="" onClick={this.props.displayPrivacy}>
              terms and conditions
            </a>
          </p>
        </AvGroup>
        <hr />
        <div className="text-right">
          <FormGroup>
            <Button onClick={this.props.handleHide}>cancel</Button>
            <Button color="primary">Submit</Button>
          </FormGroup>
        </div>
      </AvForm>
    );
  }
}

SignupForm.propTypes = {
  handleHide: PropTypes.func,
  displayPrivacy: PropTypes.bool
};
