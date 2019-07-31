import React from "react";
import { Jumbotron, Card } from "reactstrap";

export const Links = () => {
  return (
    <React.Fragment>
      <Jumbotron>
        <div className="img-container">
          <img id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
        </div>
        <p className="text-center text-primary varela-round">LINKS</p>
        <Card className="text-left">
          <p>
            <a
              href="http://slackware.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              slackware.com
            </a>
            <br />
            The official Slackware Linux website.
          </p>

          <p>
            <a
              href="https://docs.slackware.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              docs.slackware.com
            </a>
            <br />
            The official Slackware Linux documentation website.
          </p>

          <p>
            <a
              href="https://slackbook.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              slackbook.org
            </a>
            <br />
            The revised Slackware book project.
          </p>

          <p>
            <a
              href="https://slackbuilds.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              slackbuilds.org
            </a>
            <br />A vast repository of software packages built for Slackware
            Linux.
          </p>

          <p>
            <a
              href="https://linuxquestions.org/questions/slackware-14/"
              rel="noopener noreferrer"
              target="_blank"
            >
              linuxquestions.org - Slackware Forum
            </a>
            <br />
            The official forum for the Slackware Linux community.
          </p>

          <p>
            <a
              href="https://w3schools.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              w3schools.com
            </a>
            <br />
            An excellent place to learn web-design.
          </p>

          <p>
            <a
              href="https://wigums.ddns.net/hackware.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              wigums.ddns.net
            </a>
            <br />A mad computer scientist / IRC troll's domain, a domain full
            of mystical hacking resources.
          </p>

          <p>
            <a
              href="https://coderanch.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              coderanch.com
            </a>
            <br />A community of Java developers with tons of experience to
            share.
          </p>

          <p>
            <a
              href="https://www.jetbr /ains.com/idea/"
              rel="noopener noreferrer"
              target="_blank"
            >
              IntelliJ IDEA
            </a>
            <br />
            Capable and Ergonomic IDE for JVM.
          </p>

          <p>
            <a
              href="https://code.visualstudio.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visual Studio Code
            </a>
            <br />
            An incredibly powerful and customizable IDE for a wide variety of
            languages.
          </p>

          <p>
            <a
              href="https://gimp.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              GNU Image Manipulation Program
            </a>
            <br />
            Open-Source image manipulation / graphical design application.
          </p>

          <p>
            <a
              href="https://blender.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blender
            </a>
            <br />
            Open-Source video editor / 3D design application.
          </p>

          <p>
            <a
              href="https://openoffice.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenOffice
            </a>
            <br />
            Open-Source office suite.
          </p>
        </Card>
      </Jumbotron>
    </React.Fragment>
  );
};
