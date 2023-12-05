let saldo = prompt("Informe a quantidade de dinheiro inicial: ");
saldo = parseFloat(saldo);
let opcao = "";

do {
    opcao = prompt(
        "Saldo disponivel: R$" + saldo +
        "\n1. Adicionar dinheiro" + 
        "\n2. Sacar dinheiro" +
        "\n3. Encerrar"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe a quantidade de dinheiro a ser adicionado: "));
            break;
        case "2":
            saldo -= parseFloat(prompt("Informe a quantidade de dinheiro a ser sacado: "));
            break;
        case "3":
            alert("Você escolheu encerrar.");
            alert("Encerrando...");
            break;
        default:
            alert("Opção Inválida!");
    }
} while (opcao !== "3")