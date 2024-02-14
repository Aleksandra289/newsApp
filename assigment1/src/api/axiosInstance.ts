import axios from "axios";
import { environmentVariables } from "../env/environmentVariables";
const { apiKey } = environmentVariables;
export const axiosInstance = axios.create({
  baseURL: "https://newsdata.io/api/1/news",
  params: {
    apiKey: apiKey,
    image: 1,
    language: "en"
  }
});
