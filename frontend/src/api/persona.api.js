import axios from 'axios';

const encargadosApi = axios.create({
  baseURL: 'http://localhost:8000/core',
});

export const getAllEncargados = () => encargadosApi.get('encargados/');