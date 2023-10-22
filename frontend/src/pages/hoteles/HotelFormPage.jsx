import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createHotel } from "../../api/hotel.api";
import { createDireccion } from "../../api/core.api";
import SelectUbicacion from "../../components/select/SelectUbicacion";
import SelectEncargado from "../../components/select/SelectEncargado";
import SelectCategoria from "../../components/select/SelectCategoria";
import useUbicacion from "../../hooks/useUbicacion";

export default function HotelFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const ubicacion = useUbicacion();

  const [encargado, setEncargado] = useState(null);
  const [categoria, setCategoria] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { nombre, calle, numero } = data;
      const newDireccion = { calle, numero, ciudad: ubicacion.ciudad };

      const { id: direccion } = (await createDireccion(newDireccion)).data;

      const newHotel = { nombre, direccion, categoria, encargado };
      await createHotel(newHotel);

      navigate("/hoteles");
    } catch (error) {
      console.error("Error al crear el hotel:", error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="nombre" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input type="text" placeholder="calle" {...register("calle", { required: true })} />
        {errors.calle && <span>Este campo es requerido</span>}

        <input type="number" placeholder="numero" {...register("numero", { required: true })} />
        {errors.numero && <span>Este campo es requerido</span>}

        <SelectUbicacion {...ubicacion} />

        <SelectEncargado encargado={encargado} setEncargado={setEncargado} />

        <SelectCategoria categoria={categoria} setCategoria={setCategoria} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
