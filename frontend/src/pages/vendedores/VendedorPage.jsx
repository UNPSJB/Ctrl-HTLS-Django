import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Header from "../../components/header/Header";

export default function VendedorPage() {
  const { documento } = useParams();
  const [vendedor, setVendedor] = useState(null);
  const [alquilerVendedor, setAlquilerVendedor] = useState([])

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


  const secondNavBarChildren = (
    <>
      <h2 className="text-3xl">{vendedor?.nombre} {vendedor?.apellido}</h2>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarChildren} />
      <div className="flex justify-center">
      {vendedor ? (        
      <div className="p-6 bg-white rounded shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-2">Información del Vendedor</h2>
        <p><span className="font-bold">Documento:</span> {vendedor.documento}</p>
        {/* <p><span className="font-bold">Tipo de Documento:</span> {vendedor.tipo_documento}</p>*/}
        <p><span className="font-bold">Nombre:</span> {vendedor.nombre}</p>
        <p><span className="font-bold">Apellido:</span> {vendedor.apellido}</p>
      </div>
      ) : (
        <p>Cargando...</p>
      )}
      </div>
      <div>
      <div className="grid justify-center mt-2">
      <h2 className="text-2xl font-bold mb-2 grid justify-center">Alquileres</h2>
      {alquilerVendedor.map((alquilerItem) => (
          <div key={alquilerItem.id} className="p-6 bg-white rounded shadow-md mb-2 w-80 text-center" >
            <p><span className="font-bold"> Fecha Inicio: </span> {alquilerItem.fecha_inicio}</p>
            <p><span className="font-bold"> Fecha Fin: </span> {alquilerItem.fecha_fin} </p>
            <p><span className="font-bold"> Importe: </span>{alquilerItem.importe} </p>
          </div>          
        ))}
        </div>
      </div>
    </div>
  );
}
