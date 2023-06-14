import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Componentes/Rotas/Rotas';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Header */}
        <Rotas /> {/* Main */}
      </BrowserRouter>
        <Footer /> {/* Footer */}
    </>
  );
}

export default App;
