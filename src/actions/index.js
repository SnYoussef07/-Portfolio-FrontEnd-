import axios from "axios"
import {AT_PROJECTS, AT_SKILLS, AT_AUTH} from "./action-types";

const URL = "http://194.32.76.217:8080";

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
            }).then(response => {

            }).catch(err => {
                console.log(err)
            });
        }).catch(error => {
            console.log(error);
        })
    }
}

/*Skill get all */
export function getAllSkills() {
    return function (dispatch) {
        axios.get(`${URL}/skills`).then(response => {
            dispatch({type: AT_SKILLS.READ_ALL_SKILL, payload: response.data});
        })
    }
}

/* Skill Form */
export function addProject({name, link}, file, skills) {
    let formData = new FormData();
    formData.append('file', file);
    return function (dispatch) {
        axios.post(`${URL}/projects`, {
            name,
            link,
            skills
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({type: AT_PROJECTS.CREATE_PROJECT, payload: response.data});
            axios.post(`${URL}/uploadImageProject/${response.data.id}`, formData, {
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

/*project get all */
export function getAllProject() {
    return function (dispatch) {
        axios.get(`${URL}/projects`).then(response => {
            dispatch({type: AT_PROJECTS.READ_ALL_PROJECT, payload: response.data});
        })
    }
}

export function getAllProjectByCat(cat) {
    return function (dispatch) {
        axios.get(`${URL}/projects`).then(response => {
            let projectFilter = [];
            projectFilter = response.data.filter(project => {
                let isIn = false;
                project.skills.map(skill => {
                    if (skill.name === cat) {
                        isIn = true;
                    }
                    return skill;
                });
                return isIn;
            });
            dispatch({type: AT_PROJECTS.READ_ALL_PROJECT, payload: projectFilter});
        })

    }
}

/* Form Contact */
export function sendEmail({name, email, text}) {
    return function (dispatch) {
        let to = "snoussiyoussef@live.fr";
        let subject = "De " + name + " , Email : " + email;

        axios.post(`${URL}/sendEmail`, {to, subject, text});
    }
}
