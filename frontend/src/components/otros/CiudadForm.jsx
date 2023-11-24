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
      <form onSubmit={onSubmit}>
        <SelectPais pais={pais} setPais={setPais} />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
        />
        <input
          type="number"
          placeholder="codigo"
          {...register("codigo", { required: true })}
        />
        {errors.codigo && <span>Este campo es requerido</span>}
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}
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
