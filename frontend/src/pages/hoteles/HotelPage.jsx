import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import SelectVendedorHotel from "../../components/selectores/SelectVendedorHotel";
import Header from "../../components/header/Header";
import Estrellas from "../../components/helpers/Estrellas";
import HabitacionesTable from "../../components/habitacion/HabitacionTable";
import PaquetesTable from "../../components/cosas-hotel/PaquetesTable";
import TemporadasTable from "../../components/cosas-hotel/TemporadasTable";
import TarifasTable from "../../components/cosas-hotel/TarifasTable";

function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [vendedor, setVendedor] = useState(null);

  useEffect(() => {
    api.hoteles.get(id, "full").then((res) => {
      setHotel(res);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <p className="text-gray-500">Cargando...</p>;
  }

  const {
    nombre,
    categoria,
    ubicacion,
    encargado,
    vendedores,
    habitaciones,
    paquetes,
    temporadas,
    tarifas,
  } = hotel;

  return (
    <div>
      <Header
        secondNavBarChildren={
          <h2 className="uppercase text-3xl text-center ">{nombre}</h2>
        }
      />
      <div className="text-center text-gray-600">
        <Estrellas stars={categoria.estrellas} />
        <p className="uppercase">{categoria.nombre}</p>
        <p className="font-navSitiosFrecuentes text-FrecuentesItems">
          {ubicacion.calle} - {ubicacion.numero} - {ubicacion.ciudad} -{" "}
          {ubicacion.provincia} - {ubicacion.pais}
        </p>
        <p>
          Encargado/a: {encargado.nombre} {encargado.apellido}
        </p>
        <SelectVendedorHotel
          vendedores={vendedores}
          vendedorElegido={vendedor}
          setVendedorElegido={setVendedor}
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="m-4 h-auto">
            <HabitacionesTable habitaciones={habitaciones} />
          </div>
          <div className="m-4 h-auto">
            <PaquetesTable paquetes={paquetes} />
          </div>
          <div className="m-4 h-auto">
            <TemporadasTable temporadas={temporadas} />
          </div>
          <div className="m-4 h-auto">
            <TarifasTable tarifas={tarifas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
