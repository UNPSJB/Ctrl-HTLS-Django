import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import HotelPage from './pages/hoteles/HotelPage';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
