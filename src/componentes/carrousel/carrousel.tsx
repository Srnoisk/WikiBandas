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
              <a href="/bathory"><img src="https://via.placeholder.com/150" alt="Bathory" /></a>
              <p>Bathory</p>
            </div>
            <div className="catalogue-item">
              <a href="/billieeilish"><img src="https://via.placeholder.com/150" alt="Billie Eilish" /></a>
              <p>Billie Eilish</p>
            </div>
            <div className="catalogue-item">
              <a href="/coldplay"><img src="https://via.placeholder.com/150" alt="Coldplay" /></a>
              <p>Coldplay</p>
            </div>
            <div className="catalogue-item">
              <a href="/exaltasamba"><img src="https://via.placeholder.com/150" alt="Exalta Samba" /></a>
              <p>Exalta Samba</p>
            </div>
            <div className="catalogue-item">
              <a href="/foofighters"><img src="https://via.placeholder.com/150" alt="Foo Fighters" /></a>
              <p>Foo Fighters</p>
            </div>
            <div className="catalogue-item">
              <a href="/henriquejuliano"><img src="https://via.placeholder.com/150" alt="Henrique & Juliano" /></a>
              <p>Henrique & Juliano</p>
            </div>
            <div className="catalogue-item">
              <a href="/ledzeppelin"><img src="https://via.placeholder.com/150" alt="Led Zeppelin" /></a>
              <p>Led Zeppelin</p>
            </div>
            <div className="catalogue-item">
              <a href="/marshmello"><img src="https://via.placeholder.com/150" alt="Marshmello" /></a>
              <p>Marshmello</p>
            </div>
            <div className="catalogue-item">
              <a href="/matue"><img src="https://via.placeholder.com/150" alt="Matuê" /></a>
              <p>Matuê</p>
            </div>
            <div className="catalogue-item">
              <a href="/mclan"><img src="https://images.genius.com/22687a82a081a784f1e6b7e3073a89ca.1000x1000x1.png" alt="MC Lan" /></a>
              <p>MC Lan</p>
            </div>
            <div className="catalogue-item">
              <a href="/michaeljackson"><img src="https://via.placeholder.com/150" alt="Michael Jackson" /></a>
              <p>Michael Jackson</p>
            </div>
            <div className="catalogue-item">
              <a href="/nirvana"><img src="https://via.placeholder.com/150" alt="Nirvana" /></a>
              <p>Nirvana</p>
            </div>
            <div className="catalogue-item">
              <a href="/pinkfloyd"><img src="https://via.placeholder.com/150" alt="Pink Floyd" /></a>
              <p>Pink Floyd</p>
            </div>
            <div className="catalogue-item">
              <a href="/queen"><img src="https://via.placeholder.com/150" alt="Queen" /></a>
              <p>Queen</p>
            </div>
            <div className="catalogue-item">
              <a href="/rollingstones"><img src="https://via.placeholder.com/150" alt="Rolling Stones" /></a>
              <p>Rolling Stones</p>
            </div>
            <div className="catalogue-item">
              <a href="/thebeatles"><img src="https://via.placeholder.com/150" alt="The Beatles" /></a>
              <p>The Beatles</p>
            </div>
            <div className="catalogue-item">
              <a href="/offspring"><img src="https://via.placeholder.com/150" alt="The Offspring" /></a>
              <p>The Offspring</p>
            </div>
            <div className="catalogue-item">
              <a href="/u2"><img src="https://via.placeholder.com/150" alt="U2" /></a>
              <p>U2</p>
            </div>
            {/* Adicione mais imagens conforme necessário */}
          </div>
                </section>
                </div>
        </div>
    )
}