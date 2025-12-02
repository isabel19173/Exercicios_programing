//Peça dois números inteiros e mostre qual deles é o maior.
alert("Qual é maior?");

const num = Number(prompt("Para verificar qual número é maior, digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (num > num2) { 
  alert("O primeiro número digitado " + num + " é maior que " + num2);
} else if (num2 > num) {
  alert("O segundo número digitado " + num2 + " é maior que " + num);
} else {
  alert("Os dois números são iguais.");
}
