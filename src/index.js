import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import "./js/common";

import App from './App';
import NavBar from "./components/navbar";
import Updates from "./components/updates";
import Footer from "./components/footer";
import Privacy from "./components/privacy";
import Signup from "./components/signup";
import Login from "./components/login";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<NavBar />, document.getElementById("navbarRoot"));
ReactDOM.render(<Updates />, document.getElementById("jumbotronRoot"));
ReactDOM.render(<Footer />, document.getElementById("footerRoot"));

ReactDOM.render(<Login />, document.getElementById("loginRoot"));
ReactDOM.render(<Signup />, document.getElementById("signupRoot"));
ReactDOM.render(<Privacy />, document.getElementById("privacyRoot"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
