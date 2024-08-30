import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import billieeilish from '../ImagensDasBandas/billie.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function BillieEilish() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Billie Eilish</h2>
                <img className="ft-bandas" src={billieeilish} alt="Billie Eilish" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Billie Eilish é uma artista que se destaca nos gêneros pop e electropop. Seu estilo é conhecido por misturar elementos de pop alternativo,<br />
                    eletrônico e indie, criando um som único e inovador.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Billie Eilish iniciou sua carreira musical em 2015, e desde então se tornou uma das artistas mais influentes da música pop moderna.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Billie Eilish é conhecida por sua abordagem única e som distintivo, que combina vocais suaves e melancólicos com produções minimalistas e atmosféricas.<br />
                    Seu estilo inovador e letras introspectivas abordam temas de ansiedade, solidão e autoaceitação, ressoando profundamente com uma nova geração de ouvintes.<br />
                    Com uma estética visual marcante e um estilo de moda próprio, Eilish também se destaca por sua influência cultural e presença midiática.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Billie Eilish Pirate Baird O'Connell nasceu em 18 de dezembro de 2001 em Los Angeles, Califórnia. Ela começou a ganhar atenção em 2015,<br />
                    quando lançou seu single de estreia "Ocean Eyes" no SoundCloud. Seu álbum de estreia, "When We All Fall Asleep, Where Do We Go?"<br />
                    foi lançado em 2019 e recebeu aclamação crítica, estabelecendo-a como uma das maiores estrelas da música pop contemporânea.<br />
                    Eilish continuou a alcançar sucesso com o álbum "Happier Than Ever" em 2021, solidificando ainda mais sua posição na indústria musical.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Billie Eilish desempenha um papel significativo na cultura pop, trazendo uma nova perspectiva ao gênero pop com seu som inovador e letras sinceras.<br />
                    Sua influência se estende além da música, afetando tendências de moda e estilo pessoal. Eilish também é conhecida por suas mensagens sociais e sua capacidade<br />
                    de conectar-se com uma audiência jovem, abordando questões de saúde mental e identidade de maneira autêntica.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Billie Eilish (vocais)</li>
                    <li>Finneas O'Connell (produtor, compositor, guitarra, baixo)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Los Angeles, Califórnia, EUA</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Don't Smile at Me" - 2017</li>
                    <li>"When We All Fall Asleep, Where Do We Go?" - 2019</li>
                    <li>"Happier Than Ever" - 2021</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.billieeilish.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/BillieEilish" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@BillieEilish" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/billieeilish/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
