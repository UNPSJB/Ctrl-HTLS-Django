import { client } from "./client";


export const getHoteles = (data) => client.post("hotel/hoteles/disponibilidad/", data);
export const getHotel = (id, data) => client.post(`hotel/hoteles/${id}/full/`, data);

//http://localhost:8000/hotel/hoteles/1/tarifar/
export const tarifar = (id,data) => client.post(`hotel/hoteles/${id}/tarifar/`, data)