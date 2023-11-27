import { client } from "./client";


export const getHoteles = (data) => client.post("hotel/hoteles/disponibilidad/", data);
export const getHotel = (id, data) => client.post(`hotel/hoteles/${id}/full/`, data);