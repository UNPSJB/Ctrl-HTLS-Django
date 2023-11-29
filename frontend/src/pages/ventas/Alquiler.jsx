import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectCliente from "../../components/selectores/SelectCliente";
import Header from "../../components/header/Header";
import ClienteForm from "../../components/cliente/ClienteForm";
import { tarifar } from "../../api/hotel";

export default function AlquilarPage() {
  const location = useLocation();
  const [alquiler, setAlquiler] = useState({});
  const { hotel, vendedor, habitaciones } = location.state;
  const [clienteElegido, setClienteElegido] = useState(null);
  const [isClienteFormOpen, setIsClienteFormOpen] = useState(false);
  const [importe, setImporte] = useState(0);

  const fecha1 = new Date(location.state.inicio);
  const fecha2 = new Date(location.state.fin);

  const diferenciaEnTiempo = Math.abs(fecha2.getTime() - fecha1.getTime());
  const noches = Math.ceil(diferenciaEnTiempo / (1000 * 60 * 60 * 24));

  let ids = [];
  for (let tipo in habitaciones) {
    for (let habitacion of habitaciones[tipo]) {
      ids.push(habitacion.id);
    }
  }
  useEffect(() => {
    async function Tarifar() {
      const res = await tarifar(hotel, { habitaciones: ids, noches });
      setImporte(res.data.total);
    }
    Tarifar();
  });

  const secondNavBarChildren = (
    <>
      <h2 className="text-3xl">Alquiler</h2>
      <div>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-LetraAgregarHotel bg-AgregarHotel hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsClienteFormOpen(true)}
        >
          Agregar Cliente
        </button>
      </div>
    </>
  );

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarChildren} />
      <SelectCliente
        clienteElegido={clienteElegido}
        setClienteElegido={setClienteElegido}
      />
      {Object.entries(habitaciones).map(([tipo, habitaciones]) => (
        <div key={tipo}>
          <h3>{tipo}</h3>
          {habitaciones.map((habitacion) => (
            <p key={habitacion.id}>
              Número de habitación: {habitacion.numero_de_habitacion}, Piso:{" "}
              {habitacion.piso}
            </p>
          ))}
        </div>
      ))}
      <input type="number" placeholder="cantidad pasajeros" />
      {isClienteFormOpen && (
        <ClienteForm
          title={"Crear Cliente"}
          isOpen={isClienteFormOpen}
          onClose={() => setIsClienteFormOpen(false)}
        />
      )}
      <h2>${importe}</h2>
    </div>
  );
}
