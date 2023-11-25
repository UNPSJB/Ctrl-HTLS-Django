import Modal from "../Modal";
import api from "../../api";
import SelectPais from "../selectores/SelectPais";
import SelectProvincia from "../selectores/SelectProvincia";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CiudadForm({ title, isOpen, onClose }) {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, codigo } = data;
    const newCiudad = {
      nombre,
      codigo_postal: codigo,
      provincia,
    };
    try {
      const res = await api.ciudades.create(newCiudad);
    } catch (error) {
      console.error("ERROR", error);
    }
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form className="mx-auto bg-FondoHotel p-1 rounded-lg border border-black-300" onSubmit={onSubmit}>

        <SelectPais pais={pais} setPais={setPais} 
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="codigo postal"
          {...register("codigo", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.codigo && <span className="text-Letras">Este campo es requerido</span>}
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.nombre && <span className="text-Letras">Este campo es requerido</span>}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="mr-2 bg-ModificarToggle text-white p-2 rounded"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-AgregarHotel text-LetraAgregarHotel p-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </form>
    </Modal>
  );
}
