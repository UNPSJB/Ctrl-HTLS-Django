import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api";
import Header from "../../components/header/Header";
import SuccessModal from "../../components/successModal";

export default function VendedorFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const secondNavBarContent = <>Gestionar Vendedor</>;

  const onSubmit = handleSubmit(async (data) => {
    const newVendedor = {
      nombre: data.nombre,
      apellido: data.apellido,
      //falta controlar el tipo de documento (no funciona desde el backend)
      documento: data.documento,
      correo: data.email,
      telefono: data.telefono,
    };

    // Se crea perfectamente
    await api.vendedores.create(newVendedor);
    navigate("/vendedores");
  });

  return (
    <div>
      <Header secondNavBarChildren={secondNavBarContent} />
      <div className="mx-auto w-1/2 bg-FondoHotel p-1 rounded-lg border border-black-300">
        <div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="nombre"
                placeholder="Nombre del Vendedor"
                {...register("nombre", { required: true })}
                className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
              />
              {errors.nombre && (
                <span className="error-message">Este campo es requerido</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="apellido"
                placeholder="Apellido del Vendedor"
                {...register("apellido", { required: true })}
                className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
              />
              {errors.apellido && (
                <span className="error-message">Este campo es requerido</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="number"
                id="documento"
                placeholder="Documento del Vendedor"
                {...register("documento", { required: true })}
                className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
              />
              {errors.documento && (
                <span className="error-message">Este campo es requerido</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="number"
                id="telefono"
                placeholder="Telefono del Vendedor"
                {...register("telefono", { required: true })}
                className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
              />
              {errors.telefono && (
                <span className="error-message">Este campo es requerido</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Correo del Vendedor"
                {...register("email", { required: true })}
                className="w-full h-full p-2 bg-white rounded-lg border-2 border-violet-500 flex-col justify-start items-start gap-2.5 inline-flex"
              />
              {errors.email && (
                <span className="error-message">Este campo es requerido</span>
              )}
            </div>
            <button
              type="submit"
              className="mr-2 bg-ModificarToggle text-white p-2 rounded"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
      {/* Mostrar el modal de éxito */}
      <SuccessModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
