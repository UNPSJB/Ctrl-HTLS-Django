import axios from "axios";

const coreApi = axios.create({
  baseURL: "http://localhost:8000/core/",
});

// -------------------- Ubicacion --------------------

export const getAllPaises = () => coreApi.get("paises/");

export const getAllProvincias = () => coreApi.get("provincias/");

export const getAllCiudades = () => coreApi.get("ciudades/");

export const getAllDirecciones = () => coreApi.get("direcciones/");
export const createDireccion = (direccion) => coreApi.post("direcciones/", direccion);

export const getProvinciasPorPais = (codigo) => coreApi.get(`/provincias/?pais=${codigo}`);

export const getCiudadesPorProvincia = (id) => coreApi.get(`ciudades/?provincia=${id}`);

// -------------------- Persona --------------------

export const getAllEncargados = () => coreApi.get("encargados/");
// Estado tiene que ser true (asignados a hotel) o false (sin asignar a hotel)
export const getAllEncargadosAsignados = (estado) =>
  coreApi.get(`encargados/?encargado_asignado=${estado}`);

export const getAllVendedores = () => coreApi.get("vendedores/");

// -------------------- Otros --------------------

export const getAllTipoHabitacion = () => coreApi.get("tiposhabitaciones/");

export const getAllServicios = () => coreApi.get("servicios/");

export const getAllCategorias = () => coreApi.get("categorias/");
