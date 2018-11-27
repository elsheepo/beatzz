import React, { Component } from 'react';
import { Jumbotron, Card } from 'reactstrap';

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="img-container">
            <img id="blacksheep" src="img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-center text-primary varela-round">LINKS</p>
          <Card className="text-left">
            <p><a href="http://slackware.com" rel="noopener noreferrer" target="_blank"><u>slackware.com</u></a><br />
                  The official Slackware Linux website.</p>

            <p><a href="https://docs.slackware.com" rel="noopener noreferrer" target="_blank"><u>docs.slackware.com</u></a><br />
                  The official Slackware Linux documentation website.</p>

            <p><a href="https://slackbook.org/" rel="noopener noreferrer" target="_blank"><u>slackbook.org</u></a><br />
                  The revised Slackware book project.</p>

            <p><a href="https://slackbuilds.org" rel="noopener noreferrer" target="_blank"><u>slackbuilds.org</u></a><br />
                  A vast repository of software packages built for Slackware Linux.</p>

            <p><a href="https://linuxquestions.org/questions/slackware-14/" rel="noopener noreferrer" target="_blank"><u>linuxquestions.org - Slackware Forum</u></a><br />
                  The official forum for the Slackware Linux community.</p>

            <p><a href="https://w3schools.com/" rel="noopener noreferrer" target="_blank"><u>w3schools.com</u></a><br />
                  An excellent place to learn web-design.</p>

            <p><a href="https://wigums.ddns.net/hackware.html" rel="noopener noreferrer" target="_blank"><u>wigums.ddns.net</u></a><br />
                  A mad computer scientist / IRC troll's domain, a domain full of mystical hacking resources.</p>

            <p><a href="https://coderanch.com/" rel="noopener noreferrer" target="_blank"><u>coderanch.com</u></a><br />
                  A community of Java developers with tons of experience to share.</p>

            <p><a href="https://www.jetbr /ains.com/idea/" rel="noopener noreferrer" target="_blank"><u>IntelliJ IDEA</u></a><br />
                  Capable and Ergonomic IDE for JVM.</p>

            <p><a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank"><u>Visual Studio Code</u></a><br />
                  An incredibly powerful and customizable IDE for a wide variety of languages.</p>

            <p><a href="https://gimp.org/" rel="noopener noreferrer" target="_blank"><u>GNU Image Manipulation Program</u></a><br />
                  Open-Source image manipulation / graphical design application.</p>

            <p><a href="https://blender.org/" rel="noopener noreferrer" target="_blank"><u>Blender</u></a><br />
                  Open-Source video editor / 3D design application.</p>

            <p><a href="https://openoffice.org/" rel="noopener noreferrer" target="_blank"><u>OpenOffice</u></a><br />
                  Open-Source office suite.</p>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Links;
