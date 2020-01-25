import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import ReducerAuth from "./ReducerAuth";
import ReducerSkills from "./ReducerSkills";
import ReducerProjects from "./ReducerProjects";


const rootReducer = combineReducers({
    form: formReducer,
    isAuth: ReducerAuth,
    skills: ReducerSkills,
    projects: ReducerProjects
});

export default rootReducer;