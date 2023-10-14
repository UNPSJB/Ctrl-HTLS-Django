import axios from 'axios';

const ubicacionApi = axios.create({
  baseURL: 'http://localhost:8000/ubicacion/',
});

export const getAllPaises = () => ubicacionApi.get('paises/');

export const getAllProvincias = () => ubicacionApi.get('provincias/')

export const getAllCiudades = () => ubicacionApi.get('ciudades/')

export const getProvinciasPorPais = (codigo) => ubicacionApi.get(`/provincias/?pais=${codigo}`)

export const getCiudadesPorProvincia = (id) => ubicacionApi.get(`ciudades/?provincia=${id}`)