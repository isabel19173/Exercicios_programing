// FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas

const prompt = require("prompt-sync")(); // importa o módulo

let re = parseFloat(prompt("Digite seu valor de horas trabalhadas: "));
let re2 = parseFloat(prompt("Digite quantidadees de horas trabalhadas: "));

const salario = re * re2;

console.log('A valor de horas trabalhadas  de R$',re,' e quantidade de horas trabalhadas ',re2,' resulta em R$ ',salario);
