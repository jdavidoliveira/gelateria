function SecaoEventos () {
    return (
        <section className="secao-eventos">
            <div className="secao-eventos-content">
                <h2>NOSSOS EVENTOS</h2>
                <span>Delicias com sorvete!</span>
                <p>
                    Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                </p>
            </div>
            <img src={process.env.PUBLIC_URL + './assets/eventos-image.jpg'} alt="Banner Eventos" />
        </section>
    );
}

export default SecaoEventos;