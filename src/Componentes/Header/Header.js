import { Link } from "react-router-dom";
import './Header-style.css';

function Header () {
    return (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + './assets/logo.png'} alt="Logo da Gelateria" />
                <nav>
                    <Link to="/Home">Home</Link>
                    <Link to="/Sabores">Sabores</Link>
                    <Link to="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;