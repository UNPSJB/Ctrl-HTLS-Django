import Selector from "./Selector";

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
    if (e.target.value === "") {
      setProvincia("");
      setCiudad("");
    }
  };

  const handleProvinciaChange = (e) => {
    setProvincia(e.target.value);
    if (e.target.value === "") {
      setCiudad("");
    }
  };

  const handleCiudadChange = (e) => {
    setCiudad(e.target.value);
  };

  return (
    <div>
      <Selector
        value={pais}
        handleChange={handlePaisChange}
        options={paises}
        defaultOption="Países"
        getValue={(item) => item.codigo}
        getLabel={(item) => item.nombre}
      />

      <Selector
        value={provincia}
        handleChange={handleProvinciaChange}
        options={provincias}
        defaultOption="Provincias"
        disabled={pais === ""}
        getValue={(item) => item.id}
        getLabel={(item) => item.nombre}
      />

      <Selector
        value={ciudad}
        handleChange={handleCiudadChange}
        options={ciudades}
        defaultOption="Ciudades"
        disabled={provincia === ""}
        getValue={(item) => item.codigo_postal}
        getLabel={(item) => item.nombre}
      />
    </div>
  );
}

export default SelectUbicacion;
