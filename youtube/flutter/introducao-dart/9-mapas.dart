// 9 - Mapas
void main() {
  // Lista
  List<String> lista = ["Jefferson", "Dutra"];
  print(lista[0]);

  // Mapa (Chave, Valor)
  Map<String, String> mapa = {"chave": "valor"};
  print(mapa["chave"]);

  // Adicionar valores
  mapa.putIfAbsent("novaChave", () => "novoValor");
  print(mapa["novaChave"]);

  // Adicionar valores (Outra maneira)
  mapa["novaChaveDois"] = "novoValorDois";
  print(mapa["novaChaveDois"]);

  // Remover valores
  mapa.remove("chave");
  print(mapa);

  // Atualizar valores
  mapa["novaChaveDois"] = "atualizado";
  print(mapa);

  // Atualizar valores (Outra maneira)
  mapa.update("novaChaveDois", (value) => "atualizado2");
  print(mapa);

  // Iterar sobre o mapa
  mapa.forEach(
      (chave, valor) => print("A chave eh: $chave, o valor eh $valor"));

  // Iterar sobre o mapa somente as chaves
  mapa.keys.forEach(print);

  // Iterar sobre o mapa somente os valores
  mapa.values.forEach(print);
}
