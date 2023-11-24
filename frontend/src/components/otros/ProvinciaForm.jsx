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
      </form>
    </Modal>
  );
}
