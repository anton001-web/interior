import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {ddMenuReducer} from "./ddMenuReducer";

export const rootReducer = combineReducers({
    burger: burgerReducer,
    dropdown: ddMenuReducer
})