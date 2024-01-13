import { Link } from "react-router-dom";
import SwitchButton from "../helpers/SwitchButton";

export default function ClienteCard({ cliente }) {
  return (
    <div className="p-4 m-2 border rounded shadow-lg flex justify-between">
      <div className="w-3/4">
        <div className="flex items-center">
          <h2 className="text-4xl text-LetraAgregarHotel font-hoteles font-bold mr-2 uppercase">
            <Link to={`/cliente/${cliente.documento }`}>
              {cliente.nombre} {cliente.apellido}
            </Link>
          </h2>
        </div>
        {/* <p className="font-navSitiosFrecuentes text-FrecuentesItems">
          {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
          {hotel.ubicacion.pais}
        </p> */}
      </div>
      <div className="w-1/4 flex flex-col items-end">
        <SwitchButton />
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
