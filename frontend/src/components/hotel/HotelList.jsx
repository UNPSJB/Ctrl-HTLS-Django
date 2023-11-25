import { useEffect, useState } from "react";
import api from "../../api";
import { getHoteles } from "../../api/hotel";
import HotelCard from "./HotelCard";

function HotelList({ pais, provincia, ciudad, categoria }) {
  const [hoteles, setHoteles] = useState([]);

  // useEffect(() => {
  //   api.hoteles
  //     .find({ pais, provincia, ciudad, categoria }, "mid")
  //     .then((res) => {
  //       setHoteles(res);
  //     });
  // }, [pais, provincia, ciudad, categoria]);

  useEffect(() => {
    async function hotelesDisponibles() {
      const res = await getHoteles({
        localidad: 9120,
        inicio: "2023-11-02T14:00:00-00:00",
        fin: "2023-11-02T14:00:00-00:00",
      });
      setHoteles(res.data);
      console.log(hoteles);
    }
    hotelesDisponibles();
  }, []);

  // {
  //   "localidad": 9120,
  //   "inicio": "2023-11-02T14:00:00-00:00",
  //   "fin": "2023-11-02T14:00:00-00:00"
  // }

  return 0;
  // return (
  //   <div>
  //     {hoteles.map((hotel) => (
  //       <HotelCard key={hotel.id} hotel={hotel} />
  //     ))}
  //   </div>
  // );
}

export default HotelList;
