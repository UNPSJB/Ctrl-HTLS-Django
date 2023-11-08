import Estrellas from "../helpers/Estrellas";

function HotelCard({ hotel }) {
  return (
    <div className="p-4 m-2 border rounded shadow-lg flex justify-between">
      <div className="w-3/4">
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-2 uppercase">{hotel.nombre}</h2>
          <Estrellas stars={hotel.categoria.estrellas} />
        </div>
        <p>
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p>
        <p className="mt-2 text-gray-700">
          {hotel.descripcion.length > 500
            ? hotel.descripcion.slice(0, 500) + "..."
            : hotel.descripcion}
        </p>
      </div>
      <div className="w-1/4 flex flex-col items-end">
        <button className="px-4 py-2 mb-2 text-white bg-green-500 rounded">
          Toggle
        </button>
        <div className="mt-auto">
          <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">
            Modificar
          </button>
          <button className="px-4 py-2 text-white bg-red-500 rounded">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
