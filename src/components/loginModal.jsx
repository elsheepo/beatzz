import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import LoginForm from "./loginForm";

export default class Login extends Component {
  constructor(props, content) {
    super(props, content);
    this.state = {
      modal: this.props.display
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.handleHide();
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.display} toggle={this.toggle} size="lg">
          <div ref={this.setWrapperRef}>
            <ModalHeader>
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
              <p className="text-primary text-center varela-round">LOGIN</p>
            </ModalHeader>
            <ModalBody>
              <LoginForm handleHide={this.props.handleHide} />
            </ModalBody>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  display: PropTypes.bool,
  className: PropTypes.string,
  handleHide: PropTypes.func
};
