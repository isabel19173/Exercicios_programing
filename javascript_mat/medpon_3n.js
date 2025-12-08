// Peça três notas e calcule a média ponderada, usando os pesos 2, 3 e 5.

let n1= Number(prompt(" Média ponderada de 3 notas \n Digite 1° nota:"))
let p1= 2
let n2 = Number( prompt ("Digite 2°a nota:"))
let p2= 3
let n3= Number( prompt ("Digite 3° nota:"))
let p3= 5

let x1= n1* p1
let x2=n2* p2
let x3= p3*n3

var soma =x1+x2+x3
let media = soma/(p1+p2+p3)

alert(" A média ponderada das três notas é: "+n1+", "+n2+" ,"+n3+". \n igual :"+media)
