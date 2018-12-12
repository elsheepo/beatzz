import React, { Component } from "react";
import { Jumbotron, Card, CardBody, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleValidSubmit = (event, values) => {
    this.setState({ values });
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    fetch("./includes/contact.inc.php", {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
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
              <AvForm onValidSubmit={this.handleValidSubmit}>
                <AvField
                  name="name"
                  label="name"
                  type="text"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your name"
                    }
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
                  name="message"
                  label="message"
                  type="textarea"
                  rows="5"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your message"
                    }
                  }}
                />
                <hr />
                <div className="text-right">
                  <FormGroup>
                    <Button>
                      <Link to="/">Cancel</Link>
                    </Button>
                    <Button color="primary">Submit</Button>
                  </FormGroup>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
