import Home from "./Screens/Home";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import Perfil from "./Components/Perfil";
import DocumentCatalog from "./Screens/DocumentCatalog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa los componentes de enrutamiento


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <DocumentCatalog />
              <HowWeWork />
              <Benefits />
              <Contact />
            </>
          } />
          <Route path="/perfil" element={<Perfil />} /> {/* Ruta para la página de Perfil */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
