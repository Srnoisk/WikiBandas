import Header from "../header/header";

function Contato () {
    return (
        <div>
        <Header>

        </Header>

        <section id="Sobre_nos">
        <h2 id='sobre_h2'>Sobre Nós</h2>
        <p className="sobre_nos_informações">Bem-vindo ao <b>Wiki das Bandas</b>, um projeto apaixonante concebido pelos alunos do <b>Senac Bauru</b>, dedicado à<br/> celebração da música em todas as suas formas e expressões!
        Nossa missão é oferecer um espaço vibrante<br/> e informativo onde entusiastas da música de todas as idades e origens possam explorar, descobrir e se encantar<br/> com a rica tapeçaria musical que permeia nosso mundo.
        Guiados pela paixão pela música e pelo desejo de compartilhar<br/> conhecimento, nossa equipe está empenhada em fornecer conteúdo envolvente e relevante sobre bandas, gêneros<br/> musicais, história da música e muito mais.
        Seja você um ávido colecionador de vinil, um músico aspirante ou simplesmente<br/> alguém que aprecia uma boa melodia, esperamos que encontre inspiração e diversão em nosso <b>Wiki das Bandas</b>.<br/>
        Prepare-se para embarcar em uma jornada musical emocionante conosco. Estamos animados para compartilhar<br/> essa aventura com <b>você!!!</b></p>
    </section>    

    <section>
        <h2 id='sobre_h2'>Entre em Contato</h2>
        <form id='formulario_contato' action="#" method="post">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required placeholder="Digite seu nome completo"/>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required placeholder="SeuEmail@gmail.com"/>
            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required placeholder="digite sua mensagem"></textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </section>
<br/>
<br/>
<br/>
<br/>
        </div>
    )
}
export default Contato;