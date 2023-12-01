function PaquetesTable({ paquetes }) {
  return (
    <div className="border border-violet-600">
      {paquetes.map((paquete) => {
        return (
          <p key={paquete.id} className="mb-2">
            Paquete {paquete.nombre} - Desde {paquete.fecha_inicio} hasta{" "}
            {paquete.fecha_fin} - Descuento: {paquete.coeficiente_descuento}%
          </p>
        );
      })}
    </div>
  );
}

export default PaquetesTable;
