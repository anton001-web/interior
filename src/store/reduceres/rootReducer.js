import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {ddMenuReducer} from "./ddMenuReducer";
import {modalToggle} from "../actions";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
    burger: burgerReducer,
    dropdown: ddMenuReducer,
    modal: modalReducer
})