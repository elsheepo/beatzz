import { LOGIN, LOGOUT } from "./actionTypes";

export const login = () => {
    return {
      type: LOGIN
    }
  };
  
export const logout = () => {
  return {
    type: LOGOUT
  }
}