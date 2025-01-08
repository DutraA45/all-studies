// 2 - Introdução null-safety

void main() {
  // Null-safety --> Toda variavel DEVE ter um valor atribuido a ela, não pode ser nulo
  // A forma no dart para receber nulo é adicionar "?"" no final do tipo da variavel
  // Para garantir que a variavel que está utilizando não é nula, adicione "!" no final da variavel quando for utilizar
  // A variavel pode receber nulo depois de já ter recebido algum valor
  String? nome;
  nome = "Jefferson";
  print(nome!);
  nome = null;

  // late antes da String -> Indica que a variavel após receber um valor não poderá ser nula.
  late String sobrenome;
  sobrenome = "Dutra";
  print(sobrenome);
  sobrenome = null;
}
