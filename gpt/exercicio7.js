const prompt = require('prompt-sync')();

// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(faren) {
    return (faren - 32) * 5 / 9;
}

// Função principal para executar o conversor
function conversorTemperatura() {
    console.log("Conversor de Temperatura!");
    console.log("Selecione o modelo de entrada da temperatura:");
    console.log("1: Celsius para Fahrenheit");
    console.log("2: Fahrenheit para Celsius");

    const modo = Number(prompt("Digite o modo (1 ou 2): "));

    if (modo === 1) {
        const celsius = Number(prompt("Digite a temperatura em Celsius: "));
        const toFaren = celsiusParaFahrenheit(celsius);
        console.log(`${celsius}°C é igual a ${toFaren.toFixed(2)}°F`);
    } else if (modo === 2) {
        const faren = Number(prompt("Digite a temperatura em Fahrenheit: "));
        const toCelsius = fahrenheitParaCelsius(faren);
        console.log(`${faren}°F é igual a ${toCelsius.toFixed(2)}°C`);
    } else {
        console.log("Modo inválido! Por favor, escolha 1 ou 2.");
    }
}

// Chama a função principal
conversorTemperatura();


