import { useState } from "react";
import Estrellas from "../helpers/Estrellas";
import SwitchButton from "../helpers/SwitchButton";
import hotelimg from "../../public/hotel2.jpeg";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  const [isToggled, setToggled] = useState(hotel.estado);

  const toggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="relative flex shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/5">
        <img
          src={hotelimg}
          alt="Imagen del hotel"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-3/5 px-4 py-2">
        <div className="flex items-center">
          <Link
            to={`/hotel/${hotel.id}`}
            className="uppercase text-4xl font-semibold text-gray-700 mr-2"
          >
            <h3>{hotel.nombre}</h3>
          </Link>
          <Estrellas stars={hotel.categoria.estrellas} />
        </div>

        <p className="text-lg text-blue-600 font-bold">
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p>

        <p className="text-sm text-gray-600">{hotel.descripcion}</p>
      </div>
      <div className="w-1/5 flex flex-col items-end justify-between p-4">
        <SwitchButton isToggled={isToggled} toggle={toggle} />
        <div className="flex justify-between w-full">
          <button className="w-1/2 mr-1 bg-blue-500 text-white rounded-md px-2 py-1">
            Modificar
          </button>
          <button className="w-1/2 ml-1 bg-red-500 text-white rounded-md px-2 py-1">
            Eliminar
          </button>
        </div>
      </div>
      {!isToggled && (
        <div
          className="absolute inset-0 bg-gray-500 opacity-50"
          style={{ pointerEvents: "none" }}
        ></div>
      )}
    </div>
  );
}

export default HotelCard;
