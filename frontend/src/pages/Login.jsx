import { Link } from "react-router-dom";
import fondoHotel from "../public/Buenavista.jpeg"

export default function Home() {
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-FondoHotel p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-Letras mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-Letras">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            className="form-input w-full mt-1"
            //value={username}  esto es para cuando tengamos valores 
            //onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-Letras">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="form-input w-full mt-1"
            //value={password}
            //onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to= "/home">
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            //onClick={handleLogin}
            >
            Iniciar Sesión
            </button>
        </Link>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-[-1]">
      <img
          src={fondoHotel}
          alt="Imagen de fondo"
          className="object-cover w-full h-full"
        />
        </div>
    </div>
    
  );
}
