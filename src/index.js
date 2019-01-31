import React from "react";
import ReactDOM from "react-dom";
import Redux from "redux";
import ReactRedux from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";



const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let INIT_STATE = false;

const login = () => {
  return {
    type: LOGIN
  }
};

const logout = () => {
  return {
    type: LOGOUT
  }
}

const loginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return !state;
    case LOGOUT:
      return !state;
    default:
      return state;
  }
};

const store = Redux.createStore(loginReducer);

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = (state) => {
    return {messages: state}
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginUser: () => {
        dispatch(login())
      }
    }
  };

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Container/>
        </Provider>
      );
    }
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWrapper />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("I told you it would work!");
