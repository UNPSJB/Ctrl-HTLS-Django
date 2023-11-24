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
    const newPais = {
      codigo,
      nombre,
    };
    try {
      const res = await api.paises.create(newPais);
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
