import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import marshmello from '../ImagensDasBandas/marshmello.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function Marshmello() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Marshmello</h2>
                <img className="ft-bandas" src={marshmello} alt="Marshmello" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Marshmello é conhecido por sua música eletrônica, abrangendo gêneros como future bass, trap e música eletrônica dance (EDM).<br />
                    Seu som é caracterizado por melodias cativantes, batidas energéticas e colaborações com diversos artistas pop e hip-hop.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Marshmello surgiu na cena musical em 2015 e rapidamente se tornou um dos DJs e produtores mais proeminentes da música eletrônica.<br />
                    Com seu distintivo capacete de marshmallow, o artista ganhou reconhecimento global por suas produções e colaborações.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Marshmello é conhecido por seu estilo acessível e suas produções polidas. Ele combina elementos de vários subgêneros da música eletrônica,<br />
                    criando faixas que são tanto dançantes quanto agradáveis ao ouvido. Suas colaborações com artistas populares ajudaram a expandir sua base de fãs e a<br />
                    consolidar sua posição na música eletrônica contemporânea.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    O Marshmello, que manteve sua identidade oculta por um tempo usando um capacete de marshmallow, fez sua estreia com o single "WaVeZ" em 2015.<br />
                    Ele ganhou popularidade com o lançamento de hits como "Alone" e "Happier", e rapidamente se tornou uma figura importante na música eletrônica.<br />
                    Marshmello colaborou com uma variedade de artistas, incluindo Selena Gomez, Bastille e Anne-Marie, e continuou a lançar músicas de sucesso e a fazer turnês pelo mundo.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Marshmello tem desempenhado um papel significativo na popularização da música eletrônica e na integração de elementos pop e hip-hop na EDM.<br />
                    Seu estilo visual distintivo e suas colaborações com artistas mainstream ajudaram a trazer a música eletrônica para um público mais amplo,<br />
                    e ele continua a ser uma influência importante no cenário musical atual.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Marshmello (DJ, produtor)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Estados Unidos</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Joytime" - 2016</li>
                    <li>"Joytime II" - 2018</li>
                    <li>"Joytime III" - 2019</li>
                    <li>"Shockwave" - 2020</li>
                    <li>"Gummy" - 2023</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://marshmellomusic.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/marshmellomusic" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCEdvpU2pFRCVqU6yIPyTpMQ" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/marshmellomusic/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
