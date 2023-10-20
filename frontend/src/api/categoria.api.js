import axios from 'axios';

const categoriaApi = axios.create({
  baseURL: 'http://localhost:8000/core/',
});

export const getAllCategorias = () => categoriaApi.get('categorias/');