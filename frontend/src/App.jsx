import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HotelesPage from "./pages/hoteles/HotelesPage";
import Home from "./pages/Home";
import HotelFormPage from "./pages/hoteles/HotelFormPage";
import HotelPage from "./pages/hoteles/HotelPage";
import VendedoresPage from "./pages/vendedores/VendedoresPage";
import VendedorFormPage from "./pages/vendedores/VendedorFormPage";
import VendedorPage from "./pages/vendedores/VendedorPage";
import Alquiler from "./pages/ventas/Alquiler";
import Otros from "./pages/otros/OtrosPage";
import Login from "../src/pages/Login";
import HotelListAlquilar from "../src/components/hotel/HotelListAlquilar";
import AlquilarHotel from "../src/pages/AlquilarHotel";
import AlquileresPage from "./pages/AlquileresPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hoteles" element={<HotelesPage />} />
        <Route path="/hotel-form" element={<HotelFormPage />} />
        <Route path="/hotel/:id" element={<AlquilarHotel />} />
        <Route path="/vendedores" element={<VendedoresPage />} />
        <Route path="/vendedor-form" element={<VendedorFormPage />} />
        <Route path="/vendedor/:documento" element={<VendedorPage />} />
        {/* <Route path="/alquiler" element={<Alquiler />} /> */}
        <Route path="/alquiler" element={<AlquileresPage />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
