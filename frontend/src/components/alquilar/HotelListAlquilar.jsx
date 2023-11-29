import { useEffect, useState } from "react";
import api from "../../api";
import AlquilarHotelCard from "../alquilar/AlquilarHotelCard";

function HotelListAlquilar({
  pais,
  provincia,
  ciudad,
  categoria,
  inicio,
  fin,
}) {
  const [hoteles, setHoteles] = useState([]);
  useEffect(() => {
    api.hoteles
      .find({ pais, provincia, ciudad, categoria, inicio, fin }, "mid")
      .then((res) => {
        setHoteles(res);
      });
  }, [pais, provincia, ciudad, categoria, inicio, fin]);

  return (
    <>
      {hoteles.map((hotel) => (
        <AlquilarHotelCard
          key={hotel.id}
          hotel={hotel}
          inicio={inicio}
          fin={fin}
        />
      ))}
    </>
  );
}

export default HotelListAlquilar;
