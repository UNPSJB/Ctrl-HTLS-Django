import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import SelectEncargado from "../../components/selectores/SelectEncargado";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import Header from "../../components/header/Header";

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

  const secondNavBarContent = <>Gestionar Hotel</>;
  return (
    <div>
      <Header secondNavBarChildren={secondNavBarContent} />
      <div className="mx-auto w-1/2 bg-FondoHotel p-1 rounded-lg border border-black-300">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre del Hotel"
              {...register("nombre", { required: true })}
              className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            {errors.nombre && (
              <span className="error-message">Este campo es requerido</span>
            )}
          </div>

          <SelectPais
            pais={pais}
            setPais={setPais}
            className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          />
          <SelectProvincia
            pais={pais}
            provincia={provincia}
            setProvincia={setProvincia}
            className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          />
          <SelectCiudad
            provincia={provincia}
            ciudad={ciudad}
            setCiudad={setCiudad}
            className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
          />

          <div className="form-group">
            <input
              type="text"
              placeholder="Calle"
              {...register("calle", { required: true })}
              className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            {errors.calle && <span>Este campo es requerido</span>}
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Número"
              {...register("numero", { required: true })}
              className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            {errors.numero && <span>Este campo es requerido</span>}
          </div>

          <SelectCategoria
            categoria={categoria}
            setCategoria={setCategoria}
            className="select-input text-Letras bg-FondoHotel w-full p-2 rounded-md"
          />

          <div className="form-group">
            <SelectEncargado
              encargado={encargado}
              setEncargado={setEncargado}
              //estilo agregado dentro del componente 'SelectEncargado'
            />
          </div>

          <button
            type="submit"
            className="mr-2 bg-ModificarToggle text-white p-2 rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
