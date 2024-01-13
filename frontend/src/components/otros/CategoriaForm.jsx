import Modal from "../Modal";
import api from "../../api";
import { useForm } from "react-hook-form";
import SelectServicios from "../selectores/SelectServicios";
import { useState } from "react";
import SuccessModal from '../../components/successModal'; 

export default function CategoriaForm({ title, isOpen, onClose }) {
  const [servicioElegido, setServicioElegido] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, descripcion, estrellas } = data;
    const newCategoria = {
      nombre,
      descripcion,
      servicioElegido,
      estrellas,
    };
    try {
      const res = await api.categorias.create(newCategoria);
    } catch (error) {
      console.error("ERROR", error);
    }

    setShowSuccessModal(true);

  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form className="mx-auto bg-FondoHotel p-1 rounded-lg border border-black-300" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.nombre && <span className="text-Letras">Este campo es requerido</span>}
        <input
          type="text"
          placeholder="descripcion"
          {...register("descripcion", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.descripcion && <span className="text-Letras">Este campo es requerido</span>}
        <SelectServicios
          servicioElegido={servicioElegido}
          setServicioElegido={setServicioElegido}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="estrellas"
          {...register("estrellas", { required: true })}
          className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md"
        />
        {errors.estrellas && <span className="text-Letras" >Este campo es requerido</span>}
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
