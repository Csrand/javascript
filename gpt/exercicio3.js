function fatorialIterativo(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica o resultado pelo número atual
    }
    return resultado;
}

const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número para calcular o fatorial: "));
const resultado = fatorialIterativo(numero);
console.log(`O fatorial de ${numero} é ${resultado}.`);
