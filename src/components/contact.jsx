import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Jumbotron, Card, CardBody, Button } from 'reactstrap';

import Updates from "./updates";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      email: '',
      message: '',
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
      return 'success';
    }
    return null;
  }

  validateEmail() {
    const email = this.state.email;
    const length = this.state.email.length;
    if (length === 0) return null;
    else if (length > 0 && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return 'warning';
    } 
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return 'success';
    } 
    return null;
  }
  
  validateMessage() {
    const length = this.state.message.length;
    if (length > 0) {
      return 'success';
    }
    return null;
  }

  validateForm() {
    const nameIsValid = this.validateName();
    const emailIsValid = this.validateEmail();
    const messageIsValid = this.validateMessage();
    if (nameIsValid === 'success' && emailIsValid === 'success' && messageIsValid === 'success') {
      return true;
    }
    return false;
  }

  handleChange = (e) => { 
    this.setState({[e.target.name]: e.target.value}) 
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleCancelClick = () => { 
    ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot"));  
  }

  render() {
    return (
      <React.Fragment>
        <Card>
        <Jumbotron className="text-center">
          <div className="img-container">
            <Image id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">CONTACT</p>
          <Card>
            <CardBody>
              <Form>
                <FormGroup 
                controlId="contactName" 
                validationState={this.validateName()} >
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    name="name"
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('name')} />
                  <FormControl.Feedback />
                  <HelpBlock></HelpBlock>
                </FormGroup>
                <FormGroup controlId="contactEmail" validationState={this.validateEmail()} >
                  <ControlLabel>Email Address</ControlLabel>
                  <FormControl 
                    name="email"
                    type="text" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('email')} />
                  <FormControl.Feedback />
                  <HelpBlock></HelpBlock>
                </FormGroup>
                <FormGroup 
                  controlId="contactMessage" 
                  validationState={this.validateMessage()} >
                  <ControlLabel>Message</ControlLabel>
                  <FormControl 
                    name="message"
                    componentClass="textarea"
                    rows="5" 
                    value={this.state.message} 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('message')} />
                  <FormControl.Feedback />
                  <HelpBlock></HelpBlock>
                </FormGroup>
                <br />
                <br />
                <div className="text-right">
                  <Button onClick={this.handleCancelClick}>Cancel</Button>
                  <Button className="primary-btn">Send</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Jumbotron>
        </Card>
      </React.Fragment>
    );
  }
}

export default Contact;
