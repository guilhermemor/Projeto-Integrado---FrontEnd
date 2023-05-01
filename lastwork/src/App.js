import './App.css';

function App() {
  return (
    <div className="App">
     <div className= "main">
      <div className= "center">
          <div className="menu">
            <div className= "logo">
              <h3>Code.School</h3>
            </div>
            <div className= "item-menu">
              <a href="#">Login</a>
            </div>
          </div>


          <div className= "form">
          <h2>ENTRE EM CONTATO!</h2>
            <form>
              
              <div className= "items-form">
                <input  placeholder="Seu N ome..."type="text"/>
                <input  placeholder="Sua Idade..."type="text"/>
                <input  placeholder="Sua Data de Nascimento..."type="text"/>
                <input  placeholder="Seu Email..."type="text"/>
                <input  placeholder="Seu Cpf..."type="text"/>
                <input  placeholder="Seu Curso..."type="text"/>
                <input  placeholder="Sua Faculdade..."type="submit"/>
              </div>
            </form>
          </div>
          
          </div> 

     </div>

    <div className= "conteudo">
      <div className="center">
        <div className="conteudo-single">
          <h3>Sobre nossa Escola:</h3>
          <p>Somos uma instituição de ensino comprometida em fornecer aos nossos alunos uma educação de alta qualidade em programação, a fim de ajudá-los a atingir seus objetivos profissionais e pessoais.</p>
        </div>
        <div className="conteudo-single">
          <h3>Nossos Profissionais:</h3>
          <p>Nossos profissionais e professores de programação são altamente qualificados e experientes em suas áreas de atuação. Eles possuem um amplo conhecimento teórico e prático em linguagens de programação, desenvolvimento de software, design de sistemas e solução de problemas complexos.</p>
        </div>
        <div className="conteudo-single">
          <h3>Nós Ensinamos:</h3>
          <p>A escola frequentada oferece um ensino completo e atualizado em tecnologia da informação, com ênfase nas áreas de backend e front-end. Essas áreas são fundamentais para o desenvolvimento de sistemas e aplicações modernas, e a escola está comprometida em preparar seus alunos para trabalhar nesse mercado em constante evolução.</p>
        </div>
        <div className="conteudo-single">
          <h3>Melhor Counteúdo:</h3>
          <p>A escola se destaca por oferecer os melhores conteúdos e formas de ensino na área de tecnologia da informação. Seus cursos são ministrados por professores altamente qualificados e experientes, que utilizam metodologias inovadoras para ensinar os alunos a desenvolver sistemas e aplicações em backend e front-end.</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
