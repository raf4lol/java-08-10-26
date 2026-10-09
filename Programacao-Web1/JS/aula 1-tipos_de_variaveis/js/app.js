/*
Tipos de variaveis

let (é uma variavel que pode mudar de valor)
const (significa constante, e não pode mudar de valor)
Exemplos
*/

let cpf = "00020293981"
console.log(cpf)
cpf = "213312312312"
console.log(cpf)

/*
Variaveis criadas fora de {} (bloco de instruções) são chamadas de variaveis de escopo global, ou seja, voce pode usar a variavel em qualquer parte do codigo
Variaveis criadas dentro  {bloco} após a saida do bloco, a variavel é deletada*/
//tipos de variaveis - OBS: Em JS não precisa declarar o tipo ou tipagem

let num1 = 10 //tipo int -Variaveis do tipo numerico
let num2 = 10.5 // tipo double
let nome = "Goku" // String
let verdade = true //Tipo boolean
let resposta //undefined
let saldo = null //variavel foi definida com valor nulo

//Como saber o tipo de variavel use o "typeof"
console.log(typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)
