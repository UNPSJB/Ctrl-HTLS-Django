export default function SelectVendedorHotel({
  vendedores,
  vendedorElegido,
  setVendedorElegido,
}) {
  const handleChange = (e) => {
    const selectedVendedor = e.target.value;
    setVendedorElegido(selectedVendedor);
  };

  return (
    <div>
      <select
        value={vendedorElegido ? vendedorElegido : ""}
        onChange={handleChange}
        className="border p-2 rounded-md"
      >
        <option value="">Vendedores Asignados</option>
        {vendedores.map((vendedorItem) => (
          <option
            key={vendedorItem.vendedor.documento}
            value={vendedorItem.vendedor.documento}
          >
            {vendedorItem.vendedor.nombre} {vendedorItem.vendedor.apellido}
          </option>
        ))}
      </select>
    </div>
  );
}
