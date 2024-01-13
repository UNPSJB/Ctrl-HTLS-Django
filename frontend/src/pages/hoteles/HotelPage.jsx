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
  const [activeTab, setActiveTab] = useState("informacion"); // Pestaña activa
  

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

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header
        secondNavBarChildren={
          <div className="text-center">
            <h2 className="uppercase text-3xl">{nombre}</h2>
            <div className="flex justify-center mt-2">
              <button
                className={`cursor-pointer mx-2 ${activeTab === "informacion" ? "font-bold" : ""}`}
                onClick={() => switchTab("informacion")}
              >
                Información del Hotel
              </button>
              <button
                className={`cursor-pointer mx-2 ${activeTab === "habitaciones" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveTab("habitaciones")
                }}
              >
                Agregar Habitaciones
              </button>
              <button
                className={`cursor-pointer mx-2 ${activeTab === "paquetes" ? "font-bold" : ""}`}
                onClick={() => switchTab("paquetes")}
              >
                Agregar Paquetes Promocionales
              </button>
              <button
                className={`cursor-pointer mx-2 ${activeTab === "temporadas" ? "font-bold" : ""}`}
                onClick={() => switchTab("temporadas")}
              >
                Agregar Temporadas
              </button>
            </div>
          </div>
        }
      />
        {activeTab === "informacion" && (
        <div className="text-center text-gray-600">
        <Estrellas stars={categoria.estrellas} />
        <p className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">{categoria.nombre}</p>
        <p className="font-navSitiosFrecuentes text-FrecuentesItems">
          {ubicacion.calle} - {ubicacion.numero} - {ubicacion.ciudad} -{" "}
          {ubicacion.provincia} - {ubicacion.pais}
        </p>
        <p>
          <strong>Encargado/a:</strong>  {encargado.nombre} {encargado.apellido}
        </p>
        <SelectVendedorHotel
          vendedores={vendedores}
          vendedorElegido={vendedor}
          setVendedorElegido={setVendedor}
        />  
        <div className="p-6 bg-white rounded shadow-md text-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="m-4 h-auto">
              <h2 className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">Habitaciones</h2>
              <HabitacionesTable habitaciones={habitaciones} />
            </div>
            <div className="m-4 h-auto">
              <h2 className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">Paquetes Promocionales</h2>
              <PaquetesTable paquetes={paquetes} />
            </div>
            <div className="m-4 h-auto">
              <h2 className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">Temporadas</h2>
              <TemporadasTable temporadas={temporadas} />
            </div>
            <div className="m-4 h-auto">
            <h2 className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">Tarifas</h2>
              <TarifasTable tarifas={tarifas} />
            </div>
          </div>
        </div>
        </div>
        )}
        {activeTab === "habitaciones" && (
          <div className="p-6 bg-white rounded shadow-md text-center">
            <h2 className="font-navSitiosFrecuentes text-FrecuentesItems text-2xl">Agregar Habitaciones</h2>
          </div>
        )}

    </div>
  );
}

export default HotelPage;
