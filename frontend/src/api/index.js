import { client } from "./client";

// Definir los endpoints de la API
const ENDPOINTS = [
  ["hotel", "hotel", "hoteles"],
  ["hotel", "habitacion", "habitaciones"],
];

// Manejar la respuesta de la API
const handleResponse = (resp) => {
  // Verificar si la respuesta es valida
  if (resp && resp.data) return resp.data;

  throw new Error("Respuesta de API no valida");
};

// Manejar los errores de la API
const handleError = (error) => {
  console.log(error);
  return "error";
};

// Crear las funciones CRUD para cada endpoint
const crud = ENDPOINTS.reduce((acc, [app, singular, plural]) => {
  const titleSingular = `${singular[0].toUpperCase()}${singular.substring(1)}`;
  const titlePlural = `${plural[0].toUpperCase()}${plural.substring(1)}`;
  return {
    ...acc,
    [`all${titlePlural}`]: () =>
      client.get(`${app}/${plural}`).then(handleResponse).catch(handleError),
    [`get${titleSingular}`]: (id) =>
      client.get(`${app}/${plural}/${id}`).then(handleResponse).catch(handleError),
    [`create${titleSingular}`]: (data) =>
      client.post(`${app}/${plural}`, data).then(handleResponse).catch(handleError),
    [`update${titleSingular}`]: (id, data) =>
      client.put(`${app}/${plural}/${id}`, data).then(handleResponse).catch(handleError),
    [`find${titlePlural}`]: (data) =>
      client.get(`${app}/${plural}`, { params: data }).then(handleResponse).catch(handleError),
  };
}, {});

export default crud;
