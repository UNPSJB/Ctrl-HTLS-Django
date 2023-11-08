import { useEffect, useState } from "react";
import api from "../../api";
import Card from "./Card";

function List({ pais, provincia, ciudad, categoria }) {
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
        <Card key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default List;
