onload = function (params) {
  //Dados que vamos consumir
  const imoveis = [
    {
      name: "mansao cidade",
      valor: 650.0,
      tipo: "venda",
      banheiros: 2,
      quartos: 3,
    },
    {
      name: "mansao praia",
      valor: 480.0,
      tipo: "aluguel",
      banheiros: 2,
      quartos: 2,
    },
    {
      name: "mansao ilha",
      valor: 470.0,
      tipo: "venda",
      banheiros: 2,
      quartos: 3,
    },
    {
      name: "chale campo",
      valor: 400.0,
      tipo: "aluguel",
      banheiros: 2,
      quartos: 4,
    },
    {
      name: "chale montanha",
      valor: 450.0,
      tipo: "venda",
      banheiros: 2,
      quartos: 3,
    },
    {
      name: "mansao centro",
      valor: 650.0,
      tipo: "aluguel",
      banheiros: 2,
      quartos: 2,
    },
  ];

  //console.log(imoveis.nome) -> ERRADO
  //console.log(imoveis[0].nome) -> Certo (0 é o indice, poderia ser 1, 2 ... 6)

  /**
   * JSON Stringify -> Converte o nosso array/objeto em string pra ser salva no localStorage
   * JSON Parse -> Converte a String no formato original de Array/Objeto
   * 
   */
  // localStorage.setItem("imoveis", JSON.stringify(imoveis));
  

  /* Explicação de Métodos

  - Foreach -> executar alguma função com alguma informação do seu array
  - map -> percorrer todo o array ou modifica-lo
  - filter -> filtrar indices: busca um ou mais indices específicos por condição 

  imoveis.map((index, key, todos) => {
    
    myName('index');
    myName(index);
    myName('key');
    myName(key);
    myName('todos');
    myName(todos);
    
  })

  */
  
  // Gera o HTML do Meu Card com Informações Dinâmicas (ESTUDAR FUNÇÕES E SEUS USOS)

  function geraCard(nome, valor, quantidade_banheiros){
    return `
      <div class="card">

        <div class="media">
            <img src="./img/02.jpg" alt="casa">
        </div>
        <div class="meio">
            <h4>${nome}</h4>
            <p class="valor">${valor}R$ 400.000,00</p>
            <p class="desc-imovel">Descrição do imóvel.</p>
            <div class="icones">
                <h2><i class="fas fa-bed"></i></h2>
                <p>${quantidade_banheiros}</p>
                <h2><i class="fas fa-toilet"></i></h2>
                <p>03</p>
            </div>
        </div>
        <div class="baixo">
            <button class="detalhes">Detalhes</button>
        </div>
      </div>
    `
  }

  let HTML = '';

  // LOOP pra Acessar as Informações de Cada Card e poder enviar na função que gera o card (tudo de uma vez só, diferente do exemplo abaixo)
  //Ex.: HTML += geraCard(imoveis[0].nome, imoveis[0].valor, imoveis[0].banheiros)
  //Ex.: HTML += geraCard(imoveis[1].nome, imoveis[1].valor, imoveis[1].banheiros)
  imoveis.map(index => {
    HTML += geraCard(index.name, index.valor, index.banheiros)
  });

  // Inserindo cards na div que você quer exibir
  document.getElementById("card-main").innerHTML = HTML;

  // localStorage.setItem("imoveis", imoveis);
  // console.log('Json Stringify')
  // console.log(localStorage.getItem('imoveis_stringify'))
  // console.log('Puro')
  // console.log(localStorage.getItem('imoveis'))
  // console.log('Json Parse')
  // console.log(JSON.parse(localStorage.getItem('imoveis_stringify')))

  // Função para Input de Busca

  // Função que gera a estrutura do Card
  


  // HTML = "";

  // JSON.parse(
  //   localStorage.getItem("imoveis").map((index) => {
  //     HTML += `
  //     <div class="card">

  //           <div class="media">
  //               <img src="./img/02.jpg" alt="casa">
  //           </div>
  //           <div class="meio">
  //               <h4>${index.name}</h4>
  //               <p class="valor">${index.valor}R$ 400.000,00</p>
  //               <p class="desc-imovel">Descrição do imóvel.</p>
  //               <div class="icones">
  //                   <h2><i class="fas fa-bed"></i></h2>
  //                   <p>02</p>
  //                   <h2><i class="fas fa-toilet"></i></h2>
  //                   <p>03</p>
  //               </div>
  //           </div>
  //           <div class="baixo">
  //               <button class="detalhes">Detalhes</button>
  //           </div>
  //       </div>
  //     `;
  //   })
  // );
  // document.getElementsByClassName("cards").innerHTML = HTML;
};

function pesquisar() {
  const value = document.getElementById("search").value;

  if (value.lenth > 0) {
    const imoveis = JSON.parse(localStorage.getItem("imoveis"));
  }
}
