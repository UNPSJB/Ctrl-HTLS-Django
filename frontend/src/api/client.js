import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "X-Serializer": "full" // item, model, full
  }
});
