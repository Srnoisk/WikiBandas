import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import coldplay from '../ImagensDasBandas/coldplay.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function Coldplay() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Coldplay</h2>
                <img className="ft-bandas" src={coldplay} alt="Coldplay" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Coldplay é uma banda que se destaca no gênero pop rock, com influências de rock alternativo e indie rock. Sua música é conhecida por suas melodias cativantes,<br />
                    letras emocionais e uma abordagem sonora que mistura elementos de rock, pop e música eletrônica.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1996, o Coldplay rapidamente se tornou uma das bandas mais influentes e bem-sucedidas da música pop e rock contemporânea.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Coldplay é conhecido por seu som melódico e suas letras introspectivas e poéticas. A banda combina guitarras atmosféricas,<br />
                    arranjos orquestrais e vocais emocionais para criar uma experiência musical envolvente e memorável.<br />
                    Com álbuns que exploram uma ampla gama de temas e estilos, Coldplay tem se estabelecido como uma das principais bandas do século XXI.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Coldplay foi formado em 1996 em Londres, Reino Unido, por Chris Martin, Jonny Buckland, Guy Berryman e Will Champion.<br />
                    A banda lançou seu álbum de estreia, "Parachutes", em 2000, que recebeu aclamação crítica e comercial. Seguiram-se sucessos como "A Rush of Blood to the Head" e "X&Y",<br />
                    consolidando a banda como uma das maiores do mundo. Coldplay continuou a evoluir com álbuns como "Viva la Vida or Death and All His Friends", "Mylo Xyloto" e "Everyday Life",<br />
                    mantendo uma presença significativa na música global.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Coldplay desempenha um papel significativo na cultura pop, sendo conhecida por suas produções musicais inovadoras e suas performances ao vivo impactantes.<br />
                    A banda tem sido uma força influente na popularização do pop rock e no engajamento com questões sociais e ambientais através de suas letras e ações.<br />
                    Com uma base de fãs global e uma série de sucessos de impacto duradouro, Coldplay continua a moldar o cenário musical moderno.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Chris Martin (vocais, guitarra, piano)</li>
                    <li>Jonny Buckland (guitarra solo)</li>
                    <li>Guy Berryman (baixo)</li>
                    <li>Will Champion (bateria, vocais de apoio)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Londres, Reino Unido</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Parachutes" - 2000</li>
                    <li>"A Rush of Blood to the Head" - 2002</li>
                    <li>"X&Y" - 2005</li>
                    <li>"Viva la Vida or Death and All His Friends" - 2008</li>
                    <li>"Mylo Xyloto" - 2011</li>
                    <li>"Ghost Stories" - 2014</li>
                    <li>"A Head Full of Dreams" - 2015</li>
                    <li>"Everyday Life" - 2019</li>
                    <li>"Music of the Spheres" - 2021</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.coldplay.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/coldplay" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/coldplayvevo" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/coldplay/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
