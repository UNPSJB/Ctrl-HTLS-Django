import tiposDeDocumento from "../helpers/tipos_documentos";

const SelectTipoDocumento = ({ tipoDocumento, setTipoDocumento }) => {
  return (
    <select
      value={tipoDocumento}
      onChange={(e) => setTipoDocumento(e.target.value)}
      className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
    >
      <option value="" disabled>
        Seleccionar Tipo de Documento
      </option>
      {tiposDeDocumento.map((tipo) => (
        <option key={tipo.numero} value={tipo.numero}>
          {tipo.tipo}
        </option>
      ))}
    </select>
  );
};

export default SelectTipoDocumento;
