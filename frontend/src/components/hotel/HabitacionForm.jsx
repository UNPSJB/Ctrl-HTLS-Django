import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";
import SelectTipoHabitacion from "../selectores/SelectTipoHabitacion";
import { useState } from "react";

export default function HabitacionForm({ title, isOpen, onClose }) {
  const [tipoHabitacion, SetTipoHabitacion] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="numero"
          {...register("numero", { required: true })}
        />
        {errors.numero && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="piso"
          {...register("piso", { required: true })}
        />
        {errors.piso && <span>Este campo es requerido</span>}
        <SelectTipoHabitacion
          tipoHabitacion={tipoHabitacion}
          SetTipoHabitacion={SetTipoHabitacion}
        />
      </form>
    </Modal>
  );
}
