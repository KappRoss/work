import {GET_SEED_PAB_KEY, POST_EMAIL} from "../CONSTANTS";

const initialState = {
    seed: null,
    public_key: null,
    unlock_hash: null,
    email: null
}

export const settingsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_SEED_PAB_KEY:
            return {
                ...state,
                seed: actions.response.seed,
                public_key: actions.response.public_key ,
                unlock_hash: actions.response.unlock_hash
            }
        case POST_EMAIL:
            return {
                ...state,
                email: actions.email
            }
        default:
            return state
    }
}