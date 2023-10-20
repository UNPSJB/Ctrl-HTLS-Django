import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createHotel } from "../../api/hotel.api";
import { createDireccion } from "../../api/ubicacion.api"
import SelectUbicacion from "../../components/SelectUbicacion";
import SelectEncargado from "../../components/SelectEncargado";
import SelectCategoria from "../../components/SelectCategoria";

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

  const [encargado, setEncargado] = useState(null)
  const [categoria, setCategoria] = useState(null)

  const onSubmit = handleSubmit(async (data) => {

    try {
      const { nombre, calle, numero } = data 
      const newDireccion = {
      calle,
      numero,
      ciudad
    }
    await createDireccion(newDireccion);

    const newHotel = { nombre, newDireccion, encargado, categoria };
    await createHotel(newHotel);  
    
    } catch (error) {
      return ;
    }
    
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

        <SelectUbicacion
          pais={pais}
          setPais={setPais}
          provincia={provincia}
          setProvincia={setProvincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
        />

        <SelectEncargado 
          encargado={encargado}
          setEncargado={setEncargado}
        />

        <SelectCategoria 
          categoria={categoria}
          setCategoria={setCategoria}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
