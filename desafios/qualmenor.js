//DESAFIO 03. Peça três números e diga qual é o menor.

let num = Number(prompt('Informa qual é menor número: \n Digite um número:'))
let num1= Number(prompt('Digite outro número:'))
let num2= Number(prompt('Digite outro número:'))

if(num <= num1 && num <= num2){
    alert("O primeiro número : "+num+"; É menor do que segundo número: " +num1+" e terceiro número:  "+num2)
}
else if(num1<= num && num1<= num2){
    alert("O  segundo número : "+num1+"; É menor do que primeiro  número: "+num+" e terceiro número:  "+num2)
}
else {
    alert("O  terceiro número : "+num2+"; É menor do que primeiro  número: "+num+" e segundo número:  "+num1)
}