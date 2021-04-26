import axios from "axios";

let port = 8021

const instance = axios.create({
    baseURL: `http://localhost:${port}/`,
    // withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

const scpApi = {
    getAppliance() {
        return instance.get(`appliance`)
            .then(response => response.data)
    },
    getApplianceStatus() {
        return instance.get(`status`)
            .then(response => response.data)
    },
    getSeedPubKey() {
        return instance.get(`spd/seed-pubkey`)
            .then(response => response.data)
    },
    postApiRegister(email) {
        return instance.post(`api/register`, {email})
            .then(response => response.data)
    }
}

export default scpApi