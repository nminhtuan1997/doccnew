import hobbyReducer from "./hobby";
import {combineReducers} from "redux"
import {useReducer} from "react";

const rootReducer= combineReducers({
            hobby:hobbyReducer,
})
export default rootReducer;