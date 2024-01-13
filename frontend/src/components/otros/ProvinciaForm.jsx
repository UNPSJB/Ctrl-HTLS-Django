import Modal from "../Modal";
import api from "../../api";
import SelectPais from "../selectores/SelectPais";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessModal from '../../components/successModal'; 

export default function ProvinciaForm({ title, isOpen, onClose }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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

    setShowSuccessModal(true);
  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form className="mx-auto bg-FondoHotel p-1 rounded-lg border border-black-300" onSubmit={onSubmit}>
        <SelectPais pais={pais} setPais={setPais}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
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
       {/* Mostrar el modal de éxito */}
       <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </Modal>
  );
}
