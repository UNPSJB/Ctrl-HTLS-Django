import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";

export default function TipoHabitacionForm({ title, isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, descripcion, capacidad } = data;
    const newTipoHabitacion = {
      nombre,
      descripcion,
      capacidad,
    };
    try {
      const res = await api.tiposhabitaciones.create(newTipoHabitacion);
    } catch (error) {
      console.error("ERROR", error);
    }
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}
        <input
          type="text"
          placeholder="descripcion"
          {...register("descripcion", { required: true })}
        />
        {errors.descripcion && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="capacidad"
          {...register("capacidad", { required: true })}
        />
        {errors.capacidad && <span>Este campo es requerido</span>}
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
