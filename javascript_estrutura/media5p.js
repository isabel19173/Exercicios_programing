// fub média de 5 pesos 
alert(" A média de você e seus amigos , abaixo digite seu peso e 4 amigos :")
const peso1= Number(prompt("Digite seu peso:"))
const peso2= Number(prompt("Digite 2ª peso:"))
const peso3= Number(prompt("Digite 3ª peso:"))
const peso4= Number(prompt("Digite 4ª peso:"))
const peso5= Number(prompt("Digite 5ª peso:"))
const soma= (peso1+peso2+peso3+peso4+peso5)

var resultado = (soma/ 5)

alert(" A média do seu peso " +peso1+ "kg  com seu primerio:" +peso2+ "kg segundo :" +peso3+ "kg terceiro: "+peso4+ "kg quarto: " +peso5+"kg é igual a " + resultado+"kg")