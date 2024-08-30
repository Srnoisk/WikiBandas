import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import acdc from '../ImagensDasBandas/acdc.png'; // Substitua pelo caminho da imagem do Prefixo

export default function AcDc() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>AC/DC</h2>
                <img className="ft-bandas" src={acdc} alt="AC/DC" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    AC/DC é uma banda que se destaca no gênero rock, especificamente no subgênero hard rock. Sua música combina elementos do rock 'n' roll e blues,<br />
                    criando um som que é ao mesmo tempo poderoso e energizante.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1973, o AC/DC rapidamente se destacou na cena musical com sua abordagem única e energética.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    O AC/DC é conhecido por sua abordagem inconfundível e riffs de guitarra marcantes dentro do gênero hard rock. Com uma combinação de riffs pesados,<br />
                    solos de guitarra memoráveis e uma performance ao vivo elétrica, a banda cria um som que é ao mesmo tempo clássico e revolucionário. Suas letras,<br />
                    muitas vezes focadas em temas de rebeldia e festa, adicionam um caráter distintivo às suas músicas, tornando a banda uma das mais icônicas no rock.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Formado em 1973 em Sydney, Austrália, o AC/DC começou sua trajetória musical com um estilo que rapidamente chamou a atenção dos fãs e críticos.<br />
                    A banda lançou seu álbum de estreia, "High Voltage", em 1975, que foi bem recebido e estabeleceu uma base sólida de seguidores. Desde então,<br />
                    o AC/DC continuou a evoluir, explorando novos sons e estilos, e se apresentando em diversas turnês e festivais ao redor do mundo.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    O AC/DC desempenha um papel significativo na cena musical ao trazer inovação e energia para o gênero hard rock. Sua capacidade de manter uma identidade<br />
                    consistente ao longo das décadas e de desafiar as convenções ajudou a moldar o cenário musical atual e a inspirar uma nova geração de músicos e ouvintes. A banda<br />
                    continua a ter um impacto duradouro e a contribuir para a evolução do rock.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Angus Young (guitarra solo)</li>
                    <li>Malcolm Young (guitarra rítmica)</li>
                    <li>Brian Johnson (vocais)</li>
                    <li>Cliff Williams (baixo)</li>
                    <li>Phil Rudd (bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Sydney, Austrália</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"High Voltage" - 1975</li>
                    <li>"Dirty Deeds Done Dirt Cheap" - 1976</li>
                    <li>"Let There Be Rock" - 1977</li>
                    <li>"Back in Black" - 1980</li>
                    <li>"For Those About to Rock (We Salute You)" - 1981</li>
                    <li>"The Razors Edge" - 1990</li>
                    <li>"Black Ice" - 2008</li>
                    <li>"Power Up" - 2020</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.acdc.com" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/acdc" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/acdcVEVO" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    
                </ul>
            </section>
        </div>
    );
}
