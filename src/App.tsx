import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import VehicleDetail from './pages/VehicleDetail';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import CookieConsent from './components/legal/CookieConsent';
import ChatWidget from './components/ui/ChatWidget';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/seminuevos" element={<Catalog />} />
            <Route path="/ocasion" element={<Catalog />} />
            <Route path="/km0" element={<Catalog />} />
            <Route path="/vehiculo/:id" element={<VehicleDetail />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App