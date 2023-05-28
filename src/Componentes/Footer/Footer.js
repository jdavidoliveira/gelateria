import './Footer-style.css'

function Footer () {
    return (
        <footer>
            <div className="footer-content">
                <img src={process.env.PUBLIC_URL + './assets/logo.png'} alt="Logo" />
                <div className="endereco">
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="contato">
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="horarios">
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="footer-content-copyright">
                <p>Gelateria. Orgulhosamente desenvolvido por David</p>
            </div>
        </footer>
    );
}

export default Footer;