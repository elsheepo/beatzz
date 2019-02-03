import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions";
import { Alert, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleValidSubmit = (event, values) => {
    this.setState({ values });
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("password").value;
    fetch("./includes/login.inc.php", {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => {
        const alertElement = document.getElementById("alert-div");
        if (result.success === false) {
          ReactDOM.render(
            <Alert color="warning">{result.message}</Alert>,
            alertElement
          );
        } else if (result.success === true) {
          ReactDOM.render(
            <Alert color="success">{result.message}</Alert>,
            alertElement
          );
          setTimeout(() => this.props.unmount(), 1500);
          //this.props.toggleLogin();
          this.handleLogin();
        }
      })
      .catch(error => {
        const alertElement = document.getElementById("alert-div");
        ReactDOM.render(
          <Alert color="danger">
            there seems to be an error connecting to the database. Please try
            again later.
          </Alert>,
          alertElement
        );
      });
  };

  handleLogin = () => {
    this.props.login()
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    return (
      <AvForm onValidSubmit={this.handleValidSubmit}>
        <AvField
          name="loginEmail"
          label="email"
          type="email"
          errorMessage="Invalid email"
          validate={{
            required: { value: true }
          }}
          onChange={this.handleChange}
          value={this.state.email}
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
          onChange={this.handleChange}
          value={this.state.password}
        />
        <hr />
        <div className="text-right">
          <FormGroup>
            <div id="alert-div" />
            <Button onClick={this.props.unmount}>cancel</Button>
            <Button color="primary" onClick={this.handleLogin}>Submit</Button>
          </FormGroup>
        </div>
      </AvForm>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);

LoginForm.propTypes = {
  unmount: PropTypes.func,
  toggleLogin: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func
};
