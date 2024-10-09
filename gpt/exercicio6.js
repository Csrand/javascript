const prompt = require('prompt-sync')();

function verificarPalindromo() {
    const entrada = prompt("Digite uma palavra ou frase: "); // Captura a entrada do usuário
    // Remove espaços, pontuação e converte para minúsculas
    const textoLimpo = entrada.replace(/[\W_]/g, '').toLowerCase(); 

    // Inverte a string
    const textoInvertido = textoLimpo.split('').reverse().join('');
    const resultado = textoLimpo === textoInvertido ? "É um palíndromo!":" Não é um palíndromo!";
    console.log(resultado);
}
verificarPalindromo();

