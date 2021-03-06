import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import SignupForm from './signupForm'

export default class Signup extends Component {
    constructor(props, content) {
        super(props, content)
        this.state = {
            modal: this.props.display,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef = node => {
        this.wrapperRef = node
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.unmount()
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    isOpen={this.props.display}
                    toggle={this.toggle}
                    size="lg"
                >
                    <div ref={this.setWrapperRef}>
                        <ModalHeader>
                            <div className="img-container text-center">
                                <span
                                    className="close"
                                    title="Close Modal"
                                    onClick={this.props.unmount}
                                >
                                    &times;
                                </span>
                                <img
                                    id="blacksheep"
                                    src="./img/blacksheep.png"
                                    alt="blacksheep"
                                />
                            </div>
                            <p className="text-primary text-center varela-round">
                                SIGNUP
                            </p>
                        </ModalHeader>
                        <ModalBody>
                            <SignupForm unmount={this.props.unmount} />
                        </ModalBody>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}

Signup.propTypes = {
    display: PropTypes.bool,
    className: PropTypes.string,
    unmount: PropTypes.func,
}
