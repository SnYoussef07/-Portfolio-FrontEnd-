import {AT_AUTH} from "../actions/action-types";

export default function ReducerAuth(state = 0, action) {
    switch (action.type) {
        case AT_AUTH.SET_AUTHENTICATION:
            return action.payload;
        default:
            return state;
    }
}