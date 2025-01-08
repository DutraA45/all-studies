// 6 - Orientacao a Objetos

void main() {
  Carro mercedes = Carro("mercedes");
  Carro gol = Carro("gol");

  mercedes.valorDoCarro;
}

class Carro {
  final String modelo;
  // Encapsulamento começa com o underline
  // _segredo só é acessado dentro deste arquivo dart
  String _segredo = "Muito dinheiro";

  int _valor = 1000;

  // Getter
  int get valorDoCarro => _valor;

  // Setter
  void setValue(int valor) => _valor = valor;

  Carro(this.modelo);
}
