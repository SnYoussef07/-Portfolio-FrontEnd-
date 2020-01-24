import axios from "axios"
import {AT_PROJECTS, AT_SKILLS, AT_AUTH} from "./action-types";

const URL = "http://localhost:8080";

export function setAuthentication(mode) {
    return {
        type: AT_AUTH.SET_AUTHENTICATION,
        payload: mode
    };
}

export function loginUser({username, password}) {
    return function (dispatch) {
        axios.post(`${URL}/login`, {username, password}).then(response => {
            localStorage.setItem("token", response.headers.authorization);
            dispatch(setAuthentication(1));
        }).catch(error => {
            dispatch(setAuthentication(2));
        })
    }
}