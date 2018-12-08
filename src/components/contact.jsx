import React, { Component } from "react";
import {
  Jumbotron,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      message: "",
      nameValid: true,
      emailValid: true,
      messageValid: true,
      touched: {
        name: false,
        email: false,
        message: false
      }
    };
  }

  validateName() {
    const length = this.state.name.length;
    if (length > 0) {
      return "success";
    }
    return null;
  }

  validateEmail() {
    const email = this.state.email;
    const length = this.state.email.length;
    if (length === 0) return null;
    else if (
      length > 0 &&
      !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      return "warning";
    } else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return "success";
    }
    return null;
  }

  validateMessage() {
    const length = this.state.message.length;
    if (length > 0) {
      return "success";
    }
    return null;
  }

  validateForm() {
    const nameIsValid = this.validateName();
    const emailIsValid = this.validateEmail();
    const messageIsValid = this.validateMessage();
    if (
      nameIsValid === "success" &&
      emailIsValid === "success" &&
      messageIsValid === "success"
    ) {
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

  render() {
    return (
      <React.Fragment>
        <Jumbotron className="text-center">
          <div className="img-container">
            <img id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">CONTACT</p>
          <Card>
            <CardBody>
              <Form>
                <FormGroup
                  controlId="contactName"
                  validationState={this.validateName()}
                >
                  <Label>Name</Label>
                  <Input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("name")}
                  />
                  <FormFeedback />
                </FormGroup>
                <FormGroup
                  controlId="contactEmail"
                  validationState={this.validateEmail()}
                >
                  <Label>Email Address</Label>
                  <Input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback />
                </FormGroup>
                <FormGroup
                  controlId="contactMessage"
                  validationState={this.validateMessage()}
                >
                  <Label>Message</Label>
                  <Input
                    name="message"
                    componentClass="textarea"
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("message")}
                  />
                  <FormFeedback />
                </FormGroup>
                <br />
                <br />
                <div className="text-right">
                  <Button>
                    <Link to="/">Cancel</Link>
                  </Button>
                  <Button className="primary-btn">Send</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
