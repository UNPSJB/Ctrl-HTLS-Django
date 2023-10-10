import axios from 'axios';

const paisApi = axios.create({
  baseURL: 'http://localhost:8000/ubicacion/',
});

const getAllPaises = () => paisApi.get('paises/');

export default getAllPaises;
