import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:puc_flutter/search.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
              seedColor: Color.fromARGB(255, 40, 150, 115)),
          textTheme: GoogleFonts.acmeTextTheme()),
      home: Scaffold(
          appBar: AppBar(
              title: const Text(
            'Meu primeiro app em flutter',
            style: TextStyle(fontSize: 48, fontStyle: FontStyle.italic),
          )),
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
