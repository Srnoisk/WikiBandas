import React from "react";
import Header from "../header/header";
import acdc from "../../banco/ImagensDasBandas/acdc.png"
import aliceinchains from "../../banco/ImagensDasBandas/alice-in-chains.jpg"

export default function Carrousel() {
        return (
            <div>
                <Header />

                <form id="barra_de_pesquisa">
                {/* Formulário de pesquisa pode ser adicionado aqui */}
                </form>

                <div className="container">
                <section>
                    <h2>Catalogo</h2>
                    <p>Aqui estão algumas das bandas e artistas:</p>

                    <div className="catalogue">
            <div className="catalogue-item">
              <a href="/acdc"><img src="https://th.bing.com/th/id/OIP.yAtzamue7xVX5AOFOkQg_gHaHa?rs=1&pid=ImgDetMain" alt="AC/DC" /></a>
              <p>AC/DC</p>
            </div>
            <div className="catalogue-item">
              <a href="/aliceinchains"><img src="https://th.bing.com/th/id/R.5b873bd44528b102f729881b84804601?rik=8NeIm61jbT%2fl%2bw&pid=ImgRaw&r=0" alt="Alice in Chains" /></a>
              <p>Alice in Chains</p>
            </div>
            <div className="catalogue-item">
              <a href="/bathory"><img src="https://i.pinimg.com/originals/83/ea/94/83ea9497b5adb5515a1ee776902d4bcb.jpg" alt="Bathory" /></a>
              <p>Bathory</p>
            </div>
            <div className="catalogue-item">
              <a href="/billieeilish"><img src="https://i.pinimg.com/originals/6b/ac/bc/6bacbca20b70515a203bdc58122731a2.png" alt="Billie Eilish" /></a>
              <p>Billie Eilish</p>
            </div>
            <div className="catalogue-item">
              <a href="/coldplay"><img src="https://i.pinimg.com/736x/34/a6/4b/34a64b12ad920c2b8ac639d4bd5f796e.jpg" alt="Coldplay" /></a>
              <p>Coldplay</p>
            </div>
            <div className="catalogue-item">
              <a href="/exaltasamba"><img src="https://th.bing.com/th/id/OIP.D2ae0lGQeEglWetPPJzruQHaHa?rs=1&pid=ImgDetMain" alt="Exalta Samba" /></a>
              <p>Exalta Samba</p>
            </div>
            <div className="catalogue-item">
              <a href="/foofighters"><img src="https://th.bing.com/th/id/R.03e3da7d01333a15279ce50937b85531?rik=Z0qTIqc%2fFYOiVA&pid=ImgRaw&r=0" alt="Foo Fighters" /></a>
              <p>Foo Fighters</p>
            </div>
            <div className="catalogue-item">
              <a href="/henriquejuliano"><img src="https://images.genius.com/3bd85f3f671c64e0c5de3cf01c50d250.1000x1000x1.jpg" alt="Henrique & Juliano" /></a>
              <p>Henrique & Juliano</p>
            </div>
            <div className="catalogue-item">
              <a href="/ledzeppelin"><img src="https://media.webmagazine24.it/wp-content/uploads/2018/12/25040730/Led-Zeppelin.jpg" alt="Led Zeppelin" /></a>
              <p>Led Zeppelin</p>
            </div>
            <div className="catalogue-item">
              <a href="/marshmello"><img src="https://www.logolynx.com/images/logolynx/79/7904c8cde8193ae1beb560cdf0f94408.jpeg" alt="Marshmello" /></a>
              <p>Marshmello</p>
            </div>
            <div className="catalogue-item">
              <a href="/matue"><img src="https://i.pinimg.com/236x/08/ed/fe/08edfec8a8b012f8233723e7ed30c941.jpg" alt="Matuê" /></a>
              <p>Matuê</p>
            </div>
            <div className="catalogue-item">
              <a href="/mclan"><img src="https://images.genius.com/22687a82a081a784f1e6b7e3073a89ca.1000x1000x1.png" alt="MC Lan" /></a>
              <p>MC Lan</p>
            </div>
            <div className="catalogue-item">
              <a href="/michaeljackson"><img src="https://th.bing.com/th/id/OIP.Gpr5X_gic4KkqkzQUT10MQHaF7?rs=1&pid=ImgDetMain" alt="Michael Jackson" /></a>
              <p>Michael Jackson</p>
            </div>
            <div className="catalogue-item">
              <a href="/nirvana"><img src="https://cdn.ustatik.com/_img/news/other/logo-nirvana.jpg" alt="Nirvana" /></a>
              <p>Nirvana</p>
            </div>
            <div className="catalogue-item">
              <a href="/pinkfloyd"><img src="https://pbs.twimg.com/profile_images/1080530965838159872/zc-OWBhI_400x400.jpg" alt="Pink Floyd" /></a>
              <p>Pink Floyd</p>
            </div>
            <div className="catalogue-item">
              <a href="/queen"><img src="https://images-na.ssl-images-amazon.com/images/I/81an2yOTi0L._AC_SL1500_.jpg" alt="Queen" /></a>
              <p>Queen</p>
            </div>
            <div className="catalogue-item">
              <a href="/rollingstones"><img src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Rolling-Stones.jpg" alt="Rolling Stones" /></a>
              <p>Rolling Stones</p>
            </div>
            <div className="catalogue-item">
              <a href="/thebeatles"><img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-beatles-black-and-white-by-michael-michael-barrack.jpg" alt="The Beatles" /></a>
              <p>The Beatles</p>
            </div>
            <div className="catalogue-item">
              <a href="/offspring"><img src="https://clipground.com/images/offspring-logo-7.jpg" alt="The Offspring" /></a>
              <p>The Offspring</p>
            </div>
            <div className="catalogue-item">
              <a href="/u2"><img src="https://th.bing.com/th/id/R.f650bc2eeea21a96ab433c133db3030d?rik=3Mu60xuWCaze2w&pid=ImgRaw&r=0&sres=1&sresct=1" alt="U2" /></a>
              <p>U2</p>
            </div>
            {/* Adicione mais imagens conforme necessário */}
          </div>





          <h1>Rock Alternativo</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/arcticmonkeys"><img src="https://th.bing.com/th/id/OIP.-I9cMw8Z60F67L5cF-B06gHaFr?rs=1&pid=ImgDetMain" alt="Arctic Monkeys" /></a>
                    <p>Arctic Monkeys</p>
                </div>
                <div className="catalogue-item">
                    <a href="/muse"><img src="https://www.logolynx.com/images/logolynx/b0/b0ec4cd25f3ce696331bb615afd3ed32.jpeg" alt="Muse" /></a>
                    <p>Muse</p>
                </div>
                <div className="catalogue-item">
                    <a href="/radiohead"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc3ZpRNSQeTm63bZadep6yzFFMgDbfi2-E4H_pvrN1ag5WwDw3Z4pZQTIDI01vaTg3UmwzbzhQKnvio9V6KJSQf7SI2NmBkPpwhHCXOi2BLR3OsvCscI8L3rXehhLDd2TZQg4-ZI9pOg/s320/Radiohead_logo.jpg" alt="Radiohead" /></a>
                    <p>Radiohead</p>
                </div>
                <div className="catalogue-item">
                    <a href="/thekillers"><img src="https://www.planeta.com/wp-content/uploads/2019/01/thekillers.jpg" alt="The Killers" /></a>
                    <p>The Killers</p>
                </div>
                <div className="catalogue-item">
                    <a href="/vampireweekend"><img src="https://cdn.dribbble.com/users/88613/screenshots/5394440/media/10dc59006328d1204b03906731752ba9.jpg?compress=1&resize=400x300&vertical=top" alt="Vampire Weekend" /></a>
                    <p>Vampire Weekend</p>
                </div>
                <div className="catalogue-item">
                    <a href="/the1975"><img src="https://cdn.dribbble.com/users/5877678/screenshots/14128627/image001.png" alt="The 1975" /></a>
                    <p>The 1975</p>
                </div>
                <div className="catalogue-item">
                    <a href="/florenceandthemachine"><img src="https://i.pinimg.com/736x/27/2b/66/272b66445081947da36dce5c1c777116.jpg" alt="Florence + The Machine" /></a>
                    <p>Florence + The Machine</p>
                </div>
                <div className="catalogue-item">
                    <a href="/tameimpala"><img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/5-tame-impala-logo-red-veles.jpg" alt="Tame Impala" /></a>
                    <p>Tame Impala</p>
                </div>
                <div className="catalogue-item">
                    <a href="/bandofhorses"><img src="https://th.bing.com/th/id/OIP.Dz01VtBScHG5WOFX0dVMDgHaHa?rs=1&pid=ImgDetMain" alt="Band of Horses" /></a>
                    <p>Band of Horses</p>
                </div>
                <div className="catalogue-item">
                    <a href="/cagetheelphant"><img src="https://www.logolynx.com/images/logolynx/42/420f9beab71788f88901d0e02a93217f.png" alt="Cage the Elephant" /></a>
                    <p>Cage the Elephant</p>
                </div>
                <div className="catalogue-item">
                    <a href="/interpol"><img src="https://th.bing.com/th/id/OIP.3rg4fiIK-twXJ-D2-kbE5AAAAA?rs=1&pid=ImgDetMain" alt="Interpol" /></a>
                    <p>Interpol</p>
                </div>
                <div className="catalogue-item">
                    <a href="/thelumineers"><img src="https://th.bing.com/th/id/R.3165b4a0b7a0b57ec4f3373d8ea2c59c?rik=05fepRNeshyKzg&pid=ImgRaw&r=0" alt="The Lumineers" /></a>
                    <p>The Lumineers</p>
                </div>
                <div className="catalogue-item">
                    <a href="/arcadefire"><img src="https://th.bing.com/th/id/R.3165b4a0b7a0b57ec4f3373d8ea2c59c?rik=05fepRNeshyKzg&pid=ImgRaw&r=0" alt="Arcade Fire" /></a>
                    <p>Arcade Fire</p>
                </div>
                <div className="catalogue-item">
                    <a href="/thefratellis"><img src="https://i.imgur.com/TheFratellis.jpg" alt="The Fratellis" /></a>
                    <p>The Fratellis</p>
                </div>
                <div className="catalogue-item">
                    <a href="/wolfmother"><img src="https://i.imgur.com/Wolfmother.jpg" alt="Wolfmother" /></a>
                    <p>Wolfmother</p>
                </div>
                <div className="catalogue-item">
                    <a href="/portugaltheman"><img src="https://i.imgur.com/PortugalTheMan.jpg" alt="Portugal. The Man" /></a>
                    <p>Portugal. The Man</p>
                </div>
            </div>

            <h1>Metal</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/bathory"><img src="https://i.pinimg.com/originals/83/ea/94/83ea9497b5adb5515a1ee776902d4bcb.jpg" alt="Bathory" /></a>
                    <p>Bathory</p>
                </div>
                <div className="catalogue-item">
                    <a href="/metallica"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Metallica_Logo.svg" alt="Metallica" /></a>
                    <p>Metallica</p>
                </div>
                <div className="catalogue-item">
                    <a href="/ironmaiden"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Iron_Maiden_logo.svg" alt="Iron Maiden" /></a>
                    <p>Iron Maiden</p>
                </div>
                <div className="catalogue-item">
                    <a href="/slayer"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Slayer_logo.svg" alt="Slayer" /></a>
                    <p>Slayer</p>
                </div>
                <div className="catalogue-item">
                    <a href="/judaspriest"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Judas_Priest_Logo.svg" alt="Judas Priest" /></a>
                    <p>Judas Priest</p>
                </div>
                <div className="catalogue-item">
                    <a href="/blacksabbath"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Black_Sabbath_Logo.svg" alt="Black Sabbath" /></a>
                    <p>Black Sabbath</p>
                </div>
            </div>

            <h1>Funk</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/mclan"><img src="https://images.genius.com/22687a82a081a784f1e6b7e3073a89ca.1000x1000x1.png" alt="MC Lan" /></a>
                    <p>MC Lan</p>
                </div>
                <div className="catalogue-item">
                    <a href="/matue"><img src="https://i.pinimg.com/236x/08/ed/fe/08edfec8a8b012f8233723e7ed30c941.jpg" alt="Matuê" /></a>
                    <p>Matuê</p>
                </div>
            </div>

            <h1>Sertanejo</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/henriquejuliano"><img src="https://images.genius.com/3bd85f3f671c64e0c5de3cf01c50d250.1000x1000x1.jpg" alt="Henrique & Juliano" /></a>
                    <p>Henrique & Juliano</p>
                </div>
                
            </div>

            <h1>Pagode</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/exaltasamba"><img src="https://th.bing.com/th/id/OIP.D2ae0lGQeEglWetPPJzruQHaHa?rs=1&pid=ImgDetMain" alt="Exalta Samba" /></a>
                    <p>Exalta Samba</p>
                </div>
            </div>

            <h1>Pop</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/coldplay"><img src="https://i.pinimg.com/736x/34/a6/4b/34a64b12ad920c2b8ac639d4bd5f796e.jpg" alt="Coldplay" /></a>
                    <p>Coldplay</p>
                </div>
                <div className="catalogue-item">
                    <a href="/marshmello"><img src="https://www.logolynx.com/images/logolynx/79/7904c8cde8193ae1beb560cdf0f94408.jpeg" alt="Marshmello" /></a>
                    <p>Marshmello</p>
                </div>
                <div className="catalogue-item">
                    <a href="/billieeilish"><img src="https://i.pinimg.com/originals/6b/ac/bc/6bacbca20b70515a203bdc58122731a2.png" alt="Billie Eilish" /></a>
                    <p>Billie Eilish</p>
                </div>
                <div className="catalogue-item">
                    <a href="/taylor swift"><img src="https://i.imgur.com/TaylorSwift.jpg" alt="Taylor Swift" /></a>
                    <p>Taylor Swift</p>
                </div>
                <div className="catalogue-item">
                    <a href="/ed sheeran"><img src="https://i.imgur.com/EdSheeran.jpg" alt="Ed Sheeran" /></a>
                    <p>Ed Sheeran</p>
                </div>
                <div className="catalogue-item">
                    <a href="/ariana grande"><img src="https://i.imgur.com/ArianaGrande.jpg" alt="Ariana Grande" /></a>
                    <p>Ariana Grande</p>
                </div>
                <div className="catalogue-item">
                    <a href="/beyonce"><img src="https://i.imgur.com/Beyonce.jpg" alt="Beyoncé" /></a>
                    <p>Beyoncé</p>
                </div>
                <div className="catalogue-item">
                    <a href="/drake"><img src="https://i.imgur.com/Drake.jpg" alt="Drake" /></a>
                    <p>Drake</p>
                </div>
                <div className="catalogue-item">
                    <a href="/ladygaga"><img src="https://i.imgur.com/LadyGaga.jpg" alt="Lady Gaga" /></a>
                    <p>Lady Gaga</p>
                </div>
                <div className="catalogue-item">
                    <a href="/theweeknd"><img src="https://i.imgur.com/TheWeeknd.jpg" alt="The Weeknd" /></a>
                    <p>The Weeknd</p>
                </div>
                <div className="catalogue-item">
                    <a href="/justinbieber"><img src="https://i.imgur.com/JustinBieber.jpg" alt="Justin Bieber" /></a>
                    <p>Justin Bieber</p>
                </div>
                <div className="catalogue-item">
                    <a href="/postmalone"><img src="https://i.imgur.com/PostMalone.jpg" alt="Post Malone" /></a>
                    <p>Post Malone</p>
                </div>
                <div className="catalogue-item">
                    <a href="/dualipa"><img src="https://i.imgur.com/DuaLipa.jpg" alt="Dua Lipa" /></a>
                    <p>Dua Lipa</p>
                </div>
                <div className="catalogue-item">
                    <a href="/rihanna"><img src="https://i.imgur.com/Rihanna.jpg" alt="Rihanna" /></a>
                    <p>Rihanna</p>
                </div>
                <div className="catalogue-item">
                    <a href="/samsmith"><img src="https://i.imgur.com/SamSmith.jpg" alt="Sam Smith" /></a>
                    <p>Sam Smith</p>
                </div>
                <div className="catalogue-item">
                    <a href="/brunomars"><img src="https://i.imgur.com/BrunoMars.jpg" alt="Bruno Mars" /></a>
                    <p>Bruno Mars</p>
                </div>
                <div className="catalogue-item">
                    <a href="/sia"><img src="https://i.imgur.com/Sia.jpg" alt="Sia" /></a>
                    <p>Sia</p>
                </div>
                <div className="catalogue-item">
                    <a href="/katyperry"><img src="https://i.imgur.com/KatyPerry.jpg" alt="Katy Perry" /></a>
                    <p>Katy Perry</p>
                </div>
                <div className="catalogue-item">
                    <a href="/harrystyles"><img src="https://i.imgur.com/HarryStyles.jpg" alt="Harry Styles" /></a>
                    <p>Harry Styles</p>
                </div>
                <div className="catalogue-item">
                    <a href="/cardib"><img src="https://i.imgur.com/CardiB.jpg" alt="Cardi B" /></a>
                    <p>Cardi B</p>
                </div>
                <div className="catalogue-item">
                    <a href="/travisscott"><img src="https://i.imgur.com/TravisScott.jpg" alt="Travis Scott" /></a>
                    <p>Travis Scott</p>
                </div>
                <div className="catalogue-item">
                    <a href="/shawnmendes"><img src="https://i.imgur.com/ShawnMendes.jpg" alt="Shawn Mendes" /></a>
                    <p>Shawn Mendes</p>
                </div>
                <div className="catalogue-item">
                    <a href="/lizzo"><img src="https://i.imgur.com/Lizzo.jpg" alt="Lizzo" /></a>
                    <p>Lizzo</p>
                </div>
                <div className="catalogue-item">
                    <a href="/halsey"><img src="https://i.imgur.com/Halsey.jpg" alt="Halsey" /></a>
                    <p>Halsey</p>
                </div>
                <div className="catalogue-item">
                    <a href="/dojacat"><img src="https://i.imgur.com/DojaCat.jpg" alt="Doja Cat" /></a>
                    <p>Doja Cat</p>
                </div>
                <div className="catalogue-item">
                    <a href="/khalid"><img src="https://i.imgur.com/Khalid.jpg" alt="Khalid" /></a>
                    <p>Khalid</p>
                </div>
                <div className="catalogue-item">
                    <a href="/adele"><img src="https://i.imgur.com/Adele.jpg" alt="Adele" /></a>
                    <p>Adele</p>
                </div>
                <div className="catalogue-item">
                    <a href="/lilnasx"><img src="https://i.imgur.com/LilNasX.jpg" alt="Lil Nas X" /></a>
                    <p>Lil Nas X</p>
                </div>
                <div className="catalogue-item">
                    <a href="/jbalvin"><img src="https://i.imgur.com/JBalvin.jpg" alt="J Balvin" /></a>
                    <p>J Balvin</p>
                </div>
                <div className="catalogue-item">
                    <a href="/badbunny"><img src="https://i.imgur.com/BadBunny.jpg" alt="Bad Bunny" /></a>
                    <p>Bad Bunny</p>
                </div>
                <div className="catalogue-item">
                    <a href="/usher"><img src="https://i.imgur.com/Usher.jpg" alt="Usher" /></a>
                    <p>Usher</p>
                </div>
                <div className="catalogue-item">
                    <a href="/maroon5"><img src="https://i.imgur.com/Maroon5.jpg" alt="Maroon 5" /></a>
                    <p>Maroon 5</p>
                </div>
                <div className="catalogue-item">
                    <a href="/elliegoulding"><img src="https://i.imgur.com/EllieGoulding.jpg" alt="Ellie Goulding" /></a>
                    <p>Ellie Goulding</p>
                </div>
                <div className="catalogue-item">
                    <a href="/selenagomez"><img src="https://i.imgur.com/SelenaGomez.jpg" alt="Selena Gomez" /></a>
                    <p>Selena Gomez</p>
                </div>
                <div className="catalogue-item">
                    <a href="/camilacabello"><img src="https://i.imgur.com/CamilaCabello.jpg" alt="Camila Cabello" /></a>
                    <p>Camila Cabello</p>
                </div>
                <div className="catalogue-item">
                    <a href="/johnlegend"><img src="https://i.imgur.com/JohnLegend.jpg" alt="John Legend" /></a>
                    <p>John Legend</p>
                </div>
                <div className="catalogue-item">
                    <a href="/charlieputh"><img src="https://i.imgur.com/CharliePuth.jpg" alt="Charlie Puth" /></a>
                    <p>Charlie Puth</p>
                </div>
            </div>

            <h1>Rock</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/acdc"><img src="https://th.bing.com/th/id/OIP.yAtzamue7xVX5AOFOkQg_gHaHa?rs=1&pid=ImgDetMain" alt="AC/DC" /></a>
                    <p>AC/DC</p>
                </div>
                <div className="catalogue-item">
                    <a href="/ledzeppelin"><img src="https://media.webmagazine24.it/wp-content/uploads/2018/12/25040730/Led-Zeppelin.jpg" alt="Led Zeppelin" /></a>
                    <p>Led Zeppelin</p>
                </div>
                <div className="catalogue-item">
                    <a href="/thebeatles"><img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-beatles-black-and-white-by-michael-michael-barrack.jpg" alt="The Beatles" /></a>
                    <p>The Beatles</p>
                </div>
                <div className="catalogue-item">
                    <a href="/rollingstones"><img src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Rolling-Stones.jpg" alt="Rolling Stones" /></a>
                    <p>Rolling Stones</p>
                </div>
                <div className="catalogue-item">
                    <a href="/pinkfloyd"><img src="https://pbs.twimg.com/profile_images/1080530965838159872/zc-OWBhI_400x400.jpg" alt="Pink Floyd" /></a>
                    <p>Pink Floyd</p>
                </div>
                <div className="catalogue-item">
                    <a href="/nirvana"><img src="https://cdn.ustatik.com/_img/news/other/logo-nirvana.jpg" alt="Nirvana" /></a>
                    <p>Nirvana</p>
                </div>
                <div className="catalogue-item">
                    <a href="/theoffpsring"><img src="https://clipground.com/images/offspring-logo-7.jpg" alt="The Offspring" /></a>
                    <p>The Offspring</p>
                </div>
                <div className="catalogue-item">
                    <a href="/thewho"><img src="https://i.imgur.com/TheWho.jpg" alt="The Who" /></a>
                    <p>The Who</p>
                </div>
                <div className="catalogue-item">
                    <a href="/foofigthers"><img src="https://th.bing.com/th/id/R.03e3da7d01333a15279ce50937b85531?rik=Z0qTIqc%2fFYOiVA&pid=ImgRaw&r=0" alt="Foo Fighters" /></a>
                    <p>Foo Fighters</p>
                </div>
                <div className="catalogue-item">
                    <a href="/greenday"><img src="https://i.imgur.com/GreenDay.jpg" alt="Green Day" /></a>
                    <p>Green Day</p>
                </div>
                <div className="catalogue-item">
                    <a href="/blink182"><img src="https://i.imgur.com/Blink182.jpg" alt="Blink-182" /></a>
                    <p>Blink-182</p>
                </div>
                <div className="catalogue-item">
                    <a href="/beastieboys"><img src="https://i.imgur.com/BeastieBoys.jpg" alt="Beastie Boys" /></a>
                    <p>Beastie Boys</p>
                </div>
                <div className="catalogue-item">
                    <a href="/soundgarden"><img src="https://i.imgur.com/Soundgarden.jpg" alt="Soundgarden" /></a>
                    <p>Soundgarden</p>
                </div>
            </div>

            <h1>Punk</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/ramones"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Ramones_1976.jpg/800px-The_Ramones_1976.jpg" alt="Ramones" /></a>
                    <p>Ramones</p>
                </div>
                <div className="catalogue-item">
                    <a href="/theclash"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/The_Clash_-_1977.jpg/800px-The_Clash_-_1977.jpg" alt="The Clash" /></a>
                    <p>The Clash</p>
                </div>
                <div className="catalogue-item">
                    <a href="/sexpistols"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sex_Pistols_1977.jpg/800px-Sex_Pistols_1977.jpg" alt="Sex Pistols" /></a>
                    <p>Sex Pistols</p>
                </div>
                <div className="catalogue-item">
                    <a href="/deadkenneds"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Dead_Kennedys_%281979%29.jpg/800px-Dead_Kennedys_%281979%29.jpg" alt="Dead Kennedys" /></a>
                    <p>Dead Kennedys</p>
                </div>
                <div className="catalogue-item">
                    <a href="/blackflag"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Black_Flag_1983.jpg/800px-Black_Flag_1983.jpg" alt="Black Flag" /></a>
                    <p>Black Flag</p>
                </div>
                <div className="catalogue-item">
                    <a href="/badbrains"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bad_Brains_1982.jpg/800px-Bad_Brains_1982.jpg" alt="Bad Brains" /></a>
                    <p>Bad Brains</p>
                </div>
                <div className="catalogue-item">
                    <a href="/descendents"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Descendents_1982.jpg/800px-Descendents_1982.jpg" alt="Descendents" /></a>
                    <p>Descendents</p>
                </div>
                <div className="catalogue-item">
                    <a href="/circlejerks"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Circle_Jerks_1980.jpg/800px-Circle_Jerks_1980.jpg" alt="Circle Jerks" /></a>
                    <p>Circle Jerks</p>
                </div>
            </div>

            <h1>Thrash</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/slayer"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Slayer_logo.svg" alt="Slayer" /></a>
                    <p>Slayer</p>
                </div>
                <div className="catalogue-item">
                    <a href="/metallica"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Metallica_Logo.svg" alt="Metallica" /></a>
                    <p>Metallica</p>
                </div>
                <div className="catalogue-item">
                    <a href="/megadeth"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Megadeth_logo.svg/800px-Megadeth_logo.svg.png" alt="Megadeth" /></a>
                    <p>Megadeth</p>
                </div>
                <div className="catalogue-item">
                    <a href="/anthrax"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anthrax_logo.svg/800px-Anthrax_logo.svg" alt="Anthrax" /></a>
                    <p>Anthrax</p>
                </div>
                <div className="catalogue-item">
                    <a href="/exodus"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Exodus_band_logo.svg/800px-Exodus_band_logo.svg" alt="Exodus" /></a>
                    <p>Exodus</p>
                </div>
                <div className="catalogue-item">
                    <a href="/overkill"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Overkill_logo.svg/800px-Overkill_logo.svg" alt="Overkill" /></a>
                    <p>Overkill</p>
                </div>
                <div className="catalogue-item">
                    <a href="/testament"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Testament_logo.svg/800px-Testament_logo.svg" alt="Testament" /></a>
                    <p>Testament</p>
                </div>
            </div>

            <h1>Samba</h1>
            <div className="catalogue">
                <div className="catalogue-item">
                    <a href="/exaltasamba"><img src="https://th.bing.com/th/id/OIP.D2ae0lGQeEglWetPPJzruQHaHa?rs=1&pid=ImgDetMain" alt="Exalta Samba" /></a>
                    <p>Exalta Samba</p>
                </div>
            </div>

                </section>
                </div>
        </div>
    )
}