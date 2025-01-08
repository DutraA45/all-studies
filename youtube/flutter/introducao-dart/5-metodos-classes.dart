// 5 - Metodos e Classes

void main() {
  Celular celularDoDeivid = Celular('Azul', 5, 0.800, 5.7);
  Celular celularDoZe = Celular('Preto', 10, 0.100, 5.7);

  print(celularDoDeivid.toString());
  print(celularDoZe.cor);

  double resultado = celularDoDeivid.valorDoCelular(1000);
  print(resultado);
}

class Celular {
  final String cor;
  final int qtdPros;
  final double tamanho;
  final double peso;

  Celular(this.cor, this.qtdPros, this.peso, this.tamanho);

  String toString() {
    return "Cor $cor, qtdPros $qtdPros, Peso $peso, Tamanho $tamanho";
  }

  double valorDoCelular(double valor) {
    return valor * qtdPros;
  }
}
