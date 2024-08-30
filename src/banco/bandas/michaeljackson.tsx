import React from "react";
import Header from "../../componentes/header/header";
import '../../App.css';
import michael from '../ImagensDasBandas/michael.png'; // Atualize conforme necessário

export default function MichaelJackson() {
    return (
        <div>
            <Header />
            <section>
                <h2>Michael Jackson</h2>
                <img className="ft-bandas" src={michael} alt="Michael Jackson" />
                <h3>Gênero Musical</h3>
                <p className="informacoes_da_banda">
                    Michael Jackson é amplamente reconhecido como o "Rei do Pop" e se destacou no gênero pop, com uma forte influência de música soul, funk e rock. Sua música combina elementos típicos do pop com uma inovação sonora e coreográfica, criando um som e estilo únicos.
                </p>

                <h3>Data de Formação</h3>
                <p className="informacoes_da_banda">
                    Michael Jackson começou sua carreira musical profissional ainda jovem, com os Jackson 5, em 1964. No entanto, seu trabalho solo e destaque como artista solo começaram a brilhar a partir de 1971.
                </p>

                <h3>Análise</h3>
                <p className="informacoes_da_banda">
                    Michael Jackson é conhecido por sua abordagem inovadora tanto na música quanto na dança. Seus álbuns, como "Thriller" e "Bad", são marcos na história da música pop, e suas coreografias icônicas, como o "moonwalk", redefiniram a dança popular. Jackson também é notável por suas produções audiovisuais e vídeos musicais que influenciaram a forma como a música é consumida.
                </p>

                <h3>História</h3>
                <p className="informacoes_da_banda">
                    Michael Jackson começou sua carreira com os Jackson 5 e rapidamente se destacou como um artista solo. Lançou seu álbum de estreia, "Got to Be There", em 1972. Com o lançamento de "Off the Wall" em 1979 e "Thriller" em 1982, Jackson alcançou fama global e sucesso comercial sem precedentes. Continuou a evoluir e a explorar novos sons e estilos ao longo de sua carreira, mantendo-se uma figura central na música pop até sua morte em 2009.
                </p>

                <h3>Importância Cultural</h3>
                <p className="informacoes_da_banda">
                    Michael Jackson desempenhou um papel fundamental na evolução da música pop e da cultura pop global. Sua habilidade de se reinventar e de influenciar a música, a dança e o vídeo musical ajudou a moldar a indústria do entretenimento moderna. Jackson inspirou gerações de artistas e continua a ser uma figura cultural icônica.
                </p>

                <h3>Participantes</h3>
                <ul>
                    <li>Michael Jackson (vocal, compositor)</li>
                    <li>Em diversos álbuns, trabalhou com músicos e produtores renomados como Quincy Jones, Steve Porcaro, e outros.</li>
                </ul>

                <h3>Origem</h3>
                <ul>
                    <li>Gary, Indiana, EUA</li>
                </ul>

                <h3>Discografia completa</h3>
                <ul>
                    <li>"Got to Be There" - 1972</li>
                    <li>"Ben" - 1972</li>
                    <li>"Music & Me" - 1973</li>
                    <li>"Forever, Michael" - 1975</li>
                    <li>"Off the Wall" - 1979</li>
                    <li>"Thriller" - 1982</li>
                    <li>"Bad" - 1987</li>
                    <li>"Dangerous" - 1991</li>
                    <li>"HIStory: Past, Present and Future, Book I" - 1995</li>
                    <li>"Invincible" - 2001</li>
                </ul>

                <h3>Links Externos</h3>
                <ul>
                    <li>
                        <a href="https://www.michaeljackson.com/" target="_blank" rel="noopener noreferrer">Website Oficial</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/michaeljackson" target="_blank" rel="noopener noreferrer">Página no Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/MichaelJacksonVEVO" target="_blank" rel="noopener noreferrer">Canal no YouTube</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}