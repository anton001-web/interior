import {BURGER_CLOSE, BURGER_TOGGLE} from "../types";

const initialState = {
    visible: false
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BURGER_TOGGLE:
            return {...state, visible: !state.visible}
        case BURGER_CLOSE:
            return {...state, visible: false}
        default:
            return state
    }
}