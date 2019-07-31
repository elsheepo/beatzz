import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login } from '../redux/actions'
import { Card, FormGroup, Button, Alert } from 'reactstrap'
import {
    AvForm,
    AvField,
    AvGroup,
    AvInput,
} from 'availity-reactstrap-validation'
import { PrivacyNotice } from './privacyNotice'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayNotice: false,
            firstName: '',
            lastName: '',
            password1: '',
            password2: '',
            agreed: false,
        }
    }

    validate = _debounce((value, ctx, input, cb) => {
        const x = this.state.password1
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            cb(value === x)
        }, 500)
    }, 300)

    handleValidSubmit = (event, values) => {
        this.setState({ values })
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const email = this.state.signupEmail
        const password = this.state.password2
        fetch('./includes/signup.inc.php', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(result => {
                const alertElement = document.getElementById('alert-div')
                if (result.success === false) {
                    ReactDOM.render(
                        <Alert color="warning">{result.message}</Alert>,
                        alertElement
                    )
                } else if (result.success === true) {
                    ReactDOM.render(
                        <Alert color="success">{result.message}</Alert>,
                        alertElement
                    )
                    setTimeout(() => this.props.unmount(), 1500)
                    this.handleLogin()
                }
            })
            .catch(error => {
                console.log(error)
                const alertElement = document.getElementById('alert-div')
                ReactDOM.render(
                    <Alert color="danger">
                        there seems to be an error connecting to the database.
                        Please try again later.
                    </Alert>,
                    alertElement
                )
            })
    }

    handleLogin = () => {
        this.props.login()
    }

    toggle = () => {
        this.setState({
            displayNotice: !this.state.displayNotice,
        })
    }

    handleChange = e => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
        const displayNotice = this.state.displayNotice

        return (
            <AvForm onValidSubmit={this.handleValidSubmit}>
                {displayNotice ? (
                    <React.Fragment>
                        <Card className="privacy-card">
                            <PrivacyNotice />
                        </Card>
                        <Button
                            id="return-to-form"
                            color="primary"
                            onClick={this.toggle}
                        >
                            return to form
                        </Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Fields
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            signupEmail={this.state.signupEmail}
                            password1={this.state.password1}
                            password2={this.state.password2}
                            agreed={this.state.agreed}
                            validatePassword2={this.validate}
                            onChange={this.handleChange}
                        />
                        <AvGroup check>
                            <AvInput type="checkbox" name="accept" required />
                            <p>
                                {'Agree to the '}
                                <span
                                    name="accept"
                                    onClick={this.toggle}
                                    onChange={this.handleChange}
                                    value={this.state.agreed}
                                >
                                    <u>terms and conditions</u>
                                </span>
                            </p>
                        </AvGroup>
                        <hr />
                        <div className="text-right">
                            <FormGroup>
                                <div id="alert-div" />
                                <Button onClick={this.props.unmount}>
                                    cancel
                                </Button>
                                <Button color="primary">Submit</Button>
                            </FormGroup>
                        </div>
                    </React.Fragment>
                )}
            </AvForm>
        )
    }
}

SignupForm.propTypes = {
    login: PropTypes.func,
    unmount: PropTypes.func,
    displayPrivacy: PropTypes.bool,
}

export default connect(
    null,
    { login }
)(SignupForm)

class Fields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            signupEmail: this.props.signupEmail,
            password1: this.props.password1,
            password2: this.props.password2,
        }
    }

    render() {
        return (
            <React.Fragment>
                <AvField
                    name="firstName"
                    label="first name"
                    type="text"
                    errorMessage="required"
                    validate={{
                        required: { value: true },
                    }}
                    onChange={this.props.onChange}
                    value={this.state.firstName}
                />
                <AvField
                    name="lastName"
                    label="last name"
                    type="text"
                    errorMessage="required"
                    validate={{
                        required: { value: true },
                    }}
                    onChange={this.props.onChange}
                    value={this.state.lastName}
                />
                <AvField
                    name="signupEmail"
                    label="email"
                    type="email"
                    errorMessage="Invalid email"
                    validate={{
                        required: { value: true },
                    }}
                    onChange={this.props.onChange}
                    value={this.state.signupEmail}
                />
                <AvField
                    name="password1"
                    label="password"
                    type="password"
                    validate={{
                        required: {
                            value: true,
                            errorMessage: 'Please enter your password',
                        },
                        minLength: {
                            value: 8,
                            errorMessage:
                                'Your name must be at least 8 characters',
                        },
                    }}
                    onChange={this.props.onChange}
                    value={this.state.password1}
                />
                <AvField
                    name="password2"
                    label="password"
                    type="password"
                    validate={{ async: this.props.validatePassword2 }}
                    onChange={this.props.onChange}
                    value={this.state.password2}
                />
            </React.Fragment>
        )
    }
}

Fields.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    signupEmail: PropTypes.string,
    password1: PropTypes.string,
    password2: PropTypes.string,
    validatePassword2: PropTypes.func,
    onChange: PropTypes.func,
}
