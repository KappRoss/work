import scpApi from "../../api";
import {GET_SEED_PAB_KEY, POST_EMAIL} from "../CONSTANTS";

export const getSeedPubKey = () => {
    return async dispatch => {
        let response = await scpApi.getSeedPubKey()
        dispatch({type: GET_SEED_PAB_KEY, response})
    }
}

export const postApiRegister = (email) => {
    return async dispatch => {
        await scpApi.postApiRegister(email)
        dispatch({type: POST_EMAIL, email})
    }
}