import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HotelesPage from "./pages/hoteles/HotelesPage";
import Home from "./pages/Home";
import HotelFormPage from "./pages/hoteles/HotelFormPage";
import HotelPage from "./pages/hoteles/HotelPage";
import VendedoresPage from "./pages/vendedores/VendedoresPage";
import VendedorFormPage from "./pages/vendedores/VendedorFormPage";
import VendedorPage from "./pages/vendedores/VendedorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hoteles" element={<HotelesPage />} />
        <Route path="/hotel-form" element={<HotelFormPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/vendedores" element={<VendedoresPage />} />
        <Route path="/vendedor-form" element={<VendedorFormPage />} />
        <Route path="/vendedor/:documento" element={<VendedorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
