const prompt = require('prompt-sync')();
const texto = prompt("Digite uma Frase: ");
const comprimento = texto.length;
console.log(`A frase "${texto}" tem ${comprimento} caracteres.`);