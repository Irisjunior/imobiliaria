
onload = function (params) {

const imoveis = [
  {name:"mansao cidade",  valor:650.000,tipo:"venda",   banheiros:2, quartos:3},
  {name:"mansao praia",   valor:480.000,tipo:"aluguel", banheiros:2, quartos:2},
  {name:"mansao ilha",    valor:470.000,tipo:"venda",   banheiros:2, quartos:3},
  {name:"chale campo",    valor:400.000,tipo:"aluguel", banheiros:2, quartos:4},
  {name:"chale montanha", valor:450.000,tipo:"venda",   banheiros:2, quartos:3},
  {name:"mansao centro",  valor:650.000,tipo:"aluguel", banheiros:2, quartos:2}
    ]
    
    imoveis.forEach((value)=>{
      myname(value.name)
    })
    localStorage.setItem("imoveis",JSON.stringify(imoveis));
    
    function myname(value) {
      console.log(value)
    }

    HTML = "";
    JSON.parse(localStorage.getItem('imoveis').map(index=>{
      HTML +=`
      <div class="card">

            <div class="media">
                <img src="./img/02.jpg" alt="casa">
            </div>
            <div class="meio">
                <h4>${index.name}</h4>
                <p class="valor">${index.valor}R$ 400.000,00</p>
                <p class="desc-imovel">Descrição do imóvel.</p>
                <div class="icones">
                    <h2><i class="fas fa-bed"></i></h2>
                    <p>02</p>
                    <h2><i class="fas fa-toilet"></i></h2>
                    <p>03</p>
                </div>
            </div>
            <div class="baixo">
                <button class="detalhes">Detalhes</button>
            </div>
        </div>
      `
    })
   document.getElementsByClassName("cards").innerHTML=HTML;
   
  }

  function pesquisar() {
    const value = document.getElementById("search").value

    if(value.lenth > 0){
      const imoveis = JSON.parse(localStorage.getItem('imoveis'));
      
    }
  }

