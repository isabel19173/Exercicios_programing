//Peça três valores e verifique se eles podem formar um triângulo.   
//  Se sim, peça a base e a altura e calcule a área do triângulo.   
//  Se não puderem formar um triângulo, mostre os valores lidos.


const a= Number(prompt(" Para verifica se forma um triângulo: \n Digite um  primerio valor: "))
const b= Number(prompt("Digite o 2° valor: "))
const c= Number (prompt("Digite o 3° valor: "))

if(a < b + c && b < a + c && c < a + b){
  
 const base =Number(prompt("Possível formar triângulo,\n Para descobrir àrea  \n Digite base do triângulo:"))
 const alt= Number(prompt("Digite altura:"))
 const area= (base*alt)/2
 alert(" Com base do triângulo e altura, a àrea do trângulo é"+area)
}
else {
    alert("Não é possível formar um triângulo, pois os segmentos " + a + ", " + b + ", " + c + " não satisfazem a condição.");
}
