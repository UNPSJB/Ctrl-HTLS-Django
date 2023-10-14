import { useEffect, useState } from 'react';
import { getAllHotels, getHotelsByCountry } from '../api/hotel.api';
import { getAllPaises } from '../api/ubicacion.api';

export default function HotelList() {
  const [hoteles, setHoteles] = useState([]);
  const [pais, setPais] = useState('todos'); // Inicialmente se muestran todos los hoteles
  const [paises, setPaises] = useState([]);

  const [provincias, setProvincias] = useState([]);
  const [provincia, setProvincia] = useState('todos');
  
  const [ciudades, setCiudades] = useState([])
  const [ciudad, setCiudad] = useState("todos")

  // Listado de Hoteles segun el pais
  useEffect(() => {
    async function loadHotels() {
      const res = pais === 'todos' ? await getAllHotels() : await getHotelsByCountry(pais);
      setHoteles(res.data);
    }

    loadHotels();
  }, [pais]);
  

  // Obtener la lista de paises
  useEffect(() => {
    async function loadPaises() {
      const res = await getAllPaises();
      setPaises(res.data);
    }

    loadPaises();
  }, []);

  return (
    <div>
      <select value={pais} onChange={(e) => setPais(e.target.value)}>
        <option value="todos">Todos los países</option>
        {paises.map((paisItem) => (
          <option key={paisItem.codigo} value={paisItem.codigo}>
            {paisItem.nombre}
          </option>
        ))}
      </select>

      <select value={provincia} onChange={(e) => setProvincia(e.target.value)}>
        <option value="todos">Todas las provincias</option>
        {provincias.map((provinciaItem) => (
          <option key={provinciaItem.codigo} value={provinciaItem.codigo}>
            {provinciaItem.nombre}
          </option>
        ))}
      </select>

      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
        <option value="todos">Todas las ciudades</option>
        {ciudades.map((ciudadItem) => (
          <option key={ciudadItem.codigo} value={ciudadItem.codigo}>
            {ciudadItem.nombre}
          </option>
        ))}
      </select>

      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
          <p>{hotel.direccion}</p>
        </div>
      ))}
    </div>
  );
}

