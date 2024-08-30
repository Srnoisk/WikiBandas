import React from "react"

function Header () {
    return (
        <div>
        <header>
        <h1>Site das bandas</h1>
        </header>

        <nav>
        <a href="/">Página Inicial</a>
        <a href="/bandas">Bandas Populares</a>
        <a href="#">Gêneros Musicais</a>
        <a href="#">História da Música</a>
        <a href="/contato">Contato</a>
        </nav>
        </div>
    )
}

export default Header;