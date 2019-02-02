import { LOGIN, LOGOUT } from "./actionTypes";

let initialState = false;

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return true;
      case LOGOUT:
        return false;
      default:
        return state;
    }
  };

export default rootReducer;