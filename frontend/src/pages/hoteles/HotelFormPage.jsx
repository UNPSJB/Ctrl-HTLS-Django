import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectUbicacion from "../../components/select/SelectUbicacion";
import SelectEncargado from "../../components/select/SelectEncargado";
import SelectCategoria from "../../components/select/SelectCategoria";
import useUbicacion from "../../hooks/useUbicacion";
import api from "../../api";

export default function HotelFormPage() {
  Window.api = api;
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
    const { nombre, calle, numero } = data;
    const newDireccion = { calle, numero, ciudad: ubicacion.ciudad };

    const { id: direccion } = await api.direcciones.create(newDireccion);

    const newHotel = { nombre, direccion, categoria, encargado };
    await api.hoteles.create(newHotel);

    navigate("/hoteles");
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
