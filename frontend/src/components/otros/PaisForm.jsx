import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";

export default function PaisForm({ title, isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { codigo, nombre } = data;
    const newPaises = {
      codigo,
      nombre,
    };
    try {
      const res = await api.paises.create(newPaises);
    } catch (error) {
      console.error("ERROR", error);
    }
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
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
      </form>
    </Modal>
  );
}
