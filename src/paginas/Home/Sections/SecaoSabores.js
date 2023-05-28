function SecaoSabores () {
    return (
        <section className="secao-sabores">
            <img src={process.env.PUBLIC_URL + './assets/banner-sabores.jpg'} alt="Banner Sabores" />
            <div className="secao-sabores-content">
                <h2>NOSSOS SABORES</h2>
                <span>Novos e Deliciosos!</span>
                <p>
                    Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                </p>
            </div>
        </section>
    );
}

export default SecaoSabores;