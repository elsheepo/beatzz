import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Image, Well, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

import Updates from "./updates";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  validateName() {
    const length = this.state.name.length;
    if (length > 0) return 'success';
    return null;
  }
  validateEmail() {
    const email = this.state.email;
    const length = this.state.email.length;
    if (length === 0) return null;
    else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'error';
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
    return null;
  }
  validateMessage() {
    const length = this.state.message.length;
    if (length > 0) return 'success';
    return null;
  }

  handleNameChange(e) { this.setState({ name: e.target.value }); }
  handleEmailChange(e) { this.setState({ email: e.target.value }); }
  handleMessageChange(e) { this.setState({ message: e.target.value }); }

  handleCancelClick() { ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot"));  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron className="text-center">
          <div className="img-container">
            <Image id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">CONTACT</p>
          <Well bsSize="large">
          <Form>
            <FormGroup controlId="contactName" validationState={this.validateName()} >
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text" value={this.state.name} onChange={this.handleNameChange} />
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </FormGroup>
            <FormGroup controlId="contactEmail" validationState={this.validateEmail()} >
              <ControlLabel>Email Address</ControlLabel>
              <FormControl type="text" value={this.state.email} onChange={this.handleEmailChange} />
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </FormGroup>
            <FormGroup controlId="contactMessage" validationState={this.validateMessage()} >
              <ControlLabel>Message</ControlLabel>
              <FormControl componentClass="textarea" rows="5" value={this.state.message} onChange={this.handleMessageChange} />
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </FormGroup>
            <br />
            <br />
            <button type="submit" className="button blue" id="sendMessageButton">Send</button>
            <button type="button" className="button red" id="cancelMessageButton" onClick={this.handleCancelClick}>Cancel</button>
          </Form>
          </Well>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Contact;
