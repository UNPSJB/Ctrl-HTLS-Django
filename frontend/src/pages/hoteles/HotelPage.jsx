import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import HabitacionList from "../../components/hotel/HabitacionList";
import PaquetesList from "../../components/hotel/PaquetesList";
import SelectVendedorHotel from "../../components/selectores/SelectVendedorHotel";
import Header from "../../components/header/Header";
import Estrellas from "../../components/helpers/Estrellas";
import { getHotel } from "../../api/hotel";

function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [vendedor, setVendedor] = useState(null);
  const [paquetesSeleccionados, setPaquetesSeleccionados] = useState([]);
  const [habitaciones, setHabitaciones] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   api.hoteles.get(id, "full").then((res) => {
  //     setHotel(res);
  //   });
  // }, [id]);

  useEffect(() => {
    async function obtenerHotel() {
      const res = await getHotel(id, {
        inicio: "2023-11-02T14:00:00-00:00",
        fin: "2024-11-02T14:00:00-00:00",
      });
      setHotel(res.data);
    }
    obtenerHotel();
  }, [id]);

  const handlePaqueteToggle = (id) => {
    setPaquetesSeleccionados((prevPaquetes) => {
      if (prevPaquetes.includes(id)) {
        return prevPaquetes.filter((paqueteId) => paqueteId !== id);
      } else {
        return [...prevPaquetes, id];
      }
    });
  };

  const handleTipoHabitacionCountChange = (tipoNombre, newCount) => {
    setHabitaciones((prevCounts) => ({
      ...prevCounts,
      [tipoNombre]: newCount,
    }));
  };

  const handleAlquilarClick = () => {
    navigate("/alquiler", {
      state: {
        hotel: id,
        habitaciones: habitaciones,
        paquetes: paquetesSeleccionados,
        vendedor: vendedor,
      },
    });
  };
  return (
    <div>
      {hotel ? (
        <>
          <Header
            secondNavBarChildren={
              <h2 className="uppercase text-3xl text-center ">
                {hotel.nombre}
              </h2>
            }
          />
          <div className="text-center text-gray-600">
            <Estrellas stars={hotel.categoria.estrellas} />
            <p className="uppercase">{hotel.categoria.nombre}</p>
            <p className="font-navSitiosFrecuentes text-FrecuentesItems">
              {hotel.ubicacion.calle} - {hotel.ubicacion.numero} -{" "}
              {hotel.ubicacion.ciudad} - {hotel.ubicacion.provincia} -{" "}
              {hotel.ubicacion.pais}
            </p>
            <p>
              Encargado/a: {hotel.encargado.nombre} {hotel.encargado.apellido}
            </p>
            <SelectVendedorHotel
              vendedores={hotel.vendedores}
              vendedorElegido={vendedor}
              setVendedorElegido={setVendedor}
            />
          </div>

          {/* <HabitacionList
            habitaciones={hotel.habitaciones_por_tipo}
            onCountChange={handleTipoHabitacionCountChange}
          />
          <PaquetesList
            paquetes={hotel.paquetes}
            onPaqueteToggle={handlePaqueteToggle}
          /> */}
        </>
      ) : (
        <p className="text-gray-500">Cargando...</p>
      )}
      <button className="bg-gray-800 text-white" onClick={handleAlquilarClick}>
        ALQUILAR
      </button>
    </div>
  );
}

export default HotelPage;
