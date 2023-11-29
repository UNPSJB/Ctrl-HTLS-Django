import { useState } from "react";
import Estrellas from "../helpers/Estrellas";
import SwitchButton from "../helpers/SwitchButton";
import hotelimg from "../../public/hotel2.jpeg";
import { Link } from "react-router-dom";

function AlquilarHotelCard({ hotel, inicio, fin }) {
  const [isToggled, setToggled] = useState(hotel.habilitado);

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
            to={`/alquilar/${hotel.id}`}
            state={{ inicio, fin }}
            className="uppercase text-4xl font-hoteles font-bold text-LetraAgregarHotel mr-2"
          >
            <h3>{hotel.nombre}</h3>
          </Link>

          <Estrellas stars={hotel.categoria.estrellas} />
        </div>

        <p className="font-navSitiosFrecuentes text-FrecuentesItems">
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p>

        <p className="text-sm text-DescripcionHotel">{hotel.descripcion}</p>
      </div>
      <div className="w-1/5 flex flex-col items-end justify-between p-4">
        <SwitchButton isToggled={isToggled} toggle={toggle} />
        <div className="flex justify-between w-full">
          <button className="w-1/2 mr-1 bg-ModificarToggle text-white rounded-md px-2 py-1">
            Modificar
          </button>
          <button className="w-1/2 ml-1 bg-AgregarHotel text-LetraAgregarHotel rounded-md px-2 py-1">
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

export default AlquilarHotelCard;
