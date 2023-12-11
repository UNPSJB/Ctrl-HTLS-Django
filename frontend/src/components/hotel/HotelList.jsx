import { useEffect, useState } from "react";
import api from "../../api";
//import { getHoteles } from "../../api/hotel";
import HotelCard from "./HotelCard";
import { useMemo } from "react";

function HotelList({
  pais,
  provincia,
  ciudad,
  categoria,
  fechaEntrada,
  fechaSalida,
  sortOption={sortOption}
}) {
  const [hoteles, setHoteles] = useState([]);


  useEffect(() => {
    api.hoteles
      .find({ pais, provincia, ciudad, categoria }, "mid")
      .then((res) => {
        setHoteles(res);
      });
  }, [pais, provincia, ciudad, categoria]);

  
  const sortedHotels = useMemo(() => {
    if (!hoteles.length) return [];
  
    return [...hoteles].sort((hotelA, hotelB) => {
      switch (sortOption) {
        case "alfabetico":
          return hotelA.nombre.localeCompare(hotelB.nombre);
        case "categoria":
          return hotelB.estrellas - hotelA.estrellas;
        case "estadoLogico":
          return hotelA.activo - hotelB.activo;
        default:
          return 0;
      }
    });
  }, [hoteles, sortOption]);
  
  // useEffect(() => {
  //   async function hotelesDisponibles() {
  //     const res = await getHoteles({
  //       localidad: 9120,
  //       inicio: "2023-11-02T14:00:00-00:00",
  //       fin: "2023-11-02T14:00:00-00:00",
  //     });
  //     setHoteles(res.data);
  //   }
  //   hotelesDisponibles();
  // }, []);

  return (
    <div>
      {sortedHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
