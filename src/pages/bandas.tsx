import Header from "../componentes/header/header"
import React from "react"
import Carrousel from "../componentes/carrousel/carrousel"

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
                
                <h1>Rock Alternativo</h1>
                    <ul id="rockAlternativo">
                        <li><a href="/arcticmonkeys">Arctic Monkeys</a></li>
                        <li><a href="/muse">Muse</a></li>
                        <li><a href="/radiohead">Radiohead</a></li>
                        <li><a href="/thekillers">The Killers</a></li>
                        <li><a href="/vampireweekend">Vampire Weekend</a></li>
                        <li><a href="/the1975">The 1975</a></li>
                        <li><a href="/florenceandthemachine">Florence + The Machine</a></li>
                        <li><a href="/tameimpala">Tame Impala</a></li>
                        <li><a href="/bandofhorses">Band of Horses</a></li>
                        <li><a href="/cagetheelphant">Cage the Elephant</a></li>
                        <li><a href="/interpol">Interpol</a></li>
                        <li><a href="/thelumineers">The Lumineers</a></li>
                        <li><a href="/arcadefire">Arcade Fire</a></li>
                        <li><a href="/thefratellis">The Fratellis</a></li>
                        <li><a href="/wolfmother">Wolfmother</a></li>
                        <li><a href="/portugaltheman">Portugal. The Man</a></li>
                    </ul>

                    <h1>Metal</h1>
                    <ul id="metal">
                        <li><a href="/bathory">Bathory</a></li>
                        <li><a href="/metallica">Metallica</a></li>
                        <li><a href="/ironmaiden">Iron Maiden</a></li>
                        <li><a href="/slayer">Slayer</a></li>
                        <li><a href="/judaspriest">Judas Priest</a></li>
                        <li><a href="/black-sabbath">Black Sabbath</a></li>
                    </ul>

                    <h1>Funk</h1>
                    <ul id="funk">
                        <li><a href="/mclan">MC Lan</a></li>
                        <li><a href="/matue">Matuê</a></li>
                    </ul>

                    <h1>Sertanejo</h1>
                    <ul id="sertanejo">
                        <li><a href="/henriquejuliano">Henrique & Juliano</a></li>
                        <li><a href="/exaltasamba">Exalta Samba</a></li>
                    </ul>

                    <h1>Pop</h1>
                    <ul id="pop">
                        <li><a href="/coldplay">Coldplay</a></li>
                        <li><a href="/marshmello">Marshmello</a></li>
                        <li><a href="/dualipa">Dua Lipa</a></li>
                        <li><a href="/rihanna">Rihanna</a></li>
                        <li><a href="/samsmith">Sam Smith</a></li>
                        <li><a href="/brunomars">Bruno Mars</a></li>
                        <li><a href="/sia">Sia</a></li>
                        <li><a href="/katyperry">Katy Perry</a></li>
                        <li><a href="/harrystyles">Harry Styles</a></li>
                        <li><a href="/cardib">Cardi B</a></li>
                        <li><a href="/travisscott">Travis Scott</a></li>
                        <li><a href="/billieeilish">Billie Eilish</a></li>
                        <li><a href="/shawnmendes">Shawn Mendes</a></li>
                        <li><a href="/lizzo">Lizzo</a></li>
                        <li><a href="/halsey">Halsey</a></li>
                        <li><a href="/dojacat">Doja Cat</a></li>
                        <li><a href="/khalid">Khalid</a></li>
                        <li><a href="/adele">Adele</a></li>
                        <li><a href="/lilnasx">Lil Nas X</a></li>
                        <li><a href="/jbalvin">J Balvin</a></li>
                        <li><a href="/badbunny">Bad Bunny</a></li>
                        <li><a href="/usher">Usher</a></li>
                        <li><a href="/maroon5">Maroon 5</a></li>
                        <li><a href="/elliegoulding">Ellie Goulding</a></li>
                        <li><a href="/selenagomez">Selena Gomez</a></li>
                        <li><a href="/camilacabello">Camila Cabello</a></li>
                        <li><a href="/johnlegend">John Legend</a></li>
                        <li><a href="/charlieputh">Charlie Puth</a></li>
                        <li><a href="/meghantrainor">Meghan Trainor</a></li>
                        <li><a href="/jasonderulo">Jason Derulo</a></li>
                        <li><a href="/nickjonas">Nick Jonas</a></li>
                        <li><a href="/zayn">Zayn</a></li>
                        <li><a href="/niallhoran">Niall Horan</a></li>
                        <li><a href="/ricky-martin">Ricky Martin</a></li>
                        <li><a href="/robinthicke">Robin Thicke</a></li>
                        <li><a href="/bebe-rexha">Bebe Rexha</a></li>
                        <li><a href="/austinmahone">Austin Mahone</a></li>
                        <li><a href="/nashville">Nashville</a></li>
                        <li><a href="/h-e-r">H.E.R.</a></li>
                        <li><a href="/jacobcollier">Jacob Collier</a></li>
                        <li><a href="/tove-lo">Tove Lo</a></li>
                        <li><a href="/cl">CL</a></li>
                        <li><a href="/lindsey-stirling">Lindsey Stirling</a></li>
                        <li><a href="/bryson-tiller">Bryson Tiller</a></li>
                    </ul>

                    <h1>Rock</h1>
                    <ul id="rock">
                        <li><a href="/acdc">AC/DC</a></li>
                        <li><a href="/aliceinchains">Alice in Chains</a></li>
                        <li><a href="/therollingstones">The Rolling Stones</a></li>
                        <li><a href="/thebeatles">The Beatles</a></li>
                        <li><a href="/theoffspring">The Offspring</a></li>
                        <li><a href="/greenday">Green Day</a></li>
                        <li><a href="/blink182">Blink-182</a></li>
                        <li><a href="/pearljam">Pearl Jam</a></li>
                        <li><a href="/linkinpark">Linkin Park</a></li>
                        <li><a href="/thesmashingpumpkins">The Smashing Pumpkins</a></li>
                        <li><a href="/mychemicalromance">My Chemical Romance</a></li>
                        <li><a href="/rageagainstthemachine">Rage Against the Machine</a></li>
                        <li><a href="/thecure">The Cure</a></li>
                        <li><a href="/oasis">Oasis</a></li>
                        <li><a href="/blur">Blur</a></li>
                        <li><a href="/thehives">The Hives</a></li>
                        <li><a href="/nineinchnails">Nine Inch Nails</a></li>
                        <li><a href="/systemofadown">System of a Down</a></li>
                        <li><a href="/metallica">Metallica</a></li>
                        <li><a href="/ironmaiden">Iron Maiden</a></li>
                        <li><a href="/slayer">Slayer</a></li>
                        <li><a href="/judaspriest">Judas Priest</a></li>
                        <li><a href="/theband">The Band</a></li>
                        <li><a href="/thewhitestripes">The White Stripes</a></li>
                        <li><a href="/ninenichtrails">Nine Inch Nails</a></li>
                        <li><a href="/thecure">The Cure</a></li>
                    </ul>

                    <h1>Punk</h1>
                    <ul id="punk">
                        <li><a href="/blink182">Blink-182</a></li>
                        <li><a href="/theoffspring">The Offspring</a></li>
                        <li><a href="/greenday">Green Day</a></li>
                        <li><a href="/ramones">Ramones</a></li>
                        <li><a href="/sexpistols">Sex Pistols</a></li>
                        <li><a href="/deadkenneds">Dead Kennedys</a></li>
                        <li><a href="/badreligion">Bad Religion</a></li>
                        <li><a href="/nofx">NOFX</a></li>
                        <li><a href="/descendents">Descendents</a></li>
                        <li><a href="/riseagainst">Rise Against</a></li>
                    </ul>

                    <h1>Thrash</h1>
                    <ul id="thrash">
                        <li><a href="/metallica">Metallica</a></li>
                        <li><a href="/slayer">Slayer</a></li>
                        <li><a href="/megadeth">Megadeth</a></li>
                        <li><a href="/anthrax">Anthrax</a></li>
                        <li><a href="/exodus">Exodus</a></li>
                        <li><a href="/testament">Testament</a></li>
                        <li><a href="/overkill">Overkill</a></li>
                        <li><a href="/kreator">Kreator</a></li>
                    </ul>

                    <h1>Pagode</h1>
                    <ul id="pagode">
                        <li><a href="/exaltasamba">Exalta Samba</a></li>
                        <li><a href="/katinguele">Katinguelê</a></li>
                        <li><a href="/salaodebeleza">Salão de Beleza</a></li>
                    </ul>

                    <h1>Samba</h1>
                    <ul id="samba">
                        <li><a href="/sambajazz">Samba Jazz</a></li>
                        <li><a href="/sambareggae">Samba Reggae</a></li>
                        <li><a href="/cartola">Cartola</a></li>
                        <li><a href="/joaoselvagem">João Selvas</a></li>
                        <li><a href="/sambasociety">Samba Society</a></li>
                    </ul>



            </section>
        </div>
        <Carrousel></Carrousel>
        
    </div>
    )
}