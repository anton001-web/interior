import {DROPDOWN_CLOSE, DROPDOWN_TOGGLE} from "../types";

const initialState = {
    visible: false
}

export const ddMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case DROPDOWN_TOGGLE:
            return {...state, visible: !state.visible}
        case DROPDOWN_CLOSE:
            return {...state, visible: false}
        default:
            return state
    }
}