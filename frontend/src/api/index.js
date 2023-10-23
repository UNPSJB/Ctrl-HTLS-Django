import {client} from "./client";

const ENDPOINTS = [
    ["hotel", "hotel", "hoteles"], 
    ["hotel", "habitacion", "habitaciones"],
];

const handleResponse = (resp) => resp.data;
const handleError = (error) => {console.log(error); return "error";};

const crud = ENDPOINTS.reduce((acc, endpoint) => {
  const [app, singular, plural] = endpoint;
  const titleSingular = singular[0].toUpperCase() + singular.substring(1); 
  const titlePlural = plural[0].toUpperCase() + plural.substring(1); 
  return Object.assign(acc, {
    [`all${titlePlural}`]: () => client.get(`${app}/${plural}`).then(handleResponse).catch(handleError),
    [`get${titleSingular}`]: (id) => client.get(`${app}/${plural}/${id}`).then(handleResponse).catch(handleError),
    [`create${titleSingular}`]: (data) => client.post(`${app}/${plural}/${id}`, data).then(handleResponse).catch(handleError),
    [`update${titleSingular}`]: (data) => client.put(`${app}/${plural}/${id}`, data).then(handleResponse).catch(handleError),
    [`find${titlePlural}`]: (data) => client.get(`${app}/${plural}`, {params: data}).then(handleResponse).catch(handleError),
  });
}, {});

export default crud;