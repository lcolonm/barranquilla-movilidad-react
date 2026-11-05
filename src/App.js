import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './estilo.css'; // Conectamos el archivo CSS

// Importamos los componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importamos las páginas
import Inicio from './pages/Inicio';
import Analisis from './pages/Analisis';
import Derechos from './pages/Derechos';
import Propuestas from './pages/Propuestas';
import Conclusion from './pages/Conclusion';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <div className="contenedor">
        <header>
          <h1>Movilidad Urbana en Barranquilla</h1>
          <p>
            Un análisis del tráfico vehicular y
            propuestas para una ciudad más sostenible
          </p>
        </header>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/analisis" element={<Analisis />} />
            <Route path="/derechos" element={<Derechos />} />
            <Route path="/propuestas" element={<Propuestas />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;