// 11 - Callable Interface (CALL)

void main() {
  BuscarAlunos buscarAlunos = BuscarAlunos();
  buscarAlunos();
}

class BuscarAlunos {
  void call() => print("deivid, william, fabiano"); // Callable Interface
}
