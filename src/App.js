import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Home } from "./home/Home";
import { EmprendimientosList } from "./busqueda/EmprendimientosList";

import { TopNavBar } from "./components/TopNavBar";
import { Registro } from "./registro/Registro";

function App() {
  return (
    <Router>
      <TopNavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/busqueda" element={<EmprendimientosList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
