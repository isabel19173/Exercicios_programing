//DESAFIO 03. Peça três números e diga qual é o menor.

var num = Number(prompt('Informa qual é menor número: \n Digite um número:'))
var num1= Number(prompt('Digite outro número:'))
var num2= Number(prompt('Digite outro número:'))

if(num > num1 && num > num2){
    alert("O primeiro número : "+num+"; É menor do que segundo número: " +num1+" terceiro número:  "+num2)
    
}
else if(num1< num && num1< num2){
    alert("O  segundo número : "+num1+"; É menor do que primeiro  número: "+num+" terceiro número:  "+num2)
}
else if(num2< num && num2< num1){
    alert("O  terceiro número : "+num2+"; É menor do que primeiro  número: "+num+" segundo número:  "+num1)
}