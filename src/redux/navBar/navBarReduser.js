import {theme_toggle} from './navBarActionTypes'


const initialState = {
    themeButton: false,
}

export function navBarReduser(state = initialState, action) {

    switch (action.type) {
        case theme_toggle:
            return {
                ...state,
                themeButton: !state.themeButton
            }

        default:
            return state;
    }
}