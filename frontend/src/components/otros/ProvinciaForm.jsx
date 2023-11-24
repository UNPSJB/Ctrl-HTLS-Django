import Modal from "../Modal";
import api from "../../api";
import SelectPais from "../selectores/SelectPais";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProvinciaForm({ title, isOpen, onClose }) {
  const [pais, setPais] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre } = data;
    const newProvincia = {
      pais,
      nombre,
    };
    console.log(newProvincia);
    try {
      const res = await api.provincias.create(newProvincia);
    } catch (error) {
      console.error("ERROR", error);
    }
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <SelectPais pais={pais} setPais={setPais} />
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
