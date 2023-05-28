import SecaoBanner from "./Sections/SecaoBanner";
import SecaoSabores from "./Sections/SecaoSabores";
import SecaoEventos from "./Sections/SecaoEventos";
import SecaoSobre from "./Sections/SecaoSobre";


function Home () {
    return (
        <>
            <main>
                <SecaoBanner />
                <SecaoSabores />
                <SecaoEventos />
                <SecaoSobre />
            </main>
        </>
    );
}

export default Home;