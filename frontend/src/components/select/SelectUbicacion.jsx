import { useEffect, useState } from "react";
import {
  getAllPaises,
  getProvinciasPorPais,
  getCiudadesPorProvincia,
  getAllCiudades,
} from "../../api/ubicacion.api";

function SelectUbicacion({ pais, setPais, provincia, setProvincia, ciudad, setCiudad }) {
  const [paises, setPaises] = useState([]);

  const [provincias, setProvincias] = useState([]);
  const [provinciaDisabled, setProvinciaDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de provincias

  const [ciudades, setCiudades] = useState([]);
  const [ciudadDisabled, setCiudadDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de ciudades

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
      let res = null;
      if (provincia !== "todos") res = await getCiudadesPorProvincia(provincia);
      else res = await getAllCiudades();
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
      <select value={pais} onChange={handlePaisChange}>
        <option value="todos">Países</option>
        {paises.map((paisItem) => (
          <option key={paisItem.codigo} value={paisItem.codigo}>
            {paisItem.nombre}
          </option>
        ))}
      </select>

      <select value={provincia} onChange={handleProvinciaChange} disabled={provinciaDisabled}>
        <option value="todos">Provincias</option>
        {provincias.map((provinciaItem) => (
          <option key={provinciaItem.id} value={provinciaItem.id}>
            {provinciaItem.nombre}
          </option>
        ))}
      </select>

      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} disabled={ciudadDisabled}>
        <option value="todos">Ciudades</option>
        {ciudades.map((ciudadItem) => (
          <option key={ciudadItem.codigo_postal} value={ciudadItem.codigo_postal}>
            {ciudadItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectUbicacion;
