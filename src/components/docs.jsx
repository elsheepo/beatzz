import React, { Component } from 'react'
import { Jumbotron, Image, Well } from 'react-bootstrap'

class Docs extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="img-container">
            <Image id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">DOCUMENTATION</p>
          <Well bsSize="large">
            <div className="row">
              <div className="col-sm-2 align-items-center h-100">
                <div className="img-container">
                  <a href="docs/Slackware%20Package%20Management.pdf">
                    <Image id="docImg" src="./img/doc_icon.png" alt="document" />
                  </a>
                </div>  
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Title</i>: Slackware Package Management
                  <br />
                  <i>About</i>: This tutorial covers package management for the Slackware Linux distribution.
                  <br />
                  <i>Download</i>: <a href="documents/Slackware%20Package%20Management.pdf" download="Slackware Package Management.pdf"><u>Slackware Package Management.pdf</u></a>
                  <br />
                  <br />
                </p>
              </div>
            </div>  
          </Well>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Docs;
