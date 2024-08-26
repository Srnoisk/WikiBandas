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
                <h2>Bandas Populares</h2>
                <p>Aqui estão algumas das bandas mais populares de todos os tempos:</p>
                
                <ul id="artistList">
                    <li>AC/DC</li>
                    <li><a href="/aliceinchains">Alice in chains</a></li>
                    <li>Bathory</li>
                    <li>Billie Eilish</li>
                    <li>Coldplay</li>
                    <li>Exalta samba</li>
                    <li>Foo Fighters</li>
                    <li>Henrique & Juliano</li>
                    <li>Led Zeppelin</li>
                    <li>Marshmello</li>
                    <li>Matuê</li>
                    <li>MC Lan</li>
                    <li>Michael jackson</li>
                    <li>Nirvana</li>
                    <li>Pink Floyd</li>
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