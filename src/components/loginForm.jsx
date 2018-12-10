import React, { Component } from "react";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import { Button, FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  render() {
    return (
      <AvForm>
        <AvGroup>
          <Label for="email">email</Label>
          <AvInput name="email" id="email" type="email" required />
          <AvFeedback>please enter email</AvFeedback>
        </AvGroup>
        <AvGroup>
          <Label for="password">password</Label>
          <AvInput
            name="password"
            id="password"
            type="password"
            min="8"
            required
          />
          <AvFeedback>please enter password</AvFeedback>
        </AvGroup>
        <hr />
        <div className="text-right">
          <FormGroup>
            <Button onClick={this.props.handleHide}>cancel</Button>
            <Button>Submit</Button>
          </FormGroup>
        </div>
      </AvForm>
    );
  }
}

LoginForm.propTypes = {
  handleHide: PropTypes.func
};
