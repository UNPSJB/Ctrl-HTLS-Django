import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectCliente from "../../components/selectores/SelectCliente";
import Header from "../../components/header/Header";
import ClienteForm from "../../components/cliente/ClienteForm";

export default function AlquilarPage() {
  const location = useLocation();
  const [alquiler, setAlquiler] = useState({});
  const { vendedor, habitaciones } = location.state;
  const [clienteElegido, setClienteElegido] = useState(null);
  const [isClienteFormOpen, setIsClienteFormOpen] = useState(false);

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
      {/* Mostrar la cantidad de habitaciones a seleccionadas */}
      {console.log(location.state)}
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
      {/*IMPORTE*/}
    </div>
  );
}
