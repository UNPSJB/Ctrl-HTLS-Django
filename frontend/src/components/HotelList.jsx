import { useEffect, useState } from 'react';
import { getAllHotels, getHotelsByCountry } from '../api/hotel.api';
import getAllPaises from '../api/pais.api';

export default function HotelList() {
  const [hoteles, setHoteles] = useState([]);
  const [pais, setPais] = useState('todos'); // Inicialmente se muestran todos los hoteles
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    async function loadHotels() {
      const res = pais === 'todos' ? await getAllHotels() : await getHotelsByCountry(pais);
      setHoteles(res.data);
    }

    loadHotels();
  }, [pais]);

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

      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
          <p>{hotel.direccion}</p>
        </div>
      ))}
    </div>
  );
}

