import React, { Component } from "react";
import { Modal } from "reactstrap";
import SignupForm from "./signupForm";

class Signup extends Component {
  constructor(props, content) {
    super(props, content);
    this.state = {
      show: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.display !== this.props.display) {
      this.setState({
        show: this.props.display
      });
    }
  }

  render() {
    const display = this.state.show;
    return (
      <React.Fragment>
        <Modal
          bsSize="large"
          show={display}
          onHide={this.props.handleHide}
          container={this}
          aria-labelledby="contained-modal-title-lg"
          dialogClassName=""
        >
          <Modal.Header>
            <div className="img-container text-center">
              <span
                className="close"
                title="Close Modal"
                onClick={this.props.handleHide}
              >
                &times;
              </span>
              <img
                id="blacksheep"
                src="./img/blacksheep.png"
                alt="blacksheep"
              />
            </div>
            <p className="text-primary text-center varela-round">SIGNUP</p>
          </Modal.Header>
          <Modal.Body>
            <SignupForm handleHide={this.props.handleHide} />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Signup;
