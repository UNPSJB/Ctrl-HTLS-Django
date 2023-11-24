import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectTipoTemporada from "../selectores/SelectTipoTemporada";

export default function TemporadaForm({ title, isOpen, onClose }) {
  const [tipoTemporada, setTipoTemporada] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <SelectTipoTemporada
          tipoTemporada={tipoTemporada}
          setTipoTemporada={setTipoTemporada}
        />
        {/* <SelectHoteles /> */}
        <input
          type="date"
          placeholder="inicio"
          {...register("inicio", { required: true })}
        />
        {errors.inicio && <span>Este campo es requerido</span>}
        <input
          type="date"
          placeholder="fin"
          {...register("fin", { required: true })}
        />
        {errors.fin && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="porcentaje"
          {...register("porcentaje", { required: true })}
        />
        {errors.porcentaje && <span>Este campo es requerido</span>}
      </form>
    </Modal>
  );
}
