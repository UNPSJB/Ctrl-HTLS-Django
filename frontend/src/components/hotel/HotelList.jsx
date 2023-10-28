import { useEffect, useState } from "react";

import api from "../../api";
import HotelCard from "./HotelCard";

export default function HotelList({ pais, provincia, ciudad, categoria }) {
  const [hoteles, setHoteles] = useState([]);

  // Listado de Hoteles según el país, provincia o ciudad seleccionada
  useEffect(() => {
    async function loadHotels() {
      const res = await api.hoteles.find({ pais });
      setHoteles(res);
    }
    loadHotels();
  }, [pais, provincia, ciudad, categoria]);

  return <HotelCard hoteles={hoteles} />;
}
