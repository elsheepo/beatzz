import React, { Component } from "react";
import { Jumbotron, Card } from "reactstrap";

export default class Updates extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="img-container">
            <img id="blacksheep" src="./img/blacksheep.png" alt="blacksheep" />
          </div>
          <p className="text-primary varela-round">UPDATES</p>
          {/* prettier-ignore */}
          <Card>
            <p><u><b>10/30/2018</b></u><br />Migration to <a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank">react-bootstrap</a> finished, only to realize I want to use  <a href="https://material-ui.com/" rel="noopener noreferrer" target="_blank">material-ui</a> now instead :p. Forms will be temporarily down while I rewrite the back end with <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">Node.js</a>. I'll be taking a month off from development to prepare for the <a href="https://www.jlpt.jp/e/" rel="noopener noreferrer" target="_blank">JLPT</a>, wish me luck! See you again in December! -beatzz</p>
            <p><u><b>10/13/2018</b></u><br />Began the migration to <a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank">react-bootstrap</a>. -beatzz</p>
            <p><u><b>10/7/2018</b></u><br />Today marks another milestone achievement for beatzz.co! The entire site has been rebuilt upon the <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React framework</a>, plus all of this sites JavaScript, JSX, and SCSS, & HTML are minified & bundled using <a href="https://webpack.js.org" rel="noopener noreferrer" target="_blank">webpack</a>, resulting in faster loading times. Which is to say, beatzz.co is now built using the same tools and standards as the most popular sites on the web such as <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">Facebook</a>, <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">Instagram</a>, <a href="https://www.netflix.com" rel="noopener noreferrer" target="_blank">Netflix</a>, <a href="https://www.paypal.com/us/home" rel="noopener noreferrer" target="_blank">paypal</a>, and <a href="https://www.airbnb.com" rel="noopener noreferrer" target="_blank">Airbnb</a> to name a few.  -beatzz</p>
            <p><u><b>10/2/2018</b></u><br />beatzz.co saw major improvements on the back end today. Now coming to you with <a href="https://en.wikipedia.org/wiki/SHA-2" rel="noopener noreferrer" target="_blank">SHA 256 bit encryption</a>, all data passed between you and this server is secure.  -beatzz</p>
            <p><u><b>9/22/2018</b></u><br />After taking some time off from web-development to obtain <a href="https://www.youracclaim.com/users/eric-arnold.668d4205" rel="noopener noreferrer" target="_blank">my Java 8 Programmer-OCA</a>, I'm back with a ton of new projects and technologies to work with! Check out <a href="./hackware/index.html" rel="noopener noreferrer" target="_blank">Hackware's site</a> which is currently under development, some of my Java projects on <a href="https://github.com/elsheepo" rel="noopener noreferrer" target="_blank">GitHub</a> and stay tuned, lots of things happening here in the next few weeks!  -beatzz</p>
            <p><u><b>4/15/2018</b></u><br />After three long weeks struggling to understand and implement <a href="https://webpack.js.org/" rel="noopener noreferrer" target="_blank">Webpack</a>, I finally have an update for you all. All of this sites JavaScript, JSX, and CSS are now bundled and minified, resulting in faster loading times and an overall more efficient site!  -beatzz</p>
            <p><u><b>3/27/2018</b></u><br />New design in the works, looking into <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap 4</a>, <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">SCSS</a>, <a href="https://webpack.js.org/" rel="noopener noreferrer" target="_blank">webpack</a>, and <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">Node.js</a>. Might be a while before I have this hashed out so hang tight.  -beatzz</p>
            <p><u><b>2/23/2018</b></u><br />Finished the validation for all forms, & implemented JSON. I've added a ton of new JavaScript & PHP over the past week, also started using <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">VS Code</a> as an IDE. I'm going to spend a few days cleaning up said JavaScript/PHP & familiarize myself with VS Code.  -beatzz</p>
            <p><u><b>2/18/2018</b></u><br />Finished the JavaScript validation for the login form, and started implementing <a href="https://www.json.org/" rel="noopener noreferrer" target="_blank">JSON</a> encoding for client/server data transfers.  -beatzz</p>
            <p><u><b>2/12/2018</b></u><br />Over the three day weekend, I was able to knock out some <a href="https://reactiveraven.github.io/jqBootstrapValidation/" rel="noopener noreferrer" target="_blank">jqBootstrapValidation</a> for the contact, sign-up, & login forms!  -beatzz</p>
            <p><u><b>2/8/2018</b></u><br />After 2 weeks of extensive CSS revisions, the site now displays beautifully on small devices (cell phones), tablets, and desktop displays.  -beatzz</p>
            <p><u><b>1/21/2018</b></u><br />Converted all the database mySQLi to PDO, upgraded to Modal login & sign-up forms, and did some back end administrative tasks to the server. Next up, JavaScript for the login & sign-up forms.  -beatzz</p>
            <p><u><b>1/7/2018</b></u><br />Forbid all the sub-directories within the Document Root, was stuck on that for over a week!! Next up, going to convert all the MySQL queries to <a href="http://php.net/manual/en/book.pdo.php" rel="noopener noreferrer" target="_blank">PDO</a> for an injection free environment :) Oh, and happy New Year!!  -beatzz</p>
            <p><u><b>12/30/2017</b></u><br />Finished the sign-up & login form's PHP along with the <a href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank">MySQL</a> database on the backend, which was the goal for this vacation holiday! :)  -beatzz</p>
            <p><u><b>12/20/2017</b></u><br />Configured the JavaScript & PHP for the Contact form, minimized CSS, added HTML5 shiv, & removed some unnecessary scripts leftover from the previous layout.  -beatzz</p>
            <p><u><b>12/19/2017</b></u><br />Finished the site's HTML & CSS for now, moving on to JavaScript & PHP to get the forms operational. Stay tuned ;)  -beatzz</p>
            <p><u><b>12/18/2017</b></u><br />Worked on the HTML and CSS, dialed in the sticky footer & the collapsed navigation menu.  -beatzz</p>
            <p><u><b>12/17/2017</b></u><br />Animated the collapsed navigation menu button.  -beatzz</p>
          </Card>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
