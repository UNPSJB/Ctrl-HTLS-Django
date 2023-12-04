import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Header from "../../components/header/Header";

export default function ClientePage() {
  const { documento } = useParams();
  const [cliente, setCliente] = useState(null);
  const [alquilerCliente, setAlquilerCliente] = useState([])

  useEffect(() => {
    let isMounted = true;
    api.clientes.get(documento, "full").then((res) => {
      if (isMounted) return;
      setCliente(res);
      setAlquilerCliente(res.alquileres);
    });
    return () => {
      isMounted = false;
    };
  }, [documento]);


  const secondNavBarChildren = (
    <>
      <h2 className="text-3xl">{cliente?.nombre} {cliente?.apellido}</h2>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarChildren} />
      <div className="flex justify-center">
        {cliente ? (
          <div className="p-6 bg-white rounded shadow-md w-80 text-center">
            <h2 className="text-2xl font-bold mb-2">Información del Cliente</h2>
            <p><span className="font-bold">Documento:</span> {cliente.documento}</p>
            {/*<p><span className="font-bold">Tipo de Documento:</span> {cliente.tipo_documento}</p> */}
            <p><span className="font-bold">Nombre:</span> {cliente.nombre}</p>
            <p><span className="font-bold">Apellido:</span> {cliente.apellido}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="grid justify-center mt-2">
        <h2 className="text-2xl font-bold mb-2 grid justify-center">Alquileres</h2>
        {alquilerCliente.map((alquilerItem) => (
          <div key={alquilerItem.id}className="p-6 bg-white rounded shadow-md mb-2 w-80 text-center" >
            <p><span className="font-bold"> Fecha Inicio: </span> {alquilerItem.fecha_inicio}</p>
            <p><span className="font-bold"> Fecha Fin: </span> {alquilerItem.fecha_fin} </p>
            <p><span className="font-bold"> Importe: </span>{alquilerItem.importe} </p>
            {/*<p><span className="font-bold">Habitaciones </span> {alquilerItem.habitaciones} </p>*/}
          </div>
        ))}
      </div>
      
    </div>
  );
}
