import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHotel } from "../../api/hotel.api";
import { getDireccion, getCategoria, getEncargado } from "../../api/core.api";
export default function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [encargado, setEncargado] = useState(null);

  useEffect(() => {
    getHotel(id).then((res) => {
      setHotel(res.data);
      getDireccion(res.data.direccion).then((direccionHotel) => setDireccion(direccionHotel.data));
      getCategoria(res.data.categoria).then((categoriaHotel) => setCategoria(categoriaHotel.data));
      getEncargado(res.data.encargado).then((encargadoHotel) => setEncargado(encargadoHotel.data));
    });
  }, [id]);

  return (
    <div>
      {hotel ? <h1>{hotel.nombre}</h1> : <div>Cargando hotel...</div>}
      {direccion ? (
        <p>
          Direcccion: {direccion.calle} {direccion.numero}
        </p>
      ) : (
        <div>Cargando dirección...</div>
      )}
      {categoria ? <p>Categoria: {categoria.nombre}</p> : <div>Cargando categoría...</div>}
      {encargado ? (
        <p>
          Encargado: {encargado.apellido} {encargado.nombre}, DNI: {encargado.documento}
        </p>
      ) : (
        <div>Cargando encargado...</div>
      )}
    </div>
  );
}
