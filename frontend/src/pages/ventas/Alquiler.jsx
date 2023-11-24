import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectCliente from "../../components/selectores/SelectCliente";
import Header from "../../components/header/Header";
import ClienteForm from "../../components/cliente/ClienteForm";

export default function AlquilarPage() {
  const location = useLocation();
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
      {isClienteFormOpen && (
        <ClienteForm
          title={"Crear Cliente"}
          isOpen={isClienteFormOpen}
          onClose={() => setIsClienteFormOpen(false)}
        />
      )}
    </div>
  );
}
