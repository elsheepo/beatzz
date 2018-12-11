import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleValidSubmit = (event, values) => {
    this.setState({ values });
  };

  render() {
    return (
      <AvForm>
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
          name="password"
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

LoginForm.propTypes = {
  handleHide: PropTypes.func
};
