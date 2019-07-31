import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Jumbotron, Card, CardBody, Button, FormGroup } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Link } from 'react-router-dom'

export const FunctionalContact = () => {
    const [name, setName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <React.Fragment>
            <Jumbotron className="text-center">
                <div className="img-container">
                    <img
                        id="blacksheep"
                        src="img/blacksheep.png"
                        alt="blacksheep"
                    />
                </div>
                <p className="text-center text-primary varela-round">CONTACT</p>
                <Card>
                    <CardBody>
                        <AvForm onValidSubmit={handleValidSubmit}>
                            <AvField
                                name="name"
                                label="name"
                                type="text"
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage: 'Please enter your name',
                                    },
                                }}
                                onChange={handleChange}
                                value={state.name}
                            />
                            <AvField
                                name="contactEmail"
                                label="email"
                                type="email"
                                errorMessage="Invalid email"
                                validate={{
                                    required: { value: true },
                                }}
                                onChange={handleChange}
                                value={state.contactEmail}
                            />
                            <AvField
                                name="message"
                                label="message"
                                type="textarea"
                                rows="5"
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage:
                                            'Please enter your message',
                                    },
                                }}
                                onChange={handleChange}
                                value={state.message}
                            />
                            <hr />
                            <div className="text-right">
                                <FormGroup>
                                    <div id="alert-div" />
                                    <Link to="/">
                                        <Button>Cancel</Button>
                                    </Link>
                                    <Button color="primary">Submit</Button>
                                </FormGroup>
                            </div>
                        </AvForm>
                    </CardBody>
                </Card>
            </Jumbotron>
        </React.Fragment>
    )
}

const handleValidSubmit = (event, values) => {
    setState({ values })
    const name = state.name
    const email = state.contactEmail
    const message = state.message
    fetch('./includes/contact.inc.php', {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
    })
        .then(response => response.json())
        .then(result => {
            const alertElement = document.getElementById('alert-div')
            const body = document.getElementById('body')
            if (result.success === true) {
                ReactDOM.render(
                    <Alert color="success">{result.message}</Alert>,
                    alertElement
                )
                setTimeout(() => {
                    ReactDOM.render(<FunctionalContact />, body)
                }, 2500)
            }
        })
        .catch(error => {
            const body = document.getElementById('body')
            const alertElement = document.getElementById('alert-div')
            ReactDOM.render(
                <Alert color="danger">
                    There seems to have been an error sending your message.
                    Please try again later.
                </Alert>,
                alertElement
            )
            setTimeout(() => {
                ReactDOM.render(<FunctionalContact />, body)
            }, 2500)
        })
}

const handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    setState(change)
}
