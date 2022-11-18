import {MODAL_TOGGLE} from "../types";

const initialState = {
    visible: false,
    type: 'undefined'
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_TOGGLE:
            return {...state, visible: !state.visible, type: action.payload.modalType}
        default:
            return state
    }
}