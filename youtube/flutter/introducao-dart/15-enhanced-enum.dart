// 15 - Enhanced Enum

void main() {
  var pagamento = Pagamento();
  pagamento.pagar(TipoPagamento.PIX);
}

enum TipoPagamento {
  //PIX, BOLETO, CARTAO;

  PIX(1, "Pix"),
  BOLETO(2, "Boleto"),
  CARTAO(3, "Cartao");

  final String value;
  final int id;
  const TipoPagamento(this.id, this.value);
}

class Pagamento {
  void pagar(TipoPagamento tipoPagamento) {
    if (tipoPagamento.value == "Pix") {
      print("Pagando com pix ${tipoPagamento.id}...");
    } else if (tipoPagamento.value == "Boleto") {
      print("Pagando com Boleto ${tipoPagamento.id}...");
    } else if (tipoPagamento.value == "Cartao") {
      print("Pagando com Cartão ${tipoPagamento.id}...");
    }
  }
}
