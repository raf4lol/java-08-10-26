alert("Bem vindo(a) a aula de Switch Case");

let desicao; // Declarada fora para o while conseguir ler

do {
    let num1 = Number(prompt("Insira o primeiro numero"));
    let num2 = Number(prompt("Insira o segundo numero"));
    let escolha = Number(prompt("Digite 1 para soma\nDigite 2 para multiplicação"));

    let soma;
    let mult;

    switch (escolha) {
        case 1: {
            soma = num1 + num2;
            alert(`Você escolheu soma.\nA soma dos números é ${soma}`);
            break;
        }
        case 2: {
            mult = num1 * num2;
            alert(`Você escolheu multiplicação.\nO produto dos números é ${mult}`);
            break;
        }
        default: {
            alert("ERROR! Opção invalida");
            break;
        }
    }

    desicao = parseInt(prompt("Digite 1 para reiniciar o programa ou 2 para encerrar"));

} while (desicao === 1);
alert("programa encerrado") // Continua rodando enquanto o usuário digitar 1