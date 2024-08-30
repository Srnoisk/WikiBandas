import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import foofighters from '../ImagensDasBandas/foofighters.png'; // Substitua pelo caminho da imagem do Prefixo

export default function FooFighters() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Foo Fighters</h2>
                <img className="ft-bandas" src={foofighters} alt="Foo Fighters" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Foo Fighters é uma banda que se destaca no gênero rock alternativo, com influências de post-grunge e hard rock.<br />
                    A banda é conhecida por seu som enérgico, melodias cativantes e letras introspectivas, muitas vezes apresentando uma mistura de riffs de guitarra pesados e seções mais melódicas.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1994, o Foo Fighters rapidamente se tornou uma das principais bandas do rock moderno, com uma carreira que abrange mais de duas décadas.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Foo Fighters é conhecido por seu som robusto e suas performances ao vivo eletrizantes. Fundada por Dave Grohl após o fim do Nirvana,<br />
                    a banda combina elementos de rock alternativo com uma sensibilidade de arena rock. Seus álbuns frequentemente exploram temas pessoais e sociais,<br />
                    com uma abordagem musical que mistura intensidade e melodia de forma eficaz.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Foo Fighters foi formado por Dave Grohl em 1994, após o fim do Nirvana. A banda começou como um projeto solo de Grohl, que gravou o álbum de estreia,<br />
                    "Foo Fighters", por conta própria. O álbum foi bem recebido, e a banda rapidamente se expandiu para uma formação completa com Taylor Hawkins,<br />
                    Nate Mendel, Pat Smear e Chris Shiflett. Desde então, a banda lançou vários álbuns de sucesso, incluindo "The Colour and the Shape", "There Is Nothing Left to Lose",<br />
                    "One by One", "In Your Honor" e "Wasting Light", solidificando sua posição como uma das bandas de rock mais importantes da era moderna.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Foo Fighters desempenha um papel significativo na cultura do rock contemporâneo, trazendo uma abordagem revitalizada ao rock alternativo.<br />
                    A banda é conhecida por suas produções bem elaboradas e por suas performances ao vivo energéticas e memoráveis. Além disso, Foo Fighters é frequentemente elogiada<br />
                    por sua capacidade de se reinventar e manter sua relevância ao longo dos anos, continuando a influenciar novas gerações de músicos e ouvintes.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Dave Grohl (vocais, guitarra)</li>
                    <li>Taylor Hawkins (bateria, vocais de apoio)</li>
                    <li>Nate Mendel (baixo)</li>
                    <li>Chris Shiflett (guitarra solo)</li>
                    <li>Pat Smear (guitarra rítmica)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Seattle, Washington, EUA</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Foo Fighters" - 1995</li>
                    <li>"The Colour and the Shape" - 1997</li>
                    <li>"There Is Nothing Left to Lose" - 1999</li>
                    <li>"One by One" - 2002</li>
                    <li>"In Your Honor" - 2005</li>
                    <li>"Echoes, Silence, Patience & Grace" - 2007</li>
                    <li>"Wasting Light" - 2011</li>
                    <li>"Sonic Highways" - 2014</li>
                    <li>"Concrete and Gold" - 2017</li>
                    <li>"Medicine at Midnight" - 2021</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.foofighters.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCi2KNss4Yx73NG0JARSFe0A" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/foofighters/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
