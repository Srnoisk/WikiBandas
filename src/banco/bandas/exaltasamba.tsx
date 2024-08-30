import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import exalta from '../ImagensDasBandas/exalta.jpg'; // Substitua pelo caminho da imagem do Prefixo

export default function ExaltaSamba() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Exalta Samba</h2>
                <img className="ft-bandas" src={exalta} alt="Exalta Samba" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Exalta Samba é uma banda que se destaca no gênero samba e pagode. A banda é conhecida por suas músicas românticas e animadas,<br />
                    combinando elementos tradicionais do samba com influências do pagode.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1998, o Exalta Samba rapidamente se tornou uma das bandas mais populares do samba e pagode no Brasil.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Exalta Samba é conhecido por suas letras emotivas e melodias cativantes, que combinam com o ritmo contagiante do samba.<br />
                    A banda mistura elementos do samba tradicional com um estilo moderno de pagode, criando um som que é tanto dançante quanto romântico.<br />
                    Com uma série de sucessos e álbuns de destaque, Exalta Samba ajudou a popularizar o pagode e a manter o samba relevante no cenário musical atual.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    O Exalta Samba foi formado em São Paulo, Brasil, em 1998. A banda ganhou popularidade com seu álbum de estreia, "Exalta Samba",<br />
                    e se tornou um nome conhecido no cenário do pagode e samba. Ao longo dos anos, a banda lançou vários álbuns de sucesso,<br />
                    incluindo "Exalta ao Vivo", "Aruanã" e "Exalta na Veia", consolidando sua posição como um dos principais nomes do gênero no Brasil.<br />
                    A banda passou por várias formações e mudanças ao longo dos anos, mas continua a ser uma referência no samba e pagode.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Exalta Samba tem um papel importante na cultura musical brasileira, ajudando a popularizar o pagode e a manter o samba como um gênero relevante.<br />
                    Suas músicas abordam temas de amor, relacionamentos e celebração, ressoando com um amplo público.<br />
                    A banda também é conhecida por suas apresentações ao vivo enérgicas e por sua influência na evolução do samba moderno.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Chrigor (vocal)</li>
                    <li>Bruno (guitarra e vocais)</li>
                    <li>Marcelo (baixo)</li>
                    <li>Ricky (bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>São Paulo, Brasil</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Exalta Samba" - 1998</li>
                    <li>"Exalta ao Vivo" - 2001</li>
                    <li>"Aruanã" - 2002</li>
                    <li>"Exalta na Veia" - 2004</li>
                    <li>"Exalta Samba – Ao Vivo" - 2005</li>
                    <li>"Pelo Bem dos Animais" - 2015</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.exaltasamba.com.br" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCZiDcLKIPsFnza9er0SQPfA" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/exaltasambaoficial/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
