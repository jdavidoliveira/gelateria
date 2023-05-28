function SecaoSobre () {
    return (
        <section className="secao-sobre">
            <img src={process.env.PUBLIC_URL + './assets/banner-sobre.png'} alt="Banner Sobre" />
            <div className="secao-sobre-content">
                <h2>SOBRE NÓS</h2>
                <span>Alegria em cada casquinha!</span>
                <p>
                    Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                </p>
            </div>
        </section>
    );
}

export default SecaoSobre;