import React, { Component } from 'react'
import { Modal, Image, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import LoginForm from './loginForm'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {show: this.props.display};
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.display !== this.props.display) {
      this.setState({          
        show: this.props.display
      });
    }
  }

  render() {
    const display = this.state.show;
    const tooltip = <Tooltip id="modal-tooltip">bah...</Tooltip>;
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
              <span className="close" title="Close Modal" onClick={this.props.handleHide}>&times;</span>
              <OverlayTrigger overlay={tooltip}>
                <Image id="blacksheep" src="./img/blacksheep.png" alt="blacksheep" />
              </OverlayTrigger>
            </div>
            <p className="text-primary text-center varela-round">LOGIN</p>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
          <Modal.Footer>
            <Button
               onClick={this.props.handleHide}
            >cancel</Button>
            <Button bsStyle="primary" disabled>login</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Login;
