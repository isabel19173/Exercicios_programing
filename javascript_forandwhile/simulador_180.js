alert(" Simulação de Elevador\nPeso máximo: 180 kg:")
let pesoTotal = 0
for (let i = 1; i <= 10; i++) {
    let peso = Number(prompt("Digite seu peso: " + i + ":"))
    pesoTotal= peso + pesoTotal
     if(peso<180){
        alert(" Peso não está acima 180kg, pode entrar "+pesoTotal+"kg")
     }
    else if(peso === 180){
        alert("Peso está no atingido "+pesoTotal+"kg")
     break}
   
    else if(peso>180){
        alert("Peso está no limite, por favor alguém pode se retirar "+pesoTotal+"kg")
    break}
    
}
