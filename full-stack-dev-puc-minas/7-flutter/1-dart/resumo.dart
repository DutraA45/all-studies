// Declaração de variaveis
var myText = "meu texto";
String myOtherText = "meu outro texto";
int myInt = 5;
var myNumber = 5.8;
const myConst = 123;

// Declaração de um array
var myArray = [1, 2, 3, 4];

// Declaração de um objeto com estrutura de dados
Object myObject = {"key": "value"};

// Autorização que uma variavel pode ser nula
String? maybeNull;
Object? myOtherObject = {"key": "other value"};

// Declaração de uma variavel tardiamente, que será definida depois
late String notDefinedNow;

// Variavel que não é possivel modificar depois
final String thisIsFinal = "final string";

void main() {
  // Precisa da variavel com late definida antes da execução do projeto
  notDefinedNow = "Olá mundo";

  // No caso de uma evocação de variavel, o interrogação verifica se o object é nulo
  print(myOtherObject?.toString());
}
