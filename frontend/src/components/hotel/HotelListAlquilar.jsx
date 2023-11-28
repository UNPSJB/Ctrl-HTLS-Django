import { useEffect, useState } from "react";
import api from "../../api";
import HotelCard from "./HotelCard";

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
    <div>
      {hoteles.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelListAlquilar;
