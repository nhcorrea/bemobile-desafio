import axios from "axios";

export const api = axios.create({
    // SEU IP LOCAL:4444
    baseURL: 'http://192.168.100.7:4444'
})