//. Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.
alert("Operação Matemética:")

const numero1 = Number(prompt ("Digitar um número:"))
const numero2 = Number(prompt("Digite outro número:"))
const opm = prompt("Digite qual operação matemática gostaria:   adição,   subtração,   multiplicação ou  divisão")


const adicao = (numero1 + numero2)
const subtracao = (numero1 - numero2)
const multiplicacao =(numero1* numero2)
const divisao = (numero1/numero2)

if( opm === "adição"){
  alert("Resultado de " + numero1 + " + " + numero2 + " = " + adicao )
}
else if(opm === "subtração"){
 alert("Resultado de " + numero1 + " - " + numero2 + " = " + subtracao)
}
else if(opm === "multiplicação"){
 alert("Resultado de " + numero1 + " * " + numero2 + " = " + multiplicacao)
}
else if (opm=== "divisão"){
 alert("Resultado de " + numero1 + " ÷ " + numero2 + " = " + divisao)
}  
