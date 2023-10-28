import useUbicacion from "../../hooks/useUbicacion";
import SelectUbicacion from "../../components/select/SelectUbicacion";

export default function VendedorFormPage() {
  const ubicacion = useUbicacion();
  return (
    <div>
      <form>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />
        <input type="number" placeholder="documento" />
        <SelectUbicacion {...ubicacion} />
        <input type="text" placeholder="direccion" />
        <input type="number" placeholder="telefono" />
        <input type="email" placeholder="e-mail" />
      </form>
    </div>
  );
}
