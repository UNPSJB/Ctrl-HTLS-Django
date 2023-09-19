import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import HotelPage from './pages/hoteles/HotelPage';
import HotelFormPage from './pages/hoteles/HotelFormPage';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hoteles" element={<HotelPage />} />
        <Route path="/hotel-form" element={<HotelFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
