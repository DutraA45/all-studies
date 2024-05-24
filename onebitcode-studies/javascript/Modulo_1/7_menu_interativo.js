let opcao = "";

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma das opções abaixo:" + 
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Tres" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar"
    );

    switch (opcao) {
        case "1":
            alert("Voce escolheu a opção 1");
            break;
        case "2":
            alert("Voce escolheu a opção 2");
            break;
        case "3":
            alert("Voce escolheu a opção 3");
            break;
        case "4":
            alert("Voce escolheu a opção 4");
            break;
        case "5":
            alert("Você escolheu encerrar.");
            alert("Encerrando...");
            break;
        default:
            alert("Opção Inválida!");
    }

} while (opcao !== "5")