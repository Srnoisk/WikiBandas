import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import matue from '../ImagensDasBandas/matuê.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function Matue() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Matuê</h2>
                <img className="ft-bandas" src={matue} alt="Matuê" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Matuê é um rapper e cantor brasileiro conhecido por seu trabalho no gênero trap e rap. Seu som é caracterizado por batidas marcantes,<br />
                    letras introspectivas e uma combinação de influências do rap e da música eletrônica.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Matuê iniciou sua carreira musical em 2013, mas ganhou destaque nacional com o lançamento de suas mixtapes e singles a partir de 2017.<br />
                    Desde então, ele se estabeleceu como uma figura importante na cena do trap brasileiro.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Matuê é conhecido por sua capacidade de criar músicas com um som distinto, combinando elementos de trap com influências do rap.<br />
                    Suas letras frequentemente exploram temas de sucesso, introspecção e vida urbana. A produção de suas músicas geralmente apresenta batidas pesadas e melodias cativantes,<br />
                    o que ajuda a destacar seu trabalho no cenário do trap brasileiro.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Matuê, cujo nome real é Matheus Tavares, começou a se destacar na cena musical brasileira com suas mixtapes "Matuê" e "Máquina do Tempo".<br />
                    Seu sucesso começou a crescer exponencialmente com o lançamento de singles populares como "Kenny G" e "Mandala".<br />
                    Ele continuou a ganhar notoriedade com seu álbum "Rave" e a colaboração com outros artistas do trap e do rap, consolidando sua posição no cenário musical.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Matuê é uma figura importante no cenário do trap brasileiro, contribuindo para a popularização do gênero no país.<br />
                    Seu estilo inovador e suas letras introspectivas ajudaram a definir e expandir os limites do trap no Brasil.<br />
                    A popularidade de Matuê entre os jovens e seu impacto nas paradas musicais mostram sua influência crescente na música contemporânea.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Matuê (vocais, produção)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Fortaleza, Brasil</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Matuê" - 2016 (Mixtape)</li>
                    <li>"Máquina do Tempo" - 2017 (Mixtape)</li>
                    <li>"Rave" - 2019 (Álbum)</li>
                    <li>"Rave 2" - 2021 (Álbum)</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/matue/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCYF3HLy2nzDREEE50KbOnKA" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/artist/2mYZ5nHcCekB9zRzlgP4P1" target="_blank" rel="noopener noreferrer">Spotify</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
