import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import mclan from '../ImagensDasBandas/mclan.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function MCLan() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>MC Lan</h2>
                <img className="ft-bandas" src={mclan} alt="MC Lan" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    MC Lan é um artista brasileiro conhecido por sua música no gênero funk carioca e funk melody. Seu estilo é caracterizado por batidas envolventes,<br />
                    letras cativantes e uma mistura de influências do funk e do pop, criando músicas que são tanto dançantes quanto acessíveis.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    MC Lan começou sua carreira musical em 2013 e ganhou destaque no cenário do funk carioca a partir de 2015 com o sucesso de seus singles e colaborações.<br />
                    Desde então, ele se tornou uma figura proeminente na cena do funk brasileiro.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    MC Lan é conhecido por seu estilo energético e suas produções que combinam elementos tradicionais do funk carioca com influências modernas.<br />
                    Suas músicas frequentemente abordam temas relacionados ao cotidiano e ao estilo de vida urbano, e ele é reconhecido por seu carisma e habilidade em criar hits.<br />
                    A popularidade de MC Lan é evidenciada por suas colaborações com outros artistas renomados e seu impacto nas paradas musicais.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    MC Lan, cujo nome real é Lanlan Farias, começou a ganhar notoriedade com o lançamento de seus singles e vídeos no YouTube.<br />
                    Ele alcançou sucesso com músicas como "Rabetão" e "Bonde do Tigrão", e continuou a crescer em popularidade com lançamentos subsequentes e colaborações.<br />
                    MC Lan é conhecido por sua capacidade de criar músicas que ressoam com o público e por seu papel importante na popularização do funk carioca.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    MC Lan desempenha um papel importante na cena do funk carioca, ajudando a trazer o gênero para um público mais amplo e diversificado.<br />
                    Suas músicas têm uma grande influência na cultura musical urbana no Brasil, e ele continua a ser uma figura relevante no cenário do funk e da música pop.<br />
                    A popularidade de MC Lan entre os jovens e seu impacto nas paradas musicais são testemunhos de sua importância cultural.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>MC Lan (vocais, produção)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>São Paulo, Brasil</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"LAN" - 2017 (Álbum)</li>
                    <li>"O Melhor do MC Lan" - 2018 (Compilação)</li>
                    <li>"O Bonde do Tigrão" - 2019 (Álbum)</li>
                    <li>"LAN & Friends" - 2020 (Álbum)</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/mclan/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/mclan/" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/MCLanOficial" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/artist/2wOgH4E1vX7H0gkK09XjUe" target="_blank" rel="noopener noreferrer">Spotify</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
