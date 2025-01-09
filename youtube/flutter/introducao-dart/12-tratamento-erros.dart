// 12 - Tratamentos de Erros

void main() {
  //
  // Exemplo 1
  //
  try {
    // tentar algo
    print((2 / 0).toInt());
  } catch (e, stackStrace) {
    // capturar erro
    print("printando o erro $e");
    // rethrow; // propagar o erro
    throw Exception("Ocorreu um erro xpto"); // retornar um novo erro
  }

  //
  // Exemplo 2
  //

  Login login = Login();

  try {
    login.logar();
  } on PasswordLengthError catch (e) {
    print("Falhou ao logar");
  } catch (e) {
    print("Outro erro");
  } finally {
    print("Finalizou");
  }
}

class Login {
  void logar() {
    String user = "admin";
    String pass = "123";

    if (pass.length <= 6) throw PasswordLengthError();
  }
}

// Erro personalizado
class PasswordLengthError implements Exception {
  PasswordLengthError();
}
