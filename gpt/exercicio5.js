const prompt = require('prompt-sync')();
const entrada = prompt("Digite 5 números usando vírgula: "); // Captura a entrada como string

function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b); // Ordena os números
}

// Converte a entrada em um array de números
const lista = entrada.split(',').map(Number); 

console.log(ordenarNumeros(lista)); // Chama a função e exibe os números ordenados
