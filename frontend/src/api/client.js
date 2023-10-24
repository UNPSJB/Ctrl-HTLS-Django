import axios from "axios";

// Crear una instancia de axios con la configuración predeterminada
export const client = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "X-Serializer": "full", // item, model, full
  },
});
