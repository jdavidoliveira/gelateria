import {Routes, Route } from "react-router-dom";
import Home from "../../paginas/Home/Home";
import Sobre from "../../paginas/Sobre/Sobre";
import Sabores from "../../paginas/Sabores/Sabores";

function Rotas() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sabores" element={<Sabores />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
  );
}

export default Rotas;
