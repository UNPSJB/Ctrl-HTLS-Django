import axios from "axios";

const hotelApi = axios.create({
  baseURL: "http://localhost:8000/hotel/hoteles",
});

export const getAllHotels = () => hotelApi.get("/");

export const getHotel = (id) => hotelApi.get(`/${id}`);

export const createHotel = (hotel) => hotelApi.post("/", hotel);

export const deleteHotel = (id) => hotelApi.delete(`/${id}`);

export const updateHotel = (id, hotel) => hotelApi.put(`/${id}`, hotel);

export const getHotelesPorPais = (codigo) => hotelApi.get(`/?pais=${codigo}`);

export const getHotelesPorProvincia = (id) => hotelApi.get(`/?provincia=${id}`);

export const getHotelesPorCiudad = (codigo_postal) => hotelApi.get(`/?ciudad=${codigo_postal}`);
