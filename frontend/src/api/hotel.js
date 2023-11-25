import { client } from "./client";


export const getHoteles = (data) => {
    // console.log(data);
    client.post("hotel/hoteles/disponibilidad/", data);
}