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

/* Skill Form */
export function addSkill({name, category}, file) {
    let formData = new FormData();
    formData.append('file', file);
    return function (dispatch) {
        axios.post(`${URL}/skills`, {
            name,
            category
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({type: AT_SKILLS.CREATE_SKILL, payload: response.data});
            axios.post(`${URL}/uploadLogoSkill/${response.data.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: localStorage.getItem("token")
                }
            });
        }).catch(error => {
            console.log(error);
        })
    }
}