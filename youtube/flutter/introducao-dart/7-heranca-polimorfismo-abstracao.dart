// 7 - Herança, polimorfismo e Abstracao

void main() {
  // Teste Herança
  Jefferson jefferson = Jefferson();
  jefferson.falar();

  // Teste Polimorfismo
  Pagamento pagamento = PagarComBoleto();
  pagamento.pagar();

  pagamento = PagarComPix();
  pagamento.pagar();
}

// Conceito de abstracao, interface ou contratos
abstract class Pessoa {
  String comunicar();
}

class PessoaET implements Pessoa {
  // É necessario implementar a função comunicar, pois se não dará erro
  String comunicar() {
    return "Olá Mundo!";
  }
}

class PessoaNaoET implements Pessoa {
  String comunicar() {
    return "Bom dia";
  }
}

// Conceito de Herança
class Pai {
  String falar() {
    return "Papai";
  }
}

class Jefferson extends Pai {
  // Jefferson herda do pai o método falar
}

// Conceito de Polimorfismo
abstract class Pagamento {
  void pagar();
}

class PagarComBoleto implements Pagamento {
  void pagar() {
    print("Pagando com Boleto");
  }
}

class PagarComPix implements Pagamento {
  void pagar() {
    print("Pagando com Pix");
  }
}
