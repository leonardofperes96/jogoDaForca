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
    name: 'html',
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

// Sortear index da palavra e categoria secreta
const palavraIndex = parseInt(Math.random() * palavras.length);

// Obter palavra e categoria secreta
const palavraSorteada = palavras[palavraIndex].name;
const categoriaSorteada = palavras[palavraIndex].category;
console.log(palavraSorteada);

//Array Dinamico de Palavras;
let novoArrayDinamico = [];
let letrasErradas = [];

// Funções

// Função para inciar o jogo

function startGame() {
  const arrayStart = palavraSorteada.split('');

  arrayStart.forEach((letra) => {
    palavraSorteadaContainer.innerHTML += `<span>_</span>`;
  });
}
// Função para começar o jogo;
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

function mostrarLetraErrada(letra) {
  palavraErradaContainer.innerHTML = '';

  letrasErradas.forEach((letra) => {
    palavraErradaContainer.innerHTML += `<span>${letra}</span>`;
  });
}

// Função para o evento de clique

function handleClick(e) {
  let letra = e.target.innerText;

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
}

//Eventos

allButtons.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
