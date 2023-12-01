import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HotelesPage from "./pages/hoteles/HotelesPage";
import Home from "./pages/Home";
import HotelFormPage from "./pages/hoteles/HotelFormPage";
import VendedoresPage from "./pages/vendedores/VendedoresPage";
import VendedorFormPage from "./pages/vendedores/VendedorFormPage";
import VendedorPage from "./pages/vendedores/VendedorPage";
import Alquiler from "./pages/ventas/Alquiler";
import Otros from "./pages/otros/OtrosPage";
import Login from "../src/pages/Login";
import AlquilarHotel from "../src/pages/alquilar/AlquilarHotel";
import AlquileresPage from "./pages/alquilar/AlquileresPage";
import HotelCreatePage from "./pages/hoteles/HotelCreatePage";
import ClientesPage from "./pages/clientes/ClientesPage"
import ClientePage from "./pages/clientes/ClientePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hoteles" element={<HotelesPage />} />
        <Route path="/hotel-form" element={<HotelCreatePage />} />
        <Route path="/alquilar/:id" element={<AlquilarHotel />} />
        <Route path="/vendedores" element={<VendedoresPage />} />
        <Route path="/vendedor-form" element={<VendedorFormPage />} />
        <Route path="/vendedor/:documento" element={<VendedorPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/cliente/:documento" element={<ClientePage />} />
        <Route path="/alquiler" element={<Alquiler />} />
        <Route path="/alquilar" element={<AlquileresPage />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
