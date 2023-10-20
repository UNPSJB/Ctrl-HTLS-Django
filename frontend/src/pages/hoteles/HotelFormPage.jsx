import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createHotel } from "../../api/hotel.api";
import SelectUbicacion from "../../components/SelectUbicacion";
import SelectTipoHabitacion from "../../components/SelectTipoHabitacion";


export default function HotelFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Asegúrate de importar errors de useForm
  } = useForm();
  const navigate = useNavigate();

  const [pais, setPais] = useState("todos");
  const [provincia, setProvincia] = useState("todos");
  const [ciudad, setCiudad] = useState("todos");

  const [tipoHabitacion, setTipoHabitacion] = useState(null)

  const onSubmit = handleSubmit(async (data) => {
    const newData = { ...data, pais, provincia, ciudad, tipoHabitacion };
    console.log(newData)
    await createHotel(newData);
    navigate("/hoteles");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="nombre" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input type="text" placeholder="direccion" {...register("direccion", { required: true })} />
        {errors.direccion && <span>Este campo es requerido</span>}

        <SelectUbicacion
          pais={pais}
          setPais={setPais}
          provincia={provincia}
          setProvincia={setProvincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
        />
        <SelectTipoHabitacion 
          tipoHabitacion={tipoHabitacion}
          setTipoHabitacion={setTipoHabitacion}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
