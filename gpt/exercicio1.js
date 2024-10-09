const prompt = require('prompt-sync')();
var n;
n = Number(prompt("Digite um Número: "));
n = parseInt(n);
console.log(n % 2 === 0 ? "Par": "Ímpar");