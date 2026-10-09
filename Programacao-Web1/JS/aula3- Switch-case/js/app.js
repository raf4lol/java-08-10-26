alert("Bem vindo a aula")
let num1 = Number(prompt("Insira o primeiro numero"))
let num2 =  Number(prompt("insira o segundo numero"))

let escolha = Number(prompt("Digite 1 para soma ou 2 para multiplicação"))

switch(escolha) {
    case 1: {
        soma = num1 + num2
        alert("Voce escolheu soma. A soma dos numeros é"  ${soma})
    }
    break
     case 2: {
        mult = num1 + num2
        alert("Voce escolheu mu. O produto dos numeros é"  ${mult})
    }
    break
    default: alert("erro, opção invalida")
}