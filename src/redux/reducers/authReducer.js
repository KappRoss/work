import { AUTH_SENDER } from "../CONSTANTS"

const initialState = {
    loading: false,
    password: null
}

export const authReducer = (state = initialState ,actions) => {
    switch (actions.type) {
        case AUTH_SENDER:
            return {
                ...state, password: actions.password
            }
        default:
            return state
    }
}