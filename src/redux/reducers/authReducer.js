import {AUTH_LOAD_OFF, AUTH_LOAD_ON, GET_APPLIANCE, GET_APPLIANCE_STATUS} from "../CONSTANTS"

const initialState = {
    loading: true,
    isFirstTime: false, //true
    synced: false,
    block_height: null
}

export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case AUTH_LOAD_ON:
            return {
                ...state, loading: true
            }
        case AUTH_LOAD_OFF:
            return {
                ...state, loading: false
            }
        case GET_APPLIANCE:
            return {
                ...state, isFirstTime: actions.isFirstTime
            }
        case GET_APPLIANCE_STATUS:
            return {
                ...state, synced: actions.synced, block_height: actions.block_height
            }
        default:
            return state
    }
}