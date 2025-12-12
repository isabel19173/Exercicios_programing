//Peça uma distância em quilômetros e converta para metros e centímetros.
alert("Conversão em Km para m e cm")
const km = Number(prompt("Digite quilômetros queria converter :"))
const m =(km*1000).toFixed(2)
const seg=(km*100000).toFixed(2)
alert(" A conversão de quilômetro: "+km+"km \n para metros : " +m+"m  \n e para centímetros: "+seg+"s")