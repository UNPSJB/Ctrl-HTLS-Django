import { useEffect, useState } from "react";
import {
  getAllHotels,
  getHotelesPorPais,
  getHotelesPorProvincia,
  getHotelesPorCiudad,
} from "../api/hotel.api";
import { getAllPaises, getProvinciasPorPais, getCiudadesPorProvincia } from "../api/ubicacion.api";
import SelectUbicacion from "./SelectUbicacion";

export default function HotelList() {
  const [hoteles, setHoteles] = useState([]);
  const [pais, setPais] = useState("todos"); // Inicialmente se muestran todos los hoteles
  const [paises, setPaises] = useState([]);

  const [provincias, setProvincias] = useState([]);
  const [provincia, setProvincia] = useState("todos");
  const [provinciaDisabled, setProvinciaDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de provincias

  const [ciudades, setCiudades] = useState([]);
  const [ciudad, setCiudad] = useState("todos");
  const [ciudadDisabled, setCiudadDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de ciudades

  // Listado de Hoteles según el país, provincia o ciudad seleccionada
  useEffect(() => {
    async function loadHotels() {
      let res = null;
      if (ciudad !== "todos") res = await getHotelesPorCiudad(ciudad);
      else if (provincia !== "todos") res = await getHotelesPorProvincia(provincia);
      else if (pais !== "todos") res = await getHotelesPorPais(pais);
      else res = await getAllHotels();
      setHoteles(res.data);
    }
    loadHotels();
  }, [pais, provincia, ciudad]);

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
      const res = await getProvinciasPorPais(pais);
      setProvincias(res.data);
    }
    loadProvincias();
  }, [pais]);

  // Obtener la lista de ciudades segun la Provincia seleccionada
  useEffect(() => {
    async function loadCiudades() {
      const res = await getCiudadesPorProvincia(provincia);
      setCiudades(res.data);
    }
    loadCiudades();
  }, [provincia]);

  // Función para manejar el cambio de selección de país
  const handlePaisChange = (e) => {
    const selectedPais = e.target.value;
    setPais(selectedPais);

    // Habilitar o deshabilitar el select de provincias si se selecciona un país
    setProvinciaDisabled(selectedPais === "todos");
    setCiudadDisabled(true); // Deshabilitar el select de ciudades cuando cambie el país

    // Reiniciar la selección de provincia y ciudad si se cambia el país a "todos"
    if (selectedPais === "todos") {
      setProvincia("todos");
      setCiudad("todos");
    }
  };

  // Función para manejar el cambio de selección de provincia
  const handleProvinciaChange = (e) => {
    const selectedProvincia = e.target.value;
    setProvincia(selectedProvincia);

    // Habilitar o deshabilitar el select de ciudades si se selecciona una provincia
    setCiudadDisabled(selectedProvincia === "todos");

    // Reiniciar la selección de ciudad si se cambia la provincia a "todos"
    if (selectedProvincia === "todos") {
      setCiudad("todos");
    }
  };

  return (
    <div>
      <SelectUbicacion
        pais={pais}
        paises={paises}
        provincia={provincia}
        provincias={provincias}
        ciudad={ciudad}
        ciudades={ciudades}
        setCiudad={setCiudad}
        provinciaDisabled={provinciaDisabled}
        ciudadDisabled={ciudadDisabled}
        handlePaisChange={handlePaisChange}
        handleProvinciaChange={handleProvinciaChange}
      />

      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
        </div>
      ))}
    </div>
  );
}
