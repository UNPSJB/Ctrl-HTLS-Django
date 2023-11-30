import Modal from "../Modal";
import SelectPais from "../selectores/SelectPais";
import SelectProvincia from "../selectores/SelectProvincia";
import SelectCiudad from "../selectores/SelectCiudad";
import api from "../../api";
import { useState } from "react";
import SelectTipoDocumento from "../selectores/SelectTipoDocumento";
import { useForm } from "react-hook-form";
import SuccessModal from '../../components/successModal'; 

export default function ClienteForm({ title, isOpen, onClose }) {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, apellido, documento, calle, numero, telefono, correo } =
      data;
    const newDireccion = { calle, numero, ciudad: ciudad };
    const { id: direccion } = await api.direcciones.create(newDireccion);
    const newCliente = {
      nombre,
      apellido,
      documento,
      tipo_documento: tipoDocumento,
      direccion,
      telefono,
      correo,
      puntos: 0,
    };
    try {
      const res = await api.clientes.create(newCliente);
    } catch (error) {
      console.error("ERROR", error);
    }

    setShowSuccessModal(true);

  });

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido"
          {...register("apellido", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.apellido && <span>Este campo es requerido</span>}
        <SelectTipoDocumento
          tipoDocumento={tipoDocumento}
          setTipoDocumento={setTipoDocumento}
          className="w-full h-32 p-2 mb-2 bg-white-100 rounded-lg border-2 border-blue-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        <input
          type="number"
          placeholder="documento"
          {...register("documento", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.documento && <span>Este campo es requerido</span>}
        <SelectPais pais={pais} setPais={setPais}
        className="w-full h-10 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
         />
        <SelectProvincia
          pais={pais}
          provincia={provincia}
          setProvincia={setProvincia}
          className="w-full h-10 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        <SelectCiudad
          provincia={provincia}
          ciudad={ciudad}
          setCiudad={setCiudad}
          className="w-full h-10 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        <input
          type="text"
          placeholder="calle"
          {...register("calle", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.calle && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="numero"
          {...register("numero", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.numero && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="telefono"
          {...register("telefono", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.telefono && <span>Este campo es requerido</span>}
        <input
          type="correo"
          placeholder="e-mail"
          {...register("correo", { required: true })}
          className="w-full h-9 p-2 mb-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
        />
        {errors.email && <span>Este campo es requerido</span>}
        

        {/* Botones en la misma fila */}
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
