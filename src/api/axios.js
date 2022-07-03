import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    data => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    data => {
      return JSON.parse(data);
    },
  ],
});
