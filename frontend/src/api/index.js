import { client } from "./client";

// Definir los endpoints de la API
const ENDPOINTS = [
  ["hotel", "hoteles"],
  ["hotel", "habitaciones"],
  ["core", "paises"],
  ["core", "provincias"],
  ["core", "ciudades"],
  ["core", "direcciones"],
  ["core", "categorias"],
  ["core", "vendedores"],
  ["core", "encargados"],
  ["core", "tiposhabitaciones"],
];

// Manejar los errores de la API
const handleError = (error) => {
  console.error(error);
  throw error;
};

// Manejar la respuesta de la API
const resHandler = (resp) => {
  // Verificar si la respuesta es valida
  if (resp && resp.data) return resp.data;

  throw new Error("Respuesta de API no valida");
};

// Crear las funciones CRUD para cada endpoint
const crud = ENDPOINTS.reduce((acc, [app, plural]) => {
  const apiPath = `${app}/${plural}`;

  const apiMethods = {
    getAll: (view = "") => client.get(`${apiPath}/${view}`).then(resHandler).catch(handleError),
    get: (id, view = "") =>
      client.get(`${apiPath}/${id}/${view}`).then(resHandler).catch(handleError),
    create: (data) => client.post(`${apiPath}/`, data).then(resHandler).catch(handleError),
    update: (id, data) => client.put(`${apiPath}/${id}/`, data).then(resHandler).catch(handleError),
    delete: (id) => client.delete(`${apiPath}/${id}`).then(resHandler).catch(handleError),
    find: (data) => client.get(`${apiPath}/`, { params: data }).then(resHandler).catch(handleError),
  };

  return { ...acc, [plural]: apiMethods };
}, {});

export default crud;
