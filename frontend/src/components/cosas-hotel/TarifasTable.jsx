function TarifasTable({ tarifas }) {
  return (
    <div className="border border-violet-600">
      {tarifas.length > 0 ? (
        tarifas.map((tarifa, index) => {
          return (
            <p key={index} className="mb-2">
              Tipo de habitación: {tarifa.tipohabitacion} - Precio:{" "}
              {tarifa.precio}
            </p>
          );
        })
      ) : (
        <p>Sin Tarifas</p>
      )}
    </div>
  );
}

export default TarifasTable;
