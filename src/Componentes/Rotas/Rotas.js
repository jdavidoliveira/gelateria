import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../paginas/Home/Home";
import Sobre from "../../paginas/Sobre/Sobre";
import Sabores from "../../paginas/Sabores/Sabores";
import Header from "../Header/Header";

function Rotas() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Sabores" element={<Sabores />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
