import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Header from "../../components/header/Header";

export default function VendedorPage() {
  const { documento } = useParams();
  const [vendedor, setVendedor] = useState(null);
  const [alquilerVendedor, setAlquilerVendedor] = useState([]);
  const [activeTab, setActiveTab] = useState("informacion"); // Pestaña activa

  useEffect(() => {
    let isMounted = true;
    api.vendedores.get(documento, "full").then((res) => {
      if (isMounted) return;
      setVendedor(res);
      setAlquilerVendedor(res.alquileres);
    });
    return () => {
      isMounted = false;
    };
  }, [documento]);

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header secondNavBarChildren={
        <div className="text-center">
          <h2 className="text-3xl">{vendedor?.nombre} {vendedor?.apellido}</h2>
          <div className="flex justify-center mt-2">
            <button
              className={`cursor-pointer mx-2 ${activeTab === "informacion" ? "font-bold" : ""}`}
              onClick={() => switchTab("informacion")}
            >
              Información del Vendedor
            </button>
            <button
              className={`cursor-pointer mx-2 ${activeTab === "alquileres" ? "font-bold" : ""}`}
              onClick={() => switchTab("alquileres")}
            >
              Alquileres
            </button>
            <button
              className={`cursor-pointer mx-2 ${activeTab === "listado de comisiones" ? "font-bold" : ""}`}
              onClick={() => switchTab("listado de comisiones")}
            >
              Listado de comisiones
            </button>
            <button
              className={`cursor-pointer mx-2 ${activeTab === "liquidar comision" ? "font-bold" : ""}`}
              onClick={() => switchTab("liquidar comision")}
            >
              Liquidar comision
            </button>
          </div>
        </div>
      } />
      <div className="flex justify-center">
        {vendedor ? (
          <div className="p-6 bg-white rounded shadow-md w-80 text-center">
            {activeTab === "informacion" && (
              <>
                <h2 className="text-2xl font-bold mb-2">Información del Vendedor</h2>
                <p><span className="font-bold">Documento:</span> {vendedor.documento}</p>
                <p><span className="font-bold">Nombre:</span> {vendedor.nombre}</p>
                <p><span className="font-bold">Apellido:</span> {vendedor.apellido}</p>
              </>
            )}
            {activeTab === "alquileres" && (
              <>
                <h2 className="text-2xl font-bold mb-2">Alquileres</h2>
                {alquilerVendedor.map((alquilerItem) => (
                  <div key={alquilerItem.id} className="p-6 bg-white rounded shadow-md mb-2 w-80 text-center">
                    <p><span className="font-bold">Fecha Inicio: </span> {alquilerItem.fecha_inicio}</p>
                    <p><span className="font-bold">Fecha Fin: </span> {alquilerItem.fecha_fin}</p>
                    <p><span className="font-bold">Importe: </span>{alquilerItem.importe}</p>
                  </div>
                ))}
              </>
            )}
            {activeTab === "listado de comisiones" && (
              <>
                <h2 className="text-2xl font-bold mb-2">Listado de comisiones</h2>
              </>
            )}
            {activeTab === "liquidar comision" && (
              <>
                <h2 className="text-2xl font-bold mb-2">Liquidar de comision</h2>
              </>
            )}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
