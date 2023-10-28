import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export default function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    async function loadHotel() {
      const res = await api.hoteles.get(id, "full");
      console.log(res);
      setHotel(res);
    }
    loadHotel();
  }, [id]);

  return (
    <div>
      <h1>{hotel ? hotel.nombre : "Cargando..."}</h1>
      <h2>
        {hotel && hotel.direccion
          ? `${hotel.direccion.calle} ${hotel.direccion.numero}`
          : "Cargando dirección..."}
      </h2>
    </div>
  );
}
