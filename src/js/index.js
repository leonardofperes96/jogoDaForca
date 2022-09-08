const palavras = [
  (word01 = {
    name: 'BRASIL',
    category: 'PAÍSES',
  }),
  (word02 = {
    name: 'ARGENTINA',
    category: 'PAÍSES',
  }),
  (word03 = {
    name: 'URUGUAI',
    category: 'PAÍSES',
  }),
  (word04 = {
    name: 'ESPANHA',
    category: 'PAÍSES',
  }),
  (word05 = {
    name: 'INGLATERRA',
    category: 'PAÍSES',
  }),
  (word06 = {
    name: 'ALEMANHA',
    category: 'PAÍSES',
  }),
  (word07 = {
    name: 'ITALIA',
    category: 'PAÍSES',
  }),
  (word08 = {
    name: 'IRLANDA',
    category: 'PAÍSES',
  }),
  (word09 = {
    name: 'IRAQUE',
    category: 'PAÍSES',
  }),
  (word10 = {
    name: 'CHUVEIRO',
    category: 'PAÍSES',
  }),
  (word11 = {
    name: 'LAPIS',
    category: 'OBJETOS',
  }),
  (word12 = {
    name: 'CANETA',
    category: 'OBJETOS',
  }),
  (word13 = {
    name: 'COMPUTADOR',
    category: 'OBJETOS',
  }),
  (word14 = {
    name: 'IMPRESSORA',
    category: 'OBJETOS',
  }),
  (word15 = {
    name: 'JANELA',
    category: 'OBJETOS',
  }),
  (word16 = {
    name: 'MONITOR',
    category: 'OBJETOS',
  }),
  (word17 = {
    name: 'PRATO',
    category: 'OBJETOS',
  }),
  (word18 = {
    name: 'APONTADOR',
    category: 'OBJETOS',
  }),
  (word19 = {
    name: 'FACA',
    category: 'OBJETOS',
  }),
  (word20 = {
    name: 'ESCOVA',
    category: 'OBJETOS',
  }),
  (word21 = {
    name: 'JAVASCRIPT',
    category: 'TECNOLOGIAS',
  }),
  (word22 = {
    name: 'BOOTSTRAP',
    category: 'TECNOLOGIAS',
  }),
  (word23 = {
    name: 'REACT',
    category: 'TECNOLOGIAS',
  }),
  (word24 = {
    name: 'PYTHON',
    category: 'TECNOLOGIAS',
  }),
  (word25 = {
    name: 'TYPESCRIPT',
    category: 'TECNOLOGIAS',
  }),
  (word26 = {
    name: 'FRONTEND',
    category: 'TECNOLOGIAS',
  }),
  (word27 = {
    name: 'BACKEND',
    category: 'TECNOLOGIAS',
  }),
  (word28 = {
    name: 'VSCODE',
    category: 'TECNOLOGIAS',
  }),
  (word29 = {
    name: 'JQUERY',
    category: 'TECNOLOGIAS',
  }),
  (word30 = {
    name: 'HTML',
    category: 'TECNOLOGIAS',
  }),
];

// Elementos utilizados para manipulação do DOM;

const allButtons = document.querySelectorAll('[data-palavra-button]');
const categoriaDiv = document.querySelector('[data-palavra-categoria]');
const palavraSorteadaContainer = document.querySelector(
  '[data-palavra-sorteada]',
);
const palavraErradaContainer = document.querySelector('[data-palavra-errada]');
const imagemContainer = document.querySelector('[data-imagem-forca]');
const myModalAlternative = new bootstrap.Modal('#modalwin');
const bodyElement = document.querySelector('[data-modal-body]');
const tituloElement = document.querySelector('[data-modal-tittle]');

const btnReset = document.querySelector('[data-btn-reset]');

// Sortear index da palavra e categoria secreta
const palavraIndex = parseInt(Math.random() * palavras.length);

// Obter palavra e categoria secreta
const palavraSorteada = palavras[palavraIndex].name;
const categoriaSorteada = palavras[palavraIndex].category;
console.log(palavraSorteada);

