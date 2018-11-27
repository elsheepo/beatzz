import React, { Component } from 'react'
import { Image, Well } from 'react-bootstrap'
import { Jumbotron } from 'reactstrap'

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="img-container">
            <Image id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round"> PROJECTS </p>
          <Well bsSize="large">
            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a href="https://github.com/elsheepo/Convertron" rel="noopener noreferrer" target="_blank"><Image className="float-left" src="./img/convert.png" alt="Convertron" /></a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>: Convertron
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: A simple Java GUI application to convert measurements from one unit type to another.
                  <br />
                  <i>Windows</i>: <a href="downloads/java/convertron-1.0.rar" download="convertron-1.0.rar"><u>convertron-1.0.rar</u></a>
                  <br />
                  <i>Linux</i>: <a href="downloads/java/convertron-1.0.tar.bz2" download="convertron-1.0.tar.bz2"><u>convertron-1.0.tar.bz2</u></a>
                </p>   
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a href="https://github.com/elsheepo/SQLite-Database-Manager" rel="noopener noreferrer" target="_blank"><img className="float-left" src="./img/sqlite-icon.png" alt="SQLite-Database-Manager" /></a>
                </div>
              </div>
              <br />
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>: SQLite-Database-Manager
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: A JavaFX application which will connect to a SQLite database, and dynamically display the tables, columns, and values therein, allowing the user to add, remove, or update entries as well.
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <img className="float-left" src="./img/bitcoin.png" alt="Bitcoin" />
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>: Coin
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: Web UI for Bitcoin mining.
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a href="./hackware/index.html" rel="noopener noreferrer" target="_blank"><img className="float-left" src="./img/skull.png" alt="Hackware" /></a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                    <i>Name</i>: Hackware Linux
                    <br />
                    <i>Co-Conspirators</i>: wigums & beatzz
                    <br />
                    <i>About</i>: A Linux distribution designed with simplicity, stability, and sophistication in mind. For the advanced administrator, the horrendous hacker, and the dedicated developer!
                  </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a href="https://github.com/elsheepo" rel="noopener noreferrer" target="_blank"><img className="float-left" src="./img/github.png" alt="GitHub" /></a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>GitHub</i>: <a href="https://github.com/elsheepo" rel="noopener noreferrer" target="_blank">https://github.com/elsheepo</a>
                  <br />
                  <i>Author</i>: @elsheepo
                  <br />
                  <i>About</i>: Check out my GitHub repositories! There I have a collection of projects I'll be continually updating.
                </p>
              </div>
            </div>   
          </Well>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Projects;
