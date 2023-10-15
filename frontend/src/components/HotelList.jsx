import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllHotels,
  getHotelesPorPais,
  getHotelesPorProvincia,
  getHotelesPorCiudad,
} from "../api/hotel.api";
import SelectUbicacion from "./SelectUbicacion";

export default function HotelList() {
  const [hoteles, setHoteles] = useState([]);
  const [pais, setPais] = useState("todos");
  const [provincia, setProvincia] = useState("todos");
  const [ciudad, setCiudad] = useState("todos");

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

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/hotel-form">Crear Hotel</Link>

      <SelectUbicacion
        pais={pais}
        setPais={setPais}
        provincia={provincia}
        setProvincia={setProvincia}
        ciudad={ciudad}
        setCiudad={setCiudad}
      />

      {hoteles.map((hotel) => (
        <div key={hotel.id}>
          <h1>{hotel.nombre}</h1>
        </div>
      ))}
    </div>
  );
}
