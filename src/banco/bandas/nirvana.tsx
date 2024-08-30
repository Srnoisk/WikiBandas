import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import nirvana from '../ImagensDasBandas/nirvana.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function Nirvana() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Nirvana</h2>
                <img className="ft-bandas" src={nirvana} alt="Nirvana" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Nirvana é uma banda que se destaca no gênero grunge, uma subcategoria do rock alternativo. A banda é conhecida por seu som cru,<br />
                    pesado e influente, que combina elementos de punk rock e heavy metal com uma estética melancólica e introspectiva.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1987, Nirvana rapidamente se tornou uma das bandas mais influentes e icônicas do rock dos anos 90.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Nirvana é famoso por seu som inovador que ajudou a definir o grunge e a revolucionar o rock alternativo.<br />
                    A banda é conhecida por suas músicas com riffs pesados e letras introspectivas e angustiadas, lideradas pelo vocalista e guitarrista Kurt Cobain.<br />
                    Com uma abordagem que mistura agressividade e melodia, Nirvana teve um impacto duradouro no rock, especialmente com seu álbum "Nevermind".
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Nirvana foi formado em Aberdeen, Washington, pelos membros Kurt Cobain (vocais, guitarra), Krist Novoselic (baixo) e Chad Channing (bateria).<br />
                    A banda ganhou atenção nacional com seu álbum de estreia, "Bleach" (1989), mas alcançou fama global com o lançamento de "Nevermind" (1991),<br />
                    que inclui o hit icônico "Smells Like Teen Spirit". Nirvana continuou a influenciar o rock com seu terceiro álbum, "In Utero" (1993),<br />
                    antes do trágico falecimento de Kurt Cobain em 1994, que resultou no fim da banda.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Nirvana desempenha um papel fundamental na cultura musical, sendo um dos principais responsáveis pela popularização do grunge e do rock alternativo.<br />
                    A banda desafiou as normas do rock mainstream com sua abordagem crua e emocional, e a morte de Kurt Cobain trouxe um luto coletivo para fãs ao redor do mundo.<br />
                    Nirvana continua a influenciar novas gerações de músicos e ouvintes, e sua música permanece relevante na história do rock.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Kurt Cobain (vocais, guitarra)</li>
                    <li>Krist Novoselic (baixo)</li>
                    <li>Dave Grohl (bateria, a partir de 1990)</li>
                    <li>Chad Channing (bateria, 1988-1990)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Aberdeen, Washington, EUA</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Bleach" - 1989</li>
                    <li>"Nevermind" - 1991</li>
                    <li>"In Utero" - 1993</li>
                    <li>"MTV Unplugged in New York" - 1994</li>
                    <li>"From the Muddy Banks of the Wishkah" - 1996</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.nirvana.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/Nirvana" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/NirvanaVEVO" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
