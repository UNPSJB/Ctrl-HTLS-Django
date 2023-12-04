import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectTipoHabitacion from "../selectores/SelectTipoHabitacion";
import SuccessModal from "../../components/successModal";

export default function HabitacionForm({ title, isOpen, onClose }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [tipoHabitacion, setTipoHabitacion] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { numeroHabitacion, piso } = data;
    const newHabitacion = {
      numero_de_habitacion: numeroHabitacion,
      piso,
      tipo_habitacion: tipoHabitacion,
    };
    console.log(newHabitacion);
    try {
      const res = await api.habitaciones.create(newHabitacion);
      if (res) setShowSuccessModal(true);
    } catch (error) {
      console.error("ERROR", error);
    }
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form
        className="mx-auto bg-FondoHotel p-1 rounded-lg border border-black-300"
        onSubmit={onSubmit}
      >
        <input
          type="number"
          placeholder="numero de habitacion"
          {...register("numeroHabitacion", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.numeroHabitacion && (
          <span className="text-Letras">Este campo es requerido</span>
        )}
        <input
          type="number"
          placeholder="piso"
          {...register("piso", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.piso && (
          <span className="text-Letras">Este campo es requerido</span>
        )}
        <SelectTipoHabitacion
          tipoHabitacion={tipoHabitacion}
          setTipoHabitacion={setTipoHabitacion}
        />
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
      {/* Mostrar el modal de éxito */}
      <SuccessModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </Modal>
  );
}
