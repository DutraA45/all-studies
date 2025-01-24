import 'package:flutter/material.dart';
import 'package:puc_flutter/pages/search.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(title: const Text('Meu primeiro app em flutter')),
          bottomNavigationBar: BottomNavigationBar(items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
            BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Busca'),
            BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Perfil')
          ]),
          body: const Padding(
              padding: EdgeInsets.symmetric(vertical: 6, horizontal: 12),
              child: SearchPage())),
    );
  }
}
