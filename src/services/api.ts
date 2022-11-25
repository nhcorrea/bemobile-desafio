import axios from "axios";

const LOCAL_IP = "192.168.100.7";
const PORT = "4444";

export const api = axios.create({
	baseURL: `http://${LOCAL_IP}:${PORT}`
});