//Peça o sexo da pessoa (H para homem, M para mulher) e a altura. Use as fórmulas para calcular o peso ideal:
//Homens: (72.7 × altura) - 58
//Mulheres: (62.1 × altura) - 44.7
alert("Calculadora de IMC")
const alt= Number(prompt("Digite sua altura em m:")).toFixed(2)
const sex = prompt("Digite seu sexo para H (homem) e M (mulher):")
const Homens= ((72.7* alt) - 58).toFixed(2)
const Mulheres= ((62.1 * alt) - 44.7).toFixed(2)
H=Homens
M= Mulheres
if (sex==="H") {
  alert("Para sua altura "+alt+"m  ,o peso ideal seria "+Homens+"kg")
}
else if (sex === "M"){
    alert("Para sua altura ideal "+alt+"m ,o peso ideal seria "+Mulheres+"kg")
}