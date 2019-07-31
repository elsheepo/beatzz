import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Jumbotron, Card, CardBody, Button, FormGroup } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contactEmail: '',
            message: '',
        }
    }

    handleValidSubmit = (event, values) => {
        this.setState({ values })
        const name = this.state.name
        const email = this.state.contactEmail
        const message = this.state.message
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
                // console.log(result);

                const alertElement = document.getElementById('alert-div')

                if (result.success === true) {
                    ReactDOM.render(
                        <Alert color="success">{result.message}</Alert>,
                        alertElement
                    )
                    setTimeout(() => {
                        window.location.replace('https://www.beatzz.co')
                    }, 2500)
                }
            })
            .catch(error => {
                // console.log(error);

                const alertElement = document.getElementById('alert-div')

                ReactDOM.render(
                    <Alert color="danger">
                        There seems to have been an error sending your message.
                        Please try again later.
                    </Alert>,
                    alertElement
                )
                setTimeout(() => {
                    window.location.replace('https://www.beatzz.co')
                }, 2500)
            })
    }

    handleChange = e => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
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
                    <p className="text-center text-primary varela-round">
                        CONTACT
                    </p>
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
                                            errorMessage:
                                                'Please enter your name',
                                        },
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                                <AvField
                                    name="contactEmail"
                                    label="email"
                                    type="email"
                                    errorMessage="Invalid email"
                                    validate={{
                                        required: { value: true },
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.contactEmail}
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
                                    onChange={this.handleChange}
                                    value={this.state.message}
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
}
