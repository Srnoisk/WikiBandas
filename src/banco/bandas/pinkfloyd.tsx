import React from "react";
import Header from "../../componentes/header/header";
import '../../App.css';
import pinkfloyd from '../ImagensDasBandas/pinkfloyd.png'; // Atualize conforme necessário

export default function PinkFloyd() {
    return (
        <div>
            <Header />
            <section>
                <h2>Pink Floyd</h2>
                <img className="ft-bandas" src={pinkfloyd} alt="Pink Floyd" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Pink Floyd é uma banda icônica do gênero rock progressivo e psicodélico. Sua música é conhecida por suas experiências sonoras, letras profundas e álbuns conceituais que exploram temas como a alienação, a guerra e a introspecção.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Formado em 1965, Pink Floyd rapidamente se destacou na cena musical com sua abordagem inovadora e experimental.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Pink Floyd é conhecido por suas inovações em estúdio e performances ao vivo. Seus álbuns, como "The Dark Side of the Moon" e "The Wall", são marcos do rock progressivo e psicodélico, conhecidos por suas complexas estruturas musicais, letras introspectivas e uso inovador de efeitos sonoros e visuais. A banda também é famosa por suas elaboradas apresentações ao vivo e conceitos temáticos profundos.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Formado em 1965, Pink Floyd começou sua trajetória com um som psicodélico influenciado por Syd Barrett. Após a saída de Barrett e a entrada de David Gilmour, a banda evoluiu para um som mais progressivo e conceitual. Lançou álbuns marcantes como "The Dark Side of the Moon" (1973), "Wish You Were Here" (1975), "Animals" (1977) e "The Wall" (1979). A banda passou por várias mudanças de linha e períodos de inatividade antes de se reunir para uma última performance em 2005.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Pink Floyd desempenhou um papel fundamental na evolução do rock progressivo e psicodélico, influenciando uma geração de músicos e moldando o conceito de álbuns conceituais. Seus trabalhos abordam questões sociais e filosóficas, e seu impacto na música e na cultura popular é imenso. A banda continua a ser uma referência crucial para bandas e artistas em todo o mundo.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Syd Barrett (guitarra, vocais) - até 1968</li>
                    <li>Roger Waters (baixo, vocais)</li>
                    <li>David Gilmour (guitarra, vocais)</li>
                    <li>Richard Wright (teclados, vocais)</li>
                    <li>Nick Mason (bateria)</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>London, Inglaterra</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"The Piper at the Gates of Dawn" - 1967</li>
                    <li>"The Dark Side of the Moon" - 1973</li>
                    <li>"Wish You Were Here" - 1975</li>
                    <li>"Animals" - 1977</li>
                    <li>"The Wall" - 1979</li>
                    <li>"A Momentary Lapse of Reason" - 1987</li>
                    <li>"The Division Bell" - 1994</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.pinkfloyd.com/" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/pinkfloyd" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCY2qt3dw2TQJxvBrDiYGHdQ" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}