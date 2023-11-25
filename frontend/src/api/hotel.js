import { client } from "./client";


export const getHoteles = (data) => client.post("hotel/hoteles/disponibilidad/", data);
