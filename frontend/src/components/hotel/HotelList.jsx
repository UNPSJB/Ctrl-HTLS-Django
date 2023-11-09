import { useEffect, useState } from "react";
import api from "../../api";
import HotelCard from "./HotelCard";

function HotelList({ pais, provincia, ciudad, categoria }) {
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    api.hoteles
      .find({ pais, provincia, ciudad, categoria }, "mid")
      .then((res) => {
        setHoteles(res);
      });
  }, [pais, provincia, ciudad, categoria]);

  return (
    <div>
      {hoteles.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
