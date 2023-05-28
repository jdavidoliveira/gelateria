import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Componentes/Rotas/Rotas';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
