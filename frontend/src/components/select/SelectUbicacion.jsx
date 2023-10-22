function SelectUbicacion({
  pais,
  setPais,
  provincia,
  setProvincia,
  ciudad,
  setCiudad,
  paises,
  provincias,
  ciudades,
}) {
  const handlePaisChange = (e) => {
    setPais(e.target.value);
    if (e.target.value === "todos") {
      setProvincia("todos");
      setCiudad("todos");
    }
  };

  const handleProvinciaChange = (e) => {
    setProvincia(e.target.value);
    if (e.target.value === "todos") {
      setCiudad("todos");
    }
  };

  const handleCiudadChange = (e) => {
    setCiudad(e.target.value);
  };

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

      <select value={provincia} onChange={handleProvinciaChange} disabled={pais === "todos"}>
        <option value="todos">Provincias</option>
        {provincias.map((provinciaItem) => (
          <option key={provinciaItem.id} value={provinciaItem.id}>
            {provinciaItem.nombre}
          </option>
        ))}
      </select>

      <select value={ciudad} onChange={handleCiudadChange} disabled={provincia === "todos"}>
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
