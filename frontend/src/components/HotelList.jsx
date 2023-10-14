import { useEffect, useState } from 'react';
import { getAllHotels, getHotelesPorPais, getHotelesPorProvincia, getHotelesPorCiudad } from '../api/hotel.api';
import { getAllPaises, getProvinciasPorPais, getAllCiudades } from '../api/ubicacion.api';

export default function HotelList() {
  const [hoteles, setHoteles] = useState([]);
  const [pais, setPais] = useState('todos'); // Inicialmente se muestran todos los hoteles
  const [paises, setPaises] = useState([]);

  const [provincias, setProvincias] = useState([]);
  const [provincia, setProvincia] = useState('todos');
  const [provinciaDisabled, setProvinciaDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de provincias

  const [ciudades, setCiudades] = useState([]);
  const [ciudad, setCiudad] = useState('todos');
  const [ciudadDisabled, setCiudadDisabled] = useState(true); // Estado para habilitar/deshabilitar el select de ciudades
  
  // Listado de Hoteles según el país, provincia o ciudad seleccionada
  useEffect(() => {
    async function loadHotels() {
      let res = null;

      if (ciudad !== 'todos') res = await getHotelesPorCiudad(ciudad);
      else if (provincia !== 'todos') res = await getHotelesPorProvincia(provincia);
      else if (pais !== 'todos') res = await getHotelesPorPais(pais);
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

  // Obtener la lista de ciudades
  useEffect(() => {
    async function loadCiudades() {
      const res = await getAllCiudades();
      setCiudades(res.data);
    }

    loadCiudades();
  }, []);

  // Función para manejar el cambio de selección de país
  const handlePaisChange = (e) => {
    const selectedPais = e.target.value;
    setPais(selectedPais);
    
    // Habilitar o deshabilitar el select de provincias si se selecciona un país
    setProvinciaDisabled(selectedPais === 'todos');
    setCiudadDisabled(true); // Deshabilitar el select de ciudades cuando cambie el país
    
    // Reiniciar la selección de provincia y ciudad si se cambia el país a "todos"
    if (selectedPais === 'todos') {
      setProvincia('todos');
      setCiudad('todos');
    }
  };

  // Función para manejar el cambio de selección de provincia
  const handleProvinciaChange = (e) => {
    const selectedProvincia = e.target.value;
    setProvincia(selectedProvincia);
    
    // Habilitar o deshabilitar el select de ciudades si se selecciona una provincia
    setCiudadDisabled(selectedProvincia === 'todos');
    
    // Reiniciar la selección de ciudad si se cambia la provincia a "todos"
    if (selectedProvincia === 'todos') {
      setCiudad('todos');
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

      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
        </div>
      ))}
    </div>
  );
}
