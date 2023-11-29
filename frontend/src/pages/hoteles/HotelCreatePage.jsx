import Header from "../../components/header/Header";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import SelectCategoria from "../../components/selectores/SelectCategoria";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import SuccessModal from '../../components/successModal'; 


export default function HotelCreatePage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [hotelCreado, setHotelCreado] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm();

  const onSubmit1 = async (data) => {
    const nombre = data.nombre;
    const calle = data.calle;
    const { numero } = data;

    const newDireccion = { calle, numero, ciudad: ciudad };

    const { id: direccion } = await api.direcciones.create(newDireccion);

    const newHotel = { nombre, direccion, categoria };
    const res = await api.hoteles.create(newHotel);
    if (res) setHotelCreado(res);

    setShowSuccessModal(true);
    
    reset(); // Reiniciar el formulario
    
  };

  const onSubmit2 = async (data) => {
    // ... tu lógica para el segundo formulario aquí ...
  };

  const secondNavBarContent = <h1 className="text-3xl">Crear Hotel</h1>;
  return (
    <>
      <Header secondNavBarChildren={secondNavBarContent} />
      <section className="grid grid-cols-1 place-items-center mx-auto w-1/3">
        <h2 className="text-2xl font-semibold text-gray-400 font-['Noto Sans']">
          - Paso 1 -
        </h2>
        <h3>Datos obligatorios</h3>
        <form
          className="flex flex-col w-full space-y-3"
          onSubmit={handleSubmit(onSubmit1)}
        >
          <label className="">Nombre</label>
          <input
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
            type="text"
            placeholder="Nombre del Hotel"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="error-message">Este campo es requerido</span>
          )}
          <label className="">Pais</label>
          <SelectPais
            pais={pais}
            setPais={setPais}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
          />
          <label className="">Provincia</label>
          <SelectProvincia
            pais={pais}
            provincia={provincia}
            setProvincia={setProvincia}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
          />
          <label className="">Ciudad</label>
          <SelectCiudad
            pais={pais}
            provincia={provincia}
            ciudad={ciudad}
            setCiudad={setCiudad}
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
          />
          <label className="">Calle</label>
          <input
            type="text"
            placeholder="Calle"
            {...register("calle", { required: true })}
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
          />
          {errors.calle && <span>Este campo es requerido</span>}
          <label className="">Numero</label>
          <input
            type="number"
            placeholder="Número"
            {...register("numero", { required: true })}
            className="border-2 h-11 border-ModificarToggle rounded-lg focus:border-ModificarToggle focus:outline-none"
          />
          {errors.numero && <span>Este campo es requerido</span>}
          <label className="">Categoria</label>
          <SelectCategoria
            className="w-full h-full p-2 bg-white rounded-lg border-2 border-ModificarToggle flex-col justify-start items-start gap-2.5 inline-flex focus:border-ModificarToggle focus:outline-none"
            categoria={categoria}
            setCategoria={setCategoria}
          />
          <div className="flex justify-evenly  mt-3">
            <button
              type="submit"
              className="w-40 h-10 bg-ModificarToggle text-white rounded-md font-bold font-['Noto Sans']"
            >
              Guardar
            </button>
            <button
              type="button"  
              onClick={() => {
                
                reset(); // Reiniciar el formulario al hacer clic en "Cancelar"
                
                setShowSuccessModal(false); // Ocultar el modal de éxito
              }}
              className="w-40 h-10 bg-AgregarHotel rounded-lg text-black font-bold font-['Noto Sans']"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
       {/* Mostrar el modal de éxito */}
       <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      
      {hotelCreado && (
        <section>
        </section>
      )}
    </>
  );
}
