// 8 - Future, Async e Await

void main() async {
  String nome = "Jefferson";
  Future<String> cepFuture = getCepByName("Rua JK");
  late String cep;

  // cepFuture.then((result) => cep = result);

  cep = await cepFuture;

  print(cep);
}

// external service
// Future --> Faz uma requisição e só depois que ela termina que recebemos o resultado
Future<String> getCepByName(String name) {
  // simulando requisição
  return Future.value("324456000");
}
