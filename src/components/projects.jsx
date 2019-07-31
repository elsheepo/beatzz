import React, { Component } from "react";
import { Jumbotron, Card } from "reactstrap";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="img-container">
            <img id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">PROJECTS</p>
          <Card>
            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="https://github.com/elsheepo/Convertron"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/convert.png"
                      alt="Convertron"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>:{" "}
                  <a
                    href="https://github.com/elsheepo/Convertron"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Convertron
                  </a>
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: A simple Java GUI application to convert
                  measurements from one unit type to another.
                  <br />
                  <i>Windows</i>:{" "}
                  <a
                    href="downloads/convertron-1.0.zip"
                    download="convertron-1.0.rar"
                  >
                    <u>convertron-1.0.zip</u>
                  </a>
                  <br />
                  <i>Linux</i>:{" "}
                  <a
                    href="downloads/convertron-1.0.tar.bz2"
                    download="convertron-1.0.tar.bz2"
                  >
                    <u>convertron-1.0.tar.bz2</u>
                  </a>
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="https://github.com/elsheepo/SQLite-Database-Manager"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/sqlite-icon.png"
                      alt="SQLite-Database-Manager"
                    />
                  </a>
                </div>
              </div>
              <br />
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>:{" "}
                  <a
                    href="https://github.com/elsheepo/SQLite-Database-Manager"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    SQLite-Database-Manager
                  </a>
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: A JavaFX application which will connect to a
                  SQLite database, and dynamically display the tables, columns,
                  and values therein, allowing the user to add, remove, or
                  update entries as well.
                  <br />
                  <i>Windows</i>:{" "}
                  <a
                    href="downloads/sqlite-db-mgr-1.0.zip"
                    download="sqlite-db-mgr-1.0.zip"
                  >
                    <u>sqlite-db-mgr-1.0.zip</u>
                  </a>
                  <br />
                  <i>Linux</i>:{" "}
                  <a
                    href="downloads/sqlite-db-mgr-1.0.tar.bz2"
                    download="sqlite-db-mgr-1.0.tar.bz2"
                  >
                    <u>sqlite-db-mgr-1.0.tar.bz2</u>
                  </a>
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="https://github.com/elsheepo/Blackjack"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/blackjack.png"
                      alt="blackjack"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>:{" "}
                  <a
                    href="https://github.com/elsheepo/Blackjack"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Blackjack
                  </a>
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: A console based game of Blackjack written in
                  Java, demonstrating solid Object Orientated Programming.
                  <br />
                  <i>Windows</i>:{" "}
                  <a
                    href="downloads/blackjack-1.0.zip"
                    download="blackjack-1.0.zip"
                  >
                    <u>blackjack-1.0.zip</u>
                  </a>
                  <br />
                  <i>Linux</i>:{" "}
                  <a
                    href="downloads/blackjack-1.0.tar.bz2"
                    download="blackjack-1.0.tar.bz2"
                  >
                    <u>blackjack-1.0.tar.bz2</u>
                  </a>
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="./smlinux.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/slackware-musl.png"
                      alt="Hackware"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>: smLinux
                  <br />
                  <i>Co-Conspirators</i>: SkyroveRR & beatzz
                  <br />
                  <i>About</i>: A Linux distribution designed with simplicity,
                  stability, and sophistication in mind. Based largely on
                  Slackware Linux, utilizing the power of musl-libc!
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="https://rydanpainting.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/rydanpainting.png"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>Name</i>:{" "}
                  <a
                    href="https://rydanpainting.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://rydanpainting.com
                  </a>
                  <br />
                  <i>Author</i>: beatzz
                  <br />
                  <i>About</i>: Another successful web application :)
                </p>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-2">
                <div className="img-container">
                  <a
                    href="https://github.com/elsheepo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="float-left"
                      src="./img/github.png"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-10 text-left">
                <p>
                  <i>GitHub</i>:{" "}
                  <a
                    href="https://github.com/elsheepo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/elsheepo
                  </a>
                  <br />
                  <i>Author</i>: @elsheepo
                  <br />
                  <i>About</i>: Check out my GitHub repositories! There I have a
                  collection of projects I'll be continually updating.
                </p>
              </div>
            </div>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
