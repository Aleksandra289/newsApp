import axios from "axios";
import { config } from "../config/config";
const apiKey = import.meta.env.VITE_APP_API_KEY;
const { apiUrl, language, includeImage } = config;
export const axiosInstance = axios.create({
  baseURL: `${apiUrl}?apikey=${apiKey}&image=${includeImage}&language=${language}`
});
