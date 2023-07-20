import { Link } from "react-router-dom";
import './Header-style.css';

function Header () {
    return (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + './assets/logo.png'} alt="Logo da Gelateria" />
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;