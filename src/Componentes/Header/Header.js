import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <div className="header-content">
                <img src={"https://via.placeholder.com/100"} alt="Logo da Gelateria" />
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