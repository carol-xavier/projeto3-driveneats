let prato = 0;
let precoPrato = 0;
function selecionarComida(classPrato, preco) {
  prato = document.querySelector(".pratos");
  precoPrato = preco;
  const cleanup = prato.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }
  const elemento = prato.querySelector(classPrato);
  elemento.classList.add("selecionado");  

  const check = prato.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }
  const verdinho = prato.querySelector(classPrato);
  verdinho.classList.add("check");  

  ativarBotao();
}

let bebida = 0;
let precoBebida = 0;
function selecionarBebida(classBebida, preco) {
  bebida = document.querySelector(".bebidas");
  precoBebida = preco;
  const cleanup = bebida.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }
  const elemento = bebida.querySelector(classBebida);
  elemento.classList.add("selecionado");  

  const check = bebida.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }
  const verdinho = bebida.querySelector(classBebida);
  verdinho.classList.add("check");  

  ativarBotao();
}

let sobremesa = 0;
let precoSobremesa = 0;
function selecionarSobremesa(classSobremesa, preco) {
  sobremesa = document.querySelector(".sobremesas");
  precoSobremesa = preco;
  const cleanup = sobremesa.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }
  const elemento = sobremesa.querySelector(classSobremesa);
  elemento.classList.add("selecionado");  
  const check = sobremesa.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }
  const verdinho = sobremesa.querySelector(classSobremesa);
  verdinho.classList.add("check");  

  ativarBotao();
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

let total = 0;
function botaoDeConfirmacao(){
  if (prato != 0 && bebida != 0 && sobremesa != 0){
    total = precoPrato + precoBebida + precoSobremesa;
    const confirmacao = document.querySelector('.confirmacao');
    confirmacao.classList.remove('escondido');
    document.querySelector('.opcao-prato').innerHTML = prato;
    document.querySelector('.preco-prato').innerHTML = precoPrato.toFixed(2).toString().replace('.', ',');
    document.querySelector('.opcao-bebida').innerHTML = bebida;
    document.querySelector('.preco-bebida').innerHTML = precoBebida.toFixed(2).toString().replace('.', ',');
    document.querySelector('.opcao-sobremesa').innerHTML = sobremesa;
    document.querySelector('.preco-sobremesa').innerHTML = precoSobremesa.toFixed(2).toString().replace('.', ',');
    document.querySelector('.preco-total').innerHTML = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  }
}

function cancelarPedido() {
  const cancelar= document.querySelector('.confirmacao');
  cancelar.classList.add('escondido');
}

function finalizarPedido() {
  if (prato != 0 && bebida != 0 && sobremesa != 0) {
    const msgpadrao = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${(total).toFixed(2)}
  `
    window.open(`https://wa.me/5585986817611?text=${encodeURIComponent(msgpadrao)}`);
  }
}
