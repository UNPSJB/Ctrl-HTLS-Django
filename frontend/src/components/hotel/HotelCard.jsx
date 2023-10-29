import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

function HotelCard({ hoteles, setHoteles }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await api.hoteles.delete(id);
      console.log(`Hotel con id ${id} eliminado`);
      const updatedHoteles = hoteles.filter((hotel) => hotel.id !== id);
      setHoteles(updatedHoteles); // Actualiza los hoteles después de la eliminación
      navigate("/hoteles");
    } catch (error) {
      console.error(`Error al eliminar el hotel con id ${id}: `, error);
    }
  };

  return (
    <div>
      {hoteles.map((hotel) => (
        <div className="flex justify-between space-x-20 " key={hotel.id}>
          <h1>
            <Link to={`/hotel/${hotel.id}`}>{hotel.nombre}</Link>
          </h1>
          <div className="space-x-10">
            <button className="text-sky-500" onClick={() => console.log("Modificar")}>
              Modificar
            </button>
            <button className="text-red-500" onClick={() => handleDelete(hotel.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelCard;
