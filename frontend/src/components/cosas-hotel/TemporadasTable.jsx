function TemporadasTable({ temporadas }) {
  return (
    <div className="border border-violet-600">
      {temporadas.length > 0 ? (
        temporadas.map((temporada) => {
          return (
            <p key={temporada.id} className="mb-2">
              Temporada {temporada.id} - Tipo: {temporada.tipo} - Desde{" "}
              {temporada.fecha_inicio} hasta {temporada.fecha_fin} - Porcentaje:{" "}
              {temporada.porcentaje}%
            </p>
          );
        })
      ) : (
        <p>Sin Temporadas</p>
      )}
    </div>
  );
}

export default TemporadasTable;
