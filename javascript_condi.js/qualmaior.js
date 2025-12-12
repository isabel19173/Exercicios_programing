//15. Informar qual dos dois números é o maior

let num = Number(prompt('Informa qual é maior número entre dois números : \n Digite um número:'))
let num1= Number(prompt('Digite outro número:'))

if(num < num1){
    alert("O  segundo número : "+num1+"; É maior do que primeiro  número: "+num)
}
else{
    alert("O primeiro número : "+num+"; É maior do que segundo número: " +num1)
}