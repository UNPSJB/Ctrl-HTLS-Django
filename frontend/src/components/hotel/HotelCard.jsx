import Estrellas from "../helpers/Estrellas";
import SwitchButton from "../helpers/SwitchButton";
import hotelimg from "../../public/hotel2.jpeg";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/5">
        <img
          src={hotelimg}
          alt="Imagen del hotel"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-3/5 px-4 py-2">
        <div className="flex justify-between items-center">
          <Link
            to={`/hotel/${hotel.id}`}
            className="text-lg font-semibold text-gray-700"
          >
            {hotel.nombre}
          </Link>
          <Estrellas stars={hotel.categoria.estrellas} />
        </div>
        <p className="text-sm text-gray-600">
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p>
        <p className="text-sm text-gray-600">{hotel.descripcion}</p>
      </div>
      <div className="w-1/5 flex flex-col items-end justify-between p-4">
        <SwitchButton />
        <div className="flex justify-between w-full">
          <button className="w-1/2 mr-1 bg-blue-500 text-white rounded-md px-2 py-1">
            Modificar
          </button>
          <button className="w-1/2 ml-1 bg-red-500 text-white rounded-md px-2 py-1">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
