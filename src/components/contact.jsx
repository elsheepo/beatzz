import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Image, Well, Button } from "react-bootstrap";

import Updates from "./updates";
import "../js/formValidation";

class Contact extends Component {
  
  handleClick = () => {
    ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot"));
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron className="text-center">
          <div className="img-container">
            <Image id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">CONTACT</p>
          <Well bsSize="large">
            <form id="contactForm" className="needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" required />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Email Address" required />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter your email address.</div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Message" required></textarea>
                <div className="valid-feedback">Thank you for your feedback!</div>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>
              <br />
              <br />
              <button type="submit" className="button blue" id="sendMessageButton">Send</button>
              <button type="button" className="button red" id="cancelMessageButton" onClick={this.handleClick}>Cancel</button>
            </form>
          </Well>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Contact;
