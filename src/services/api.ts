import axios from "axios"
import { LOCAL_HOST, PORT } from "@env"

export const api = axios.create({
	baseURL: `http://${LOCAL_HOST}:${PORT}`
})