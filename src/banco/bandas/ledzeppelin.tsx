import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import ledzeppelin from '../ImagensDasBandas/ledzeppelim.jpg'; // Substitua pelo caminho da imagem do Prefixo

export default function Ledzeppelin() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Led Zeppelin</h2>
                <img className="ft-bandas" src={ledzeppelin} alt="Led Zeppelin" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Led Zeppelin é uma banda que se destaca no gênero rock, com influências de blues, hard rock e heavy metal. A banda é conhecida por seu som inovador,<br />
                    que combina riffs de guitarra pesados, bateria potente e vocais marcantes, frequentemente misturando elementos de blues e folk com rock.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formada em 1968, Led Zeppelin rapidamente se tornou uma das bandas mais influentes da história do rock, estabelecendo novos padrões para o gênero.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Led Zeppelin é aclamada por sua habilidade de combinar diversos estilos musicais, incluindo blues, rock e folk, em um som único e poderoso.<br />
                    A banda é conhecida por suas performances ao vivo intensas e seu uso inovador de técnicas de gravação. Com álbuns icônicos como "Led Zeppelin IV" e "Physical Graffiti",<br />
                    Led Zeppelin deixou um legado duradouro na música, influenciando inúmeros artistas e bandas subsequentes.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Led Zeppelin foi formada em 1968 por Jimmy Page (guitarra), Robert Plant (vocais), John Paul Jones (baixo, teclados) e John Bonham (bateria).<br />
                    A banda rapidamente se destacou com seu som inovador e suas performances ao vivo impressionantes. Lançou seu álbum de estreia, "Led Zeppelin", em 1969,<br />
                    seguido por uma série de álbuns aclamados, como "Led Zeppelin II", "Led Zeppelin III" e "Led Zeppelin IV". Apesar de sua dissolução em 1980,<br />
                    após a morte de John Bonham, a banda continua a ser uma das mais influentes e respeitadas na história do rock.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Led Zeppelin é uma das bandas mais importantes e influentes da história do rock, ajudando a definir o gênero e a estabelecer novas normas para a música.<br />
                    Sua abordagem inovadora ao som e à gravação, combinada com suas performances ao vivo épicas, deixou um impacto duradouro na música e na cultura popular.<br />
                    A banda é frequentemente citada como uma das maiores e mais influentes do rock, com um legado que continua a inspirar e influenciar músicos em todo o mundo.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Jimmy Page (guitarra, backing vocals)</li>
                    <li>Robert Plant (vocais)</li>
                    <li>John Paul Jones (baixo, teclados)</li>
                    <li>John Bonham (bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Londres, Inglaterra</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Led Zeppelin" - 1969</li>
                    <li>"Led Zeppelin II" - 1969</li>
                    <li>"Led Zeppelin III" - 1970</li>
                    <li>"Led Zeppelin IV" - 1971</li>
                    <li>"Houses of the Holy" - 1973</li>
                    <li>"Physical Graffiti" - 1975</li>
                    <li>"Presence" - 1976</li>
                    <li>"The Song Remains the Same" - 1976 (Álbum ao vivo)</li>
                    <li>"In Through the Out Door" - 1979</li>
                    <li>"Coda" - 1982</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.ledzeppelin.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ledzeppelin" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/ledzeppelin" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ledzeppelin/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
