import React from "react";
import Header from "../../componentes/header/header";

import '../../App.css';
import beatlesImage from '../ImagensDasBandas/The_Beatles_members_at_New_York_City_in_1964.jpg'; // Substitua pelo caminho da imagem dos Beatles

export default function TheBeatles() {
    return (
        <div className="">
            <Header />
            <section>
                <h2>The Beatles</h2>
                <img className="ft-bandas" src={beatlesImage} alt="The Beatles" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    The Beatles são uma banda que se destaca nos gêneros Rock e Pop, com uma forte influência de várias tendências musicais, 
                    incluindo o Rock and Roll, o Pop Psicodélico e a Música Experimental. Sua música combina elementos inovadores e variados, 
                    criando um som que revolucionou a indústria musical.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1960, o The Beatles rapidamente se tornou uma das bandas mais influentes e populares da história da música.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    A qualidade sonora do The Beatles é marcada por uma inovação constante e uma variedade musical impressionante. A banda é conhecida por sua habilidade 
                    em misturar estilos musicais, desde o Rock and Roll dos anos 50 até experimentações psicodélicas e progressivas. As harmonias vocais 
                    complexas e a composição criativa são características distintivas, e suas letras frequentemente exploram temas universais e introspectivos. 
                    A influência dos Beatles se estende não apenas à música, mas também à cultura e à estética dos anos 60.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    O The Beatles emergiu da cena musical de Liverpool, Inglaterra, e rapidamente conquistou fama global. Lançaram uma série de álbuns revolucionários, incluindo 
                    "Please Please Me" (1963), "Rubber Soul" (1965) e "Sgt. Pepper's Lonely Hearts Club Band" (1967). A banda passou por uma evolução sonora e lírica significativa 
                    durante sua carreira, influenciando profundamente a cultura popular. Apesar de seu impacto duradouro, os Beatles se separaram em 1970. Cada membro seguiu uma carreira solo, 
                    mas o legado da banda continua a ser uma das maiores influências na música.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    The Beatles são amplamente considerados uma das bandas mais importantes e influentes de todos os tempos. Sua inovação musical, combinada com um impacto cultural 
                    imenso, ajudou a moldar o cenário da música moderna e a cultura popular global. Eles são frequentemente creditados com a popularização do Rock e do Pop e 
                    continuam a ser uma referência seminal para músicos e fãs ao redor do mundo.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>John Lennon (vocalista e guitarrista) - Origem: Liverpool, Inglaterra</li>
                    <li>Paul McCartney (vocalista e baixista) - Origem: Liverpool, Inglaterra</li>
                    <li>George Harrison (guitarrista) - Origem: Liverpool, Inglaterra</li>
                    <li>Ringo Starr (baterista) - Origem: Liverpool, Inglaterra</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Liverpool, Inglaterra</li>
                </ul>

                <h3>Discografia</h3>
                <ul>
                    <li>Please Please Me - 1963</li>
                    <li>With The Beatles - 1963</li>
                    <li>A Hard Day's Night - 1964</li>
                    <li>Beatles for Sale - 1964</li>
                    <li>Help! - 1965</li>
                    <li>Rubber Soul - 1965</li>
                    <li>Revolver - 1966</li>
                    <li>Sgt. Pepper's Lonely Hearts Club Band - 1967</li>
                    <li>Magical Mystery Tour - 1967</li>
                    <li>The Beatles (The White Album) - 1968</li>
                    <li>Yellow Submarine - 1969</li>
                    <li>Abbey Road - 1969</li>
                    <li>Let It Be - 1970</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.thebeatles.com">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/TheBeatles">Página no Facebook</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
