import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import ReducerAuth from "./ReducerAuth";


const rootReducer = combineReducers({
    form: formReducer,
    isAuth: ReducerAuth,
});

export default rootReducer;