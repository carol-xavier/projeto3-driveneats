let prato = 0;
function selecionarComida(classPrato) {
  const pratos = document.querySelector(".pratos")
  const cleanup = pratos.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }

  const elemento = pratos.querySelector(classPrato);
  elemento.classList.add("selecionado");  

  const check = pratos.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }

  const verdinho = pratos.querySelector(classPrato);
  verdinho.classList.add("check");  


prato = ".selecionado";
}

let bebida = 0;
function selecionarBebida(classBebida) {
  const bebidas = document.querySelector(".bebidas")
  const cleanup = bebidas.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }

  const elemento = bebidas.querySelector(classBebida);
  elemento.classList.add("selecionado");  

  const check = bebidas.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }

  const verdinho = bebidas.querySelector(classBebida);
  verdinho.classList.add("check");  

  bebida = classBebida;
}

let sobremesa = 0;
function selecionarSobremesa(classSobremesa) {
  const sobremesas = document.querySelector(".sobremesas")
  const cleanup = sobremesas.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }

  const elemento = sobremesas.querySelector(classSobremesa);
  elemento.classList.add("selecionado");  

  const check = sobremesas.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }

  const verdinho = sobremesas.querySelector(classSobremesa);
  verdinho.classList.add("check");  

  sobremesa = classSobremesa;
}

function ativarBotao() {
  const botao = document.querySelector('.selecionar')
  if (botao !== null){
    if (prato != 0 && bebida != 0 && sobremesa !=0){
      botao.classList.add('finalizar');
      botao.classList.remove('selecionar');
      botao.innerHTML = 'Fechar pedido (:'
    }
  }
}