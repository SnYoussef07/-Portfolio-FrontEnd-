import {AT_SKILLS} from "../actions/action-types";

export default function ReducerSkills(state = [], action) {
    switch (action.type) {
        case AT_SKILLS.READ_ALL_SKILL:
            return action.payload;
        default:
            return state;
    }
}