import tiposDeTemporada from "../helpers/tipos_temporada";
export default function SelectTipoTemporada({
  tipoTemporada,
  setTipoTemporada,
}) {
  return (
    <select
      value={tipoTemporada}
      onChange={(e) => setTipoTemporada(e.target.value)}
    >
      <option value="" disabled>
        Seleccionar Tipo de Documento
      </option>
      {tiposDeTemporada.map((tipo) => (
        <option key={tipo.numero} value={tipo.numero}>
          {tipo.tipo}
        </option>
      ))}
    </select>
  );
}
