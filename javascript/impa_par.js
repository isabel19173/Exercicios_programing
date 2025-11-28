//Fub  um número inteiro e diga se ele é par ou ímpar. (Dica: se o número dividido por 2 tiver resto 0, é par)
const num = Number(prompt("Digite um número, vou validar se é par ou impar:"))
const resto =num %  2
if (resto == 0 ){
  alert("O número informado é par "+ resto)
} else{
 alert ("O número informado é impar " + resto)
}
