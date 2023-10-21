import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHotel } from "../../api/hotel.api";
import { getDireccion, getCategoria } from "../../api/core.api";

export default function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    getHotel(id)
      .then((response) => {
        setHotel(response.data);
        return getDireccion(response.data.direccion);
      })
      .then((response) => {
        setDireccion(response.data);
        return getCategoria(response.data.categoria);
      })
      .then((response) => setCategoria(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!hotel || !direccion) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{hotel.nombre}</h1>
      <h2>
        {direccion.calle} {direccion.numero}
      </h2>
      {categoria && <p>Categoría: {categoria.nombre}</p>}
    </div>
  );
}
