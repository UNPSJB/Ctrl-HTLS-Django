function SelectUbicacion({
  pais,
  paises,
  provincia,
  provincias,
  ciudad,
  ciudades,
  setCiudad,
  provinciaDisabled,
  ciudadDisabled,
  handlePaisChange,
  handleProvinciaChange,
}) {
  return (
    <div>
      <select value={pais} onChange={handlePaisChange}>
        <option value="todos">Países</option>
        {paises.map((paisItem) => (
          <option key={paisItem.codigo} value={paisItem.codigo}>
            {paisItem.nombre}
          </option>
        ))}
      </select>

      <select value={provincia} onChange={handleProvinciaChange} disabled={provinciaDisabled}>
        <option value="todos">Provincias</option>
        {provincias.map((provinciaItem) => (
          <option key={provinciaItem.id} value={provinciaItem.id}>
            {provinciaItem.nombre}
          </option>
        ))}
      </select>

      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} disabled={ciudadDisabled}>
        <option value="todos">Ciudades</option>
        {ciudades.map((ciudadItem) => (
          <option key={ciudadItem.codigo_postal} value={ciudadItem.codigo_postal}>
            {ciudadItem.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectUbicacion;
