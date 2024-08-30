import Header from "../componentes/header/header"
import React from "react"

export default function Bandas () {
    return (
        <div>
        
        <Header />


        <form id="barra_de_pesquisa">
    </form>

        <div className="container">
            <section>
                <h2>Bandas e Artistas Populares</h2>
                <p>Aqui estão algumas das bandas mais populares de todos os tempos:</p>
                
                <ul id="artistList">
                    <li><a href="/acdc">AC/DC</a></li>
                    <li><a href="/aliceinchains">Alice in chains</a></li>
                    <li><a href="/bathory">Bathory</a></li>
                    <li><a href="/billieeilish">Billie Eilish</a></li>
                    <li><a href="/coldplay">Coldplay</a></li>
                    <li><a href="/exaltasamba">Exalta samba</a></li>
                    <li><a href="foofighters">Foo Fighters</a></li>
                    <li><a href="/henriquejuliano">Henrique & Juliano</a></li>
                    <li><a href="/ledzeppelin">Led Zeppelin</a></li>
                    <li><a href="/marshmello">Marshmello</a></li>
                    <li><a href="/matue">Matuê</a></li>
                    <li><a href="/mclan">MC Lan</a></li>
                    <li><a href="/michaeljackson">Michael jackson</a></li>
                    <li><a href="/nirvana">Nirvana</a></li>
                    <li><a href="/pinkfloyd">Pink Floyd</a></li>
                    <li><a href="/queen">Queen</a></li>
                    <li>Rolling Stones</li>
                    <li><a href="/thebeatles">The Beatles</a></li>
                    <li><a href="/offspring">The Offspring</a></li>
                    <li>U2</li>
                </ul>
            </section>
        </div>
    </div>
    )
}