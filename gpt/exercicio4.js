const prompt = require('prompt-sync')();
const texto = prompt("Digite uma Frase: ");
function inverterFrase(frase){
    return frase.split('').reverse().join('');
}
console.log(inverterFrase(texto));