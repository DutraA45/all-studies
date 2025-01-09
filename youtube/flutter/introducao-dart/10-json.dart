// 10 - JSON

import 'dart:convert';

void main() {
  //
  // Exemplo 1
  //

  String json = '''
    {
        "usuario": "jefferso@email.com",
        "senha": 123456,
        "permissoes": [
          "owner", "admin"
        ]
    }
''';
  print(json);

  // resultJson --> É um mapa
  // Através do jsonDecode é possivel transformar um JSON em objeto
  Map resultJson = jsonDecode(json);
  print(resultJson["permissoes"][0]);

  //
  // Exemplo 2
  //

  Map mapa = {
    "nome": "jefferson",
    "pass": 123,
    "permissions": ["owner", "admin"]
  };

  var result = jsonEncode(mapa);
  print(result);
}
