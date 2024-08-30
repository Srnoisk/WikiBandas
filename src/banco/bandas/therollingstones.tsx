import React from "react";
import Header from "../../componentes/header/header";
import '../../App.css';
import therollingstones from '../ImagensDasBandas/therollingstones.png'; // Atualize conforme necessário

export default function TheRollingStones() {
    return (
        <div>
            <Header />
            <section>
                <h2>The Rolling Stones</h2>
                <img className="ft-bandas" src={therollingstones} alt="The Rolling Stones" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    The Rolling Stones são uma das bandas mais influentes do gênero rock and roll e blues rock. Sua música é conhecida por seu som energético e suas letras provocativas, e a banda é famosa por suas performances ao vivo intensas e carismáticas.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formada em 1962, The Rolling Stones rapidamente se destacaram no cenário musical com seu estilo irreverente e sua mistura de rock e blues.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    The Rolling Stones são conhecidos por sua habilidade de combinar o rock and roll com elementos de blues, rhythm and blues e até mesmo country. Seus álbuns, como "Sticky Fingers" e "Exile on Main St.", são considerados marcos na história do rock. A banda é famosa por seu estilo de vida rebelde e suas apresentações ao vivo eletrizantes, além de uma longa e produtiva carreira que inclui algumas das músicas mais icônicas da história do rock.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Formada em 1962, a banda teve seu auge durante os anos 60 e 70, com o lançamento de álbuns clássicos como "Out of Our Heads" (1965), "Aftermath" (1966) e "Let It Bleed" (1969). A banda passou por várias mudanças de formação ao longo dos anos, mas sempre manteve uma presença poderosa na cena musical. Mesmo após mais de seis décadas de atividade, The Rolling Stones continuam a fazer turnês e a lançar novos trabalhos.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    The Rolling Stones têm um impacto duradouro na música popular e na cultura. Eles ajudaram a definir o som do rock and roll e são conhecidos por suas letras provocativas e sua atitude rebelde. A banda inspirou inúmeras outras bandas e artistas e continua a ser uma referência fundamental no rock.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Mick Jagger (vocais)</li>
                    <li>Keith Richards (guitarra)</li>
                    <li>Charlie Watts (bateria) - até sua morte em 2021</li>
                    <li>Ronnie Wood (guitarra)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Londres, Inglaterra</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"The Rolling Stones" - 1964</li>
                    <li>"Out of Our Heads" - 1965</li>
                    <li>"Aftermath" - 1966</li>
                    <li>"Sticky Fingers" - 1971</li>
                    <li>"Exile on Main St." - 1972</li>
                    <li>"Some Girls" - 1978</li>
                    <li>"Tattoo You" - 1981</li>
                    <li>"Voodoo Lounge" - 1994</li>
                    <li>"A Bigger Bang" - 2005</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.rollingstones.com/" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/therollingstones" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/therollingstones" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}