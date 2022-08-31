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

sortearPalavra();
function sortearPalavra() {
  const indexPalavra = parseInt(Math.random() * palavras.length);
  const palavraSecreta = palavras[indexPalavra].name;
  console.log(palavraSecreta);
}
