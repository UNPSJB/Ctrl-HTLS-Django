import Estrellas from "../helpers/Estrellas";

function HotelCard({ hotel }) {
  return (
    <div className="p-4 m-2 border rounded shadow-lg flex justify-between">
      <div className="w-3/4">
        <div className="flex items-center">
          <h2 className="text-4xl text-LetraAgregarHotel font-hoteles font-bold mr-2 uppercase">
            {hotel.nombre}
          </h2>
          <Estrellas stars={hotel.categoria.estrellas} />
        </div>
        <p className="font-navSitiosFrecuentes text-FrecuentesItems">
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p>
        <p className="mt-2 text-DescripcionHotel">
          {hotel.descripcion.length > 500
            ? hotel.descripcion.slice(0, 500) + "..."
            : hotel.descripcion}
        </p>
      </div>
      <div className="w-1/4 flex flex-col items-end">
        <button className="px-4 py-2 mb-2 text-white bg-green-500 rounded">
          Toggle
        </button>
        <div className="mt-auto flex">
          <button className="w-full border rounded-md px-9 py-1 mr-2 text-white bg-ModificarToggle">
            Modificar
          </button>
          <button className="w-full border rounded-md px-9 py-1 mr-2 bg-AgregarHotel text-LetraAgregarHotel">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
