function TarifasTable({ tarifas }) {
  return (
    <div className="border border-violet-600 p-6 bg-white rounded shadow-md text-center">
      {tarifas.length > 0 ? (
        tarifas.map((tarifa, index) => {
          return (
            <p key={index} className="mb-2">
              Tipo de habitación: {tarifa.tipohabitacion} - Precio:{" "}
              <strong>{tarifa.precio}</strong>
            </p>
          );
        })
      ) : (
        <p className="text-red-600 font-medium text-lg">Sin Tarifas</p>
      )}
    </div>
  );
}

export default TarifasTable;
