import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import SelectEncargado from "../../components/selectores/SelectEncargado";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";

export default function HotelFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [encargado, setEncargado] = useState(null);
  const [categoria, setCategoria] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizeEachWord = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  };

  const onSubmit = handleSubmit(async (data) => {
     // Convertir nombre y calle a Primera letra en mayuscula y el resto en minuscula
    const nombre = capitalizeEachWord(data.nombre);
    const calle = capitalizeEachWord(data.calle);
    const { numero } = data;
    const newDireccion = { calle, numero, ciudad: ciudad };

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

        <SelectPais pais={pais} setPais={setPais} />
        <SelectProvincia pais={pais} provincia={provincia} setProvincia={setProvincia} />
        <SelectCiudad provincia={provincia} ciudad={ciudad} setCiudad={setCiudad} />

        <SelectEncargado encargado={encargado} setEncargado={setEncargado} />

        <SelectCategoria categoria={categoria} setCategoria={setCategoria} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
