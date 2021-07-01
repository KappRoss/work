import axios from "axios";

let port = 8021;
let host = "http://" + window.location.hostname;

const instance = axios.create({
    baseURL: `${host}:${port}`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
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
        return instance.get(`spd/pubkey-unlockhash`)
            .then(response => response.data)
    },
    postApiRegister(email) {
        return instance.post(`api/register`, {"email": email.toString()})
            .then(response => response.data)
    },
    postResetUnit() {
        return instance.post(`reset`)
    },
    setPorts(hosting_port, secondary_port) {
        return instance.post(`set-ports`, {
            'hosting_port': parseInt(hosting_port),
            'secondary_port': parseInt(secondary_port)
        })
            .then(response => response.data)
    },
    changeEmail(email) {
        return instance.put(`email`, {email})
            .then(response => response.data)
    },
    getIpAddress() {
        return instance.get(`ip`)
            .then(response => response.data)
    },
    getDashboardInfo() {
        return instance.get(`dashboard`)
            .then(response => response.data)
    },
    sendCoins(amount, currency, hash, seed) {
        return instance.post(`send-coins`, {
            "amount": `${parseInt(amount)} ${currency}`,
            "destination": hash,
            "seed": seed
        })
            .then(response => response.data)
    },
    isRegistered() {
        return instance.get(`is-registered`)
            .then(response => response.data)
    },
    getSpeedTestInfo() {
        return instance.get(`speedtest`)
            .then(response => response.data)
    },
    postWallet() {
        return instance.post(`wallet`)
            .then(response => response.data)
    }
}

export default scpApi