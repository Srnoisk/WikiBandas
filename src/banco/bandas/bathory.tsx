import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import bathory from '../ImagensDasBandas/bathory.png'; // Substitua pelo caminho da imagem do Prefixo

export default function Bathory() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>Bathory</h2>
                <img className="ft-bandas" src={bathory} alt="Bathory" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Bathory é uma banda que se destaca no gênero black metal e viking metal. A banda é conhecida por sua abordagem inovadora e influente,<br />
                    misturando elementos do black metal com temas épicos e mitológicos do viking metal.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1983, o Bathory rapidamente se destacou na cena musical com sua abordagem única e influente.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Bathory é conhecido por sua influência pioneira no black metal, caracterizado por riffs rápidos, vocais rasgados e um som cru.<br />
                    A banda também é célebre por sua transição para o viking metal, incorporando temas épicos e mitológicos que ajudam a definir o gênero.<br />
                    Com álbuns conceituais e uma estética única, Bathory moldou o cenário do metal e influenciou inúmeras bandas subsequentes.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Formado em 1983 na Suécia, Bathory começou sua trajetória musical com um estilo que rapidamente chamou a atenção na cena do metal.<br />
                    A banda lançou seu álbum de estreia, "Bathory", em 1984, seguido por "The Return......" em 1985, que ajudaram a definir o som do black metal.<br />
                    Ao longo dos anos, Bathory evoluiu, explorando o viking metal e lançando álbuns notáveis como "Blood Fire Death" e "Hammerheart".<br />
                    A banda encerrou suas atividades em 2004, mas seu legado permanece significativo no metal.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Bathory desempenha um papel crucial na história do metal, sendo um dos pioneiros do black metal e do viking metal.<br />
                    Sua abordagem inovadora e temática influente ajudou a moldar o gênero e a inspirar uma nova geração de músicos e ouvintes.<br />
                    O impacto da banda é amplamente reconhecido, e sua influência continua a ressoar no cenário musical até hoje.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Quorthon (vocal, guitarra, baixo, bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Suecia</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Bathory" - 1984</li>
                    <li>"The Return......" - 1985</li>
                    <li>"Under the Sign of the Black Mark" - 1987</li>
                    <li>"Blood Fire Death" - 1988</li>
                    <li>"Hammerheart" - 1990</li>
                    <li>"Twilight of the Gods" - 1991</li>
                    <li>"Nordland I" - 2003</li>
                    <li>"Nordland II" - 2003</li>
                </ul>
            </section>
        </div>
    );
}
