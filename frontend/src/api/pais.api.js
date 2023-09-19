import axios from 'axios';

const paisApi = axios.create({
  baseURL: 'http://localhost:8000/api/paises/',
});

const getAllPaises = () => paisApi.get('/');

export default getAllPaises;
