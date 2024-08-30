import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import henriquejuliano from '../ImagensDasBandas/henriquejuliano.jpeg'; // Substitua pelo caminho da imagem do Prefixo

export default function HenriqueEjuliano() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Henrique & Juliano</h2>
                <img className="ft-bandas" src={henriquejuliano} alt="Henrique & Juliano" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Henrique & Juliano são uma dupla sertaneja conhecida por suas músicas no estilo sertanejo universitário. A dupla combina letras românticas com<br />
                    ritmos dançantes, criando um som que é tanto envolvente quanto acessível.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formada em 2011, a dupla Henrique & Juliano rapidamente conquistou o público com suas músicas cativantes e carisma.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Henrique & Juliano são conhecidos por suas letras emotivas e sua habilidade de misturar elementos tradicionais do sertanejo com influências modernas.<br />
                    Suas músicas frequentemente abordam temas de amor, relacionamentos e festas, e a dupla é reconhecida por suas performances energéticas e carismáticas.<br />
                    Com uma série de sucessos e álbuns bem recebidos, Henrique & Juliano se destacam no cenário do sertanejo universitário.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Henrique & Juliano, formada pelos irmãos Henrique e Juliano, começou sua carreira musical em 2011 com o lançamento de seu primeiro álbum.<br />
                    A dupla ganhou notoriedade com o álbum "H & J", que incluiu vários sucessos, como "Pode Chorar" e "Diz Pra Mim".<br />
                    Desde então, Henrique & Juliano lançaram vários álbuns de sucesso, incluindo "O Céu Explica Tudo", "Menos é Mais" e "Ao Vivo em Fortaleza",<br />
                    solidificando sua posição como uma das principais duplas do sertanejo universitário.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Henrique & Juliano têm um papel significativo no cenário sertanejo universitário, contribuindo para a popularização do gênero com suas músicas envolventes e<br />
                    suas performances ao vivo energéticas. A dupla é apreciada por sua capacidade de conectar com o público através de letras que ressoam com a vida cotidiana e experiências pessoais.<br />
                    Eles continuam a influenciar a música sertaneja moderna e a atrair novos fãs com seu estilo único.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Henrique (vocais, violão)</li>
                    <li>Juliano (vocais, violão)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Palmeiras de Goiás, Brasil</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Henrique & Juliano" - 2011</li>
                    <li>"H & J" - 2013</li>
                    <li>"O Céu Explica Tudo" - 2014</li>
                    <li>"Menos é Mais" - 2016</li>
                    <li>"Ao Vivo em Fortaleza" - 2018</li>
                    <li>"Novas Histórias" - 2021</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.henriqueejuliano.com.br" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/henriqueejuliano" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@HenriqueeJuliano" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/henriqueejuliano/" target="_blank" rel="noopener noreferrer">Página no Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
