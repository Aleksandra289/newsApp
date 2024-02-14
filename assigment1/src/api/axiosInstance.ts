import axios from "axios";
import { environmentVariables } from "../env/environmentVariables";
const { apiKey, apiUrl, language, includeImage } = environmentVariables;
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  params: {
    apiKey: apiKey,
    image: includeImage,
    language: language
  }
});
