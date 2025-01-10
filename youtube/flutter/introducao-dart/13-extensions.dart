// 13 - Extensions

void main() {
  String nome = "jefferson";
  print(Utils().toFirstCharToUpperCase(nome));
  print(nome.toFirstCharToUpperCase());
  print(EnumTest.enumValue.toValue());
}

enum EnumTest {
  enumValue;
}

extension ExtensionsEnum on Enum {
  String toValue() {
    Map map = {EnumTest.enumValue: "xpto"};
    return map[this];
  }
}

extension ExtensionString on String {
  String toFirstCharToUpperCase() {
    return this[0].toUpperCase() + this.substring(1);
  }
}

class Utils {
  toFirstCharToUpperCase(String value) {
    return value[0].toUpperCase() + value.substring(1);
  }
}
