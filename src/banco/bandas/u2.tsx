import React from "react";
import Header from "../../componentes/header/header";
import '../../App.css';
import u2 from '../ImagensDasBandas/u2.png'; // Atualize conforme necessário

export default function U2() {
    return (
        <div>
            <Header />
            <section>
                <h2>U2</h2>
                <img className="ft-bandas" src={u2} alt="U2" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    U2 é uma banda de rock que se destaca pelo seu som épico e sua abordagem inovadora no rock alternativo. Conhecidos por suas letras introspectivas e seu som grandioso, U2 combina rock com elementos de música eletrônica e pós-punk.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formada em 1976 em Dublin, Irlanda, U2 rapidamente se tornou uma das bandas mais influentes do rock moderno.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    U2 é conhecida por suas letras emocionalmente carregadas e sua habilidade de criar sons expansivos e imersivos. Álbuns como "The Joshua Tree" e "Achtung Baby" são marcos do rock alternativo, explorando temas políticos e pessoais com uma produção inovadora. A banda também é famosa por suas apresentações ao vivo energéticas e por seu ativismo social e político.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    A banda começou sua carreira com um som mais punk e pós-punk, mas rapidamente evoluiu para um estilo mais complexo e expansivo. "The Joshua Tree" (1987) marcou um ponto alto na carreira da banda, consolidando seu status global. U2 continuou a explorar novos territórios musicais com álbuns como "Achtung Baby" (1991) e "All That You Can't Leave Behind" (2000). Mesmo após décadas de carreira, a banda continua relevante e inovadora.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    U2 tem um impacto profundo na música moderna e na cultura popular. Suas letras frequentemente abordam temas de justiça social e espiritualidade, e a banda é conhecida por seu compromisso com causas humanitárias e direitos humanos. U2 ajudou a definir o som do rock alternativo e continua a influenciar novas gerações de músicos e ouvintes.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Bono (vocais, guitarra)</li>
                    <li>The Edge (guitarra, teclado, vocais)</li>
                    <li>Adam Clayton (baixo)</li>
                    <li>Larry Mullen Jr. (bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Dublin, Irlanda</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Boy" - 1980</li>
                    <li>"October" - 1981</li>
                    <li>"The Joshua Tree" - 1987</li>
                    <li>"Achtung Baby" - 1991</li>
                    <li>"All That You Can't Leave Behind" - 2000</li>
                    <li>"How to Dismantle an Atomic Bomb" - 2004</li>
                    <li>"No Line on the Horizon" - 2009</li>
                    <li>"Songs of Innocence" - 2014</li>
                    <li>"Songs of Experience" - 2017</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.u2.com/" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/U2" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC4gPNusMDwx2Xm-YI35AkCA" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}