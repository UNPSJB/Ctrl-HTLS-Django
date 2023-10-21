import axios from "axios";

const hotelApi = axios.create({
  baseURL: "http://localhost:8000/hotel/",
});

// -------------------- Hotel --------------------

export const getAllHoteles = () => hotelApi.get("hoteles/");
export const getHotel = (id) => hotelApi.get(`hoteles/${id}`);
export const createHotel = (hotel) => hotelApi.post("hoteles/", hotel);
export const deleteHotel = (id) => hotelApi.delete(`hoteles/${id}`);
export const updateHotel = (id, hotel) => hotelApi.put(`hoteles/${id}`, hotel);

export const getHotelesPorPais = (codigo) => hotelApi.get(`hoteles/?pais=${codigo}`);

export const getHotelesPorProvincia = (id) => hotelApi.get(`hoteles/?provincia=${id}`);

export const getHotelesPorCiudad = (codigo_postal) =>
  hotelApi.get(`/hoteles/?ciudad=${codigo_postal}`);

// -------------------- Habitacion --------------------

export const getAllHabitaciones = () => hotelApi.get("/habitaciones/");
export const getHabitacion = (id) => hotelApi.get(`habitaciones/${id}`);
export const createHabitacion = (habitacion) => hotelApi.post("habitaciones/", habitacion);
export const deleteHabitacion = (id) => hotelApi.delete(`habitaciones/${id}`);
export const updateHabitacion = (id, habitacion) => hotelApi.put(`habitaciones/${id}`, habitacion);