//Array Dinamico de Palavras;
let novoArrayDinamico = [];
let letrasErradas = [];
let tentativas = 6;

// Funções

// Função para inciar o jogo

function startGame() {
  const arrayStart = palavraSorteada.split('');
  imagemContainer.innerHTML = `<img src="imagens/forca.png" alt="Forca" />`;

  arrayStart.forEach((letra) => {
    palavraSorteadaContainer.innerHTML += `<span>_</span>`;
  });
}
startGame();

// Mostrar a categoria sorteada
function appendCategory(categoriaSorteada) {
  categoriaDiv.innerHTML = `<h2>Dica : ${categoriaSorteada}</h2>`;
}
appendCategory(categoriaSorteada);

// Função para mostrar na tela a letra
function mostrarLetraTela(letra, arrayPalavraSorteada) {
  palavraSorteadaContainer.innerHTML = '';

  arrayPalavraSorteada.forEach((letra) => {
    if (novoArrayDinamico.includes(letra)) {
      palavraSorteadaContainer.innerHTML += `<span>${letra}</span>`;
    } else {
      palavraSorteadaContainer.innerHTML += `<span>_</span>`;
    }
  });
}

// Função para mostrar letras erradas

function mostrarLetraErrada() {
  palavraErradaContainer.innerHTML = '';

  letrasErradas.forEach((letra) => {
    palavraErradaContainer.innerHTML += `<span>${letra}</span>`;
  });
}

function carregarImagem() {
  switch (tentativas) {
    case 5:
      imagemContainer.innerHTML = `<img src="imagens/forca01.png" alt="Forca" />`;
      break;
    case 4:
      imagemContainer.innerHTML = `<img src="imagens/forca02.png" alt="Forca" />`;
      break;
    case 3:
      imagemContainer.innerHTML = `<img src="imagens/forca03.png" alt="Forca" />`;
      break;
    case 2:
      imagemContainer.innerHTML = `<img src="imagens/forca04.png" alt="Forca" />`;
      break;
    case 1:
      imagemContainer.innerHTML = `<img src="imagens/forca05.png" alt="Forca" />`;
      break;
    case 0:
      imagemContainer.innerHTML = `<img src="imagens/forca06.png" alt="Forca" />`;
      break;
    default:
      imagemContainer.style.background = "url('./imagens/forca.png')";
  }
}

function imagemForca(letra) {
  const pos = palavraSorteada.indexOf(letra);

  if (pos < 0) {
    tentativas--;
    carregarImagem();
  }
}
//Função para acabar o jogo
function appendModal(titulo, body) {
  bodyElement.innerText = body;

  tituloElement.innerText = titulo;

  myModalAlternative.show();
}

function endGame(arrayPalavraSorteada) {
  if (novoArrayDinamico.length === arrayPalavraSorteada.length) {
    // modal vitoria
    appendModal(`Você Ganhou!`, `Parabéns, continue assim!`);
  } else if (tentativas === 0) {
    // modal derrota
    appendModal(`Você Perdeu!`, `A palavra secreta era ${palavraSorteada}`);
  }
}

// Função para o evento de clique

function handleClick(e) {
  // selecionando o innerText dos buttons;
  let letra = e.target.innerText;

  // deixar o botão desabilitado após o clique
  let letraMomento = e.target;

  letraMomento.disabled = 'true';

  //Transformar a palavra sorteada e a categirua em um array com cada letra da palavra;
  const arrayPalavraSorteada = palavraSorteada.split('');

  // Mostrar palavra sorteada na tela
  if (arrayPalavraSorteada.includes(letra)) {
    novoArrayDinamico.push(letra);
    mostrarLetraTela(letra, arrayPalavraSorteada);
  } else {
    letrasErradas.push(letra);
    mostrarLetraErrada(letra);
  }

  // mostrar imagem da forca a cada tentativa errada
  imagemForca(letra);

  // função para acabar o jogo
  endGame(arrayPalavraSorteada);
}

//Eventos

allButtons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});

btnReset.addEventListener('click', () => {
  window.location.reload();
});
