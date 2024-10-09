const prompt = require('prompt-sync')();
var n;
n = Number(prompt("Digite Um Número: ")); // Atribuindo o valor inserido ao 'n'
n = parseInt(n);
for (let i = 1; i <= 10; i++) { 
    let resultado = n * i;
    console.log(n + " X " + i + " = " + resultado); // Exibindo o resultado corretamente
}
