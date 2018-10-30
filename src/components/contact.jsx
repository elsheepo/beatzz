import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Image, Well, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'

import Updates from "./updates";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
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
    else if (length > 0 && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'warning';
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
    return null;
  }
  validateMessage() {
    const length = this.state.message.length;
    if (length > 0) return 'success';
    return null;
  }

  handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) }

  handleCancelClick = () => { ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot"));  }

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
            <FormGroup 
            controlId="contactName" 
            validationState={this.validateName()} >
              <ControlLabel>Name</ControlLabel>
              <FormControl
                name="name"
                type="text" 
                value={this.state.name} 
                onChange={this.handleChange} />
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </FormGroup>
            <FormGroup controlId="contactEmail" validationState={this.validateEmail()} >
              <ControlLabel>Email Address</ControlLabel>
              <FormControl 
                name="email"
                type="text" 
                value={this.state.email} 
                onChange={this.handleChange} />
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
                onChange={this.handleChange} />
              <FormControl.Feedback />
              <HelpBlock></HelpBlock>
            </FormGroup>
            <br />
            <br />
            <div className="text-right">
              <Button onClick={this.handleCancelClick}>Cancel</Button>
              <Button bsStyle="primary" disabled>Send</Button>
            </div>
          </Form>
          </Well>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Contact;
