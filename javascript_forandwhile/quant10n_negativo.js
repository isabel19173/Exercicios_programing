alert(" Verificação se números são negativos ou positivos:")
let sinal = 0
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite o número: " + i + ":"))
     if( num< 0){
        sinal --
   alert(" Quantidade de negativos é "+sinal)
     }}
