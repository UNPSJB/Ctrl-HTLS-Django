import { useState } from "react";
import SelectPais from "../../components/selectores/SelectPais";
import SelectProvincia from "../../components/selectores/SelectProvincia";
import SelectCiudad from "../../components/selectores/SelectCiudad";
import Header from "../../components/header/Header";


export default function VendedorFormPage() {
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");


  const secondNavBarContent = (
    <>
      Gestionar Vendedor
    </>
  )
  return (
    <div>
      <Header secondNavBarChildren={secondNavBarContent} />
      <div className="mx-auto w-1/2 bg-FondoHotel p-1 rounded-lg border border-black-300">
        <div>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nombre"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="Apellido"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>

            <div className="form-group">
              <input type="number" placeholder="Documento"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>
            <SelectPais pais={pais} setPais={setPais} 
              className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            <SelectProvincia pais={pais} provincia={provincia} setProvincia={setProvincia}
              className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            <SelectCiudad provincia={provincia} ciudad={ciudad} setCiudad={setCiudad} 
              className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
            />
            <div className="form-group">
              <input type="text" placeholder="Direccion"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>
            <div className="form-group">
              <input type="number" placeholder="Telefono"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-mail"className="form-input placeholder: text-Letras bg-FondoHotel w-full p-2 rounded-md" />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
