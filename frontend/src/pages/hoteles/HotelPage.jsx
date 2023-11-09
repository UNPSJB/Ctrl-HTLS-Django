import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import HabitacionList from "../../components/hotel/HabitacionList";

export default function HotelPage() {
  window.api = api;
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    api.hoteles.get(id, "full").then((res) => {
      setHotel(res);
    });
  }, [id]);

  return (
    <div>
      {hotel ? (
        <>
          <p>Nombre: {hotel.nombre}</p>
          <p>
            Dirección: {hotel.ubicacion.calle} {hotel.ubicacion.numero}
          </p>
          <p>Categoría: {hotel.categoria.nombre}</p>
          <p>
            Encargado: {hotel.encargado.nombre} {hotel.encargado.apellido}
          </p>
          <HabitacionList habitaciones={hotel.habitaciones_por_tipo} />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
