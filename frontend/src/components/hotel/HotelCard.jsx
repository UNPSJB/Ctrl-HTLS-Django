import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { useState } from "react";
import Estrellas from "../helpers/Estrellas"

function HotelCard({ hoteles, setHoteles }) {

  const [isOn, setIsOn] = useState(false);


  window.api = api;
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await api.hoteles.delete(id);
      console.log(`Hotel con id ${id} eliminado`);
      // NO FUNCIONA :/
      const updatedHoteles = hoteles.filter((hotel) => hotel.id !== id);
      setHoteles(updatedHoteles); // Actualiza los hoteles después de la eliminación
      navigate("/hoteles");
    } catch (error) {
      console.error(`Error al eliminar el hotel con id ${id}: `, error);
    }
  };

  const toggleSwitch = () => {
      setIsOn(!isOn);
  }

  return (
    <div>
      {hoteles.map((hotel) => (
        <div className="flex justify-between space-x-20 m-10" key={hotel.id}>
          <div>
            <img src="../../public/hotel.jpg" alt="Un hotel"/>
          </div>
          <div>
            <div className="flex">
              <h1 className="text-4xl uppercase font-medium">
                <Link to={`/hotel/${hotel.id}`}>{hotel.nombre}</Link>
              </h1>
              {/* <p>Estrellas: {hotel.categoria.estrellas}</p> */}
              <Estrellas 
                estrellas={hotel.categoria.estrellas}
              />
            </div>
            <p>
              {hotel.ubicacion.ciudad}
              {" - "}
              {hotel.ubicacion.provincia}
              {" - "}
              {hotel.ubicacion.pais}
            </p>
            {/* Mostra solo 10 caracteres de la descipcion cambiar y hacerlo con taildwind */}
            <p>Descripcion: {hotel.descripcion.substring(0, 100)}</p>
          </div>
          <div className="flex-col">
            {/* <input className="" type="checkbox" name="" id="" /> */}
            <button onClick={toggleSwitch} className={`relative inline-flex items-center h-6 rounded-full w-11 ${isOn ? 'bg-green-400' : 'bg-gray-200'}`}>
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full ${isOn ? 'translate-x-6' : 'translate-x-1'}`}></span>
            </button>
            <div className="flex-col mt-10 space-x-4 "> 
              <button
                className="text-sky-500 "
                onClick={() => console.log("Modificar")}
              >
                Modificar
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDelete(hotel.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelCard;
