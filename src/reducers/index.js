import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import ReducerAuth from "./ReducerAuth";
import ReducerSkills from "./ReducerSkills";


const rootReducer = combineReducers({
    form: formReducer,
    isAuth: ReducerAuth,
    skills: ReducerSkills
});

export default rootReducer;