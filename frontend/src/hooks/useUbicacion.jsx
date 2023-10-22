import { useState, useEffect } from "react";
import {
  getAllPaises,
  getProvinciasPorPais,
  getCiudadesPorProvincia,
  getAllCiudades,
} from "../api/core.api";

export default function useUbicacion() {
  const [pais, setPais] = useState("todos");
  const [provincia, setProvincia] = useState("todos");
  const [ciudad, setCiudad] = useState("todos");

  const [paises, setPaises] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  // Obtener la lista de paises
  useEffect(() => {
    async function loadPaises() {
      const res = await getAllPaises();
      setPaises(res.data);
    }
    loadPaises();
  }, []);

  // Obtener la lista de provincias segun el Pais seleccionado
  useEffect(() => {
    async function loadProvincias() {
      if (pais !== "todos") {
        const res = await getProvinciasPorPais(pais);
        setProvincias(res.data);
      } else {
        setProvincias([]);
      }
    }
    loadProvincias();
  }, [pais]);

  // Obtener la lista de ciudades segun la Provincia seleccionada
  useEffect(() => {
    async function loadCiudades() {
      if (provincia !== "todos") {
        const res = await getCiudadesPorProvincia(provincia);
        setCiudades(res.data);
      } else {
        const res = await getAllCiudades();
        setCiudades(res.data);
      }
    }
    loadCiudades();
  }, [provincia]);

  return {
    pais,
    setPais,
    provincia,
    setProvincia,
    ciudad,
    setCiudad,
    paises,
    provincias,
    ciudades,
  };
}
