import {AUTH_LOAD_ON, AUTH_SENDER} from '../CONSTANTS.js'

export const auth = ( password) => {
    return dispath => {
        dispath({type: AUTH_LOAD_ON})
        //const responce = await axios.post('localhost:8021/api/register')
        dispath({type: AUTH_SENDER, password})
    }
}