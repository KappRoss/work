import { AUTH_SENDER } from "../CONSTANTS"

const initialState = {
    loading: false,
    login: null,
    password: null
}

export const authReducer = (state = initialState ,actions) => {
    switch (actions.type) {
        case AUTH_SENDER:
            return {
                ...state, login: actions.login, password: actions.password
            }
        default:
            return state
    }
}