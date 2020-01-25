import {AT_PROJECTS} from "../actions/action-types";

export default function ReducerProjects(state = [], action) {
    switch (action.type) {
        case AT_PROJECTS.READ_ALL_PROJECT:
            return action.payload;
        case AT_PROJECTS.CREATE_PROJECT:
            return [...state, action.payload];
        default:
            return state;
    }
}