import {BURGER_CLOSE, BURGER_TOGGLE, DROPDOWN_TOGGLE, MODAL_TOGGLE} from "./types";

export const modalToggle = (modalType) => {
    return {
        type: MODAL_TOGGLE,
        payload: {
            modalType: modalType
        }
    }
}

export const toggleBurger = () => {
    return {
        type: BURGER_TOGGLE
    }
}

export const dropdownToggle = (secType) => {
    return {
        type: secType,
    }
}

export const burgerClose = () => {
    return {
        type: BURGER_CLOSE
    }
}