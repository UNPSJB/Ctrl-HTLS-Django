import { useState, useEffect } from "react";

import api from "../api"

export default function useUbicacion() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [paises, setPaises] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  // Obtener la lista de paises
  useEffect(() => {
    async function loadPaises() {
      const res = await api.allPaises();
      setPaises(res);
    }
    loadPaises();
  }, []);

  // Obtener la lista de provincias segun el Pais seleccionado
  useEffect(() => {
    async function loadProvincias() {
      if (pais !== "") {
        const res = await api.findProvincias({pais});
        setProvincias(res);
      } else {
        setProvincias([]);
      }
    }
    loadProvincias();
  }, [pais]);

  // Obtener la lista de ciudades segun la Provincia seleccionada
  useEffect(() => {
    async function loadCiudades() {
      if (provincia !== "") {
        const res = await api.findCiudades({provincia});
        setCiudades(res);
      } else {
        const res = await api.allCiudades();
        setCiudades(res);
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
