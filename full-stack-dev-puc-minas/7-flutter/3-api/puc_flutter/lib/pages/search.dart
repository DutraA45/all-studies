import 'package:flutter/material.dart';

const possibleResults = ['puc', 'flutter', 'dart', 'programacao', 'estudos'];

class SearchPage extends StatefulWidget {
  const SearchPage({super.key});

  @override
  State<StatefulWidget> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  List<String>? filteredResults = possibleResults;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          decoration: const InputDecoration(
              labelText: 'Buscar por...',
              border: OutlineInputBorder(),
              icon: Icon(Icons.search)),
          onChanged: (value) {
            setState(() {
              filteredResults = possibleResults
                  .where((option) => option.contains(value))
                  .toList();
            });
          },
        ),
        Expanded(
            child: ListView.builder(
          itemCount: filteredResults?.length ?? 0,
          itemBuilder: (context, index) =>
              Text(filteredResults?.elementAt(index) ?? ''),
        ))
      ],
    );
  }
}
