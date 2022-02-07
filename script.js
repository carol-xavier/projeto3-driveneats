let sectionPratos = null;
let nomePrato = 'Prato';
let precoPrato = 0;


function selecionarComida(classPratoClicado, preco) {
  sectionPratos = document.querySelector(".pratos");
  
  const cleanup = sectionPratos.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }

  const elemento = sectionPratos.querySelector(classPratoClicado);
  precoPrato = elemento.querySelector('.preco').innerHTML;
  nomePrato = elemento.querySelector('.nome').innerHTML;
  elemento.classList.add("selecionado");

  const check = sectionPratos.querySelector(".check");
  if (check !== null) {
    check.classList.remove("check");
  }
  const verdinho = sectionPratos.querySelector(classPratoClicado);
  verdinho.classList.add("check");

  ativarBotao();
}

let bebida = 0;
let precoBebida = 0;

function selecionarBebida(classBebida, preco) {
  bebida = document.querySelector(".bebidas");

  const cleanup = bebida.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }
  const elemento = bebida.querySelector(classBebida);
  precoBebida = elemento.querySelector('.preco').innerHTML;

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

  const cleanup = sobremesa.querySelector(".selecionado");
  if (cleanup !== null) {
    cleanup.classList.remove("selecionado");
  }
  const elemento = sobremesa.querySelector(classSobremesa);
  precoSobremesa = elemento.querySelector('.preco').innerHTML;

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
  if (botao !== null) {
    if (sectionPratos != 0 && bebida != 0 && sobremesa != 0) {
      botao.classList.add('finalizar');
      botao.classList.remove('selecionar');
      botao.innerHTML = 'Fechar pedido (:'
    }
  }
}

let total = 0;
function botaoDeConfirmacao() {
  if (sectionPratos != 0 && bebida != 0 && sobremesa != 0) {

    let precoPratoNumber = Number(precoPrato.replace('R$ ', '').replace(',', '.'));
    let precoBebidaNumber = Number(precoBebida.replace('R$ ', '').replace(',', '.'));
    let precoSobremesaNumber = Number(precoSobremesa.replace('R$ ', '').replace(',', '.'));
    
    total = precoPratoNumber + precoBebidaNumber + precoSobremesaNumber;
    const confirmacao = document.querySelector('.confirmacao');
    confirmacao.classList.remove('escondido');

    document.querySelector('.opcao-prato').innerHTML = nomePrato;
    document.querySelector('.preco-prato').innerHTML = precoPrato;
    
    document.querySelector('.preco-bebida').innerHTML = precoBebida;
    document.querySelector('.opcao-bebida').innerHTML = bebida;
    
    document.querySelector('.opcao-sobremesa').innerHTML = sobremesa;
    document.querySelector('.preco-sobremesa').innerHTML = precoSobremesa;
    
    document.querySelector('.preco-total').innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}

function cancelarPedido() {
  const cancelar = document.querySelector('.confirmacao');
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
