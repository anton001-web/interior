import {BURGER_TOGGLE, DROPDOWN_TOGGLE} from "./types";

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