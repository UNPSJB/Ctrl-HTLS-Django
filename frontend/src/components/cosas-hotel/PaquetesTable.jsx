function PaquetesTable({ paquetes }) {
  return (
    <div className="border border-violet-600 p-6 bg-white rounded shadow-md text-center">
      {paquetes.length > 0 ? (
        paquetes.map((paquete) => {
          return (
            <p key={paquete.id} className="mb-2">
              Paquete {paquete.nombre} - Desde {paquete.fecha_inicio} hasta{" "}
              {paquete.fecha_fin} - Descuento: {paquete.coeficiente_descuento}%
            </p>
          );
        })
      ) : (
        <p className="text-red-600 font-medium text-lg">Sin Paquetes</p>
      )}
    </div>
  );
}

export default PaquetesTable;
