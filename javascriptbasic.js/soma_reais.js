// FUP que solicite dois números reais, realize a soma e imprima o resultado

const prompt = require("prompt-sync")(); // importa o módulo

let re = parseFloat(prompt("Digite o primeiro número: "));
let re2 = parseFloat(prompt("Digite o segundo número: "));

const resultado = re + re2;

console.log(`A soma de R$ ${re} com R$ ${re2} resulta em R$ ${resultado}`);
