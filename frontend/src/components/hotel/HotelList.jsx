import { useEffect, useState } from "react";
import {
  getAllHoteles,
  getHotelesPorPais,
  getHotelesPorProvincia,
  getHotelesPorCiudad,
} from "../../api/hotel.api";

import api from "../../api";
import HotelCard from "./HotelCard";

export default function HotelList({ pais, provincia, ciudad, categoria }) {
  window.API = api;
  const [hoteles, setHoteles] = useState([]);

  // Listado de Hoteles según el país, provincia o ciudad seleccionada
  useEffect(() => {
    async function loadHotels() {
      let res = null;
      if (ciudad !== "todos") res = await getHotelesPorCiudad(ciudad);
      else if (provincia !== "todos") res = await getHotelesPorProvincia(provincia);
      else if (pais !== "todos") res = await getHotelesPorPais(pais);
      else res = await getAllHoteles();

      // Filtrar hoteles por categoría
      if (categoria !== null) {
        res.data = res.data.filter((hotel) => hotel.categoria == categoria);
      }

      setHoteles(res.data);
    }
    loadHotels();
  }, [pais, provincia, ciudad, categoria]);

  return <HotelCard hoteles={hoteles} />;
}
