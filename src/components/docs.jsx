import React from 'react'
import { Jumbotron, Card } from 'reactstrap'

export const Docs = () => {
    return (
        <React.Fragment>
            <Jumbotron>
                <div className="img-container">
                    <img
                        id="blacksheep"
                        src="img/blacksheep.png"
                        alt="blacksheep"
                    />
                </div>
                <p className="text-center text-primary varela-round">
                    DOCUMENTATION
                </p>
                <Card>
                    <div className="row">
                        <div className="col-sm-2 align-items-center h-100">
                            <div className="img-container">
                                <a
                                    href="docs/Slackware%20Package%20Management.pdf"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        id="docImg"
                                        src="./img/doc-icon.png"
                                        alt="document"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-10 text-left">
                            <p>
                                <i>Title</i>: Slackware Package Management
                                <br />
                                <i>About</i>: This tutorial covers package
                                management for the Slackware Linux distribution.
                                <br />
                                <i>Download</i>:{' '}
                                <a
                                    href="docs/Slackware%20Package%20Management.pdf"
                                    download="Slackware Package Management.pdf"
                                >
                                    <u>Slackware Package Management.pdf</u>
                                </a>
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </Card>
            </Jumbotron>
        </React.Fragment>
    )
}
