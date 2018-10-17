import React, { Component } from "react";
import { Modal, Image, Form, FormGroup,
  FormControl, ControlLabel, HelpBlock, Tooltip,
  OverlayTrigger } from "react-bootstrap";

class Login extends Component {
  constructor(props, content) {
    super(props, content);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { show: false };
  }
  handleClose() { this.setState({ show: false }); }
  handleShow() { this.setState({ show: true }); }
  render() {
    const tooltip = <Tooltip id="modal-tooltip">bah...</Tooltip>;
    return (
      <React.Fragment>
        <Modal className="text-center" id="login" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <div className="img-container">
              <span className="close" title="Close Modal" onClick={this.handleClose}>&times;</span>
              <OverlayTrigger overlay={tooltip}>
                <Image id="blacksheep" src="./img/blacksheep.png" alt="blacksheep" />
              </OverlayTrigger>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form className="modal-content animate" id="loginForm" autoComplete="off" noValidate>
              <FormGroup controlId="usernameControl" validationState="success">
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" placeholder="username" />
                <HelpBlock>Help text with validation state.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="passwordControl" validationState="success">
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placeholder="password" />
                <HelpBlock>Help text with validation state.</HelpBlock>
              </FormGroup>
                <div className="text-left">
                  <label>
                    <input type="checkbox" className="pointer" checked="checked" readOnly /> Remember me
                  </label>
                </div>
                <button type="submit" className="button blue" name="loginButton">Login</button>
                <button className="button red" onClick={this.handleClose}>Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Login;
