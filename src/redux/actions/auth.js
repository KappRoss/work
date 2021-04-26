import {AUTH_LOAD_OFF, AUTH_LOAD_ON, GET_APPLIANCE, GET_APPLIANCE_STATUS} from '../CONSTANTS.js'
import scpApi from "../../api";

export const getAppliance = () => {
    return async dispatch => {
        dispatch({type: AUTH_LOAD_ON})
        try {
            await scpApi.getAppliance()
            dispatch({type: GET_APPLIANCE, isFirstTime: false})
            dispatch({type: AUTH_LOAD_OFF})
        } catch(err) {
            dispatch({type: GET_APPLIANCE, isFirstTime: true}) //  failed to fetch
        }
    }
}

export const getApplianceStatus = () => {
    return async dispatch => {
        let response = await scpApi.getApplianceStatus()
        let synced = response.synced
        let block_height = response.block_height
        dispatch({type: GET_APPLIANCE_STATUS, synced, block_height})
    }
}