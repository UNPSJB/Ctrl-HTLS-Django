import axios from 'axios';

const tipoHabitacionApi = axios.create({
  baseURL: 'http://localhost:8000/core/',
});

export const getAllTipoHabitacion = () => tipoHabitacionApi.get('tiposhabitaciones/');
  