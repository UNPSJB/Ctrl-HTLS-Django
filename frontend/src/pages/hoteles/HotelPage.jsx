import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export default function HotelPage() {
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
            Dirección: {hotel.direccion.calle} {hotel.direccion.numero}
          </p>
          <p>Categoría: {hotel.categoria.nombre}</p>
          <p>
            Encargado: {hotel.encargado.nombre} {hotel.encargado.apellido}
          </p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
