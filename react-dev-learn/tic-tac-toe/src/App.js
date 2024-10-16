// Importa o hook useState do React, que é usado para adicionar estado aos componentes funcionais.
import { useState } from 'react';

// Componente Square representa um único quadrado no tabuleiro de jogo.
function Square({ value, onSquareClick }) {
  return (
    // Renderiza um botão para o quadrado, exibindo o valor 'X' ou 'O' e chamando a função onSquareClick quando clicado.
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Componente Board representa o tabuleiro de jogo composto por 9 quadrados.
function Board({ xIsNext, squares, onPlay }) {
  // Função chamada quando um quadrado é clicado.
  function handleClick(i) {
    // Se já houver um vencedor ou o quadrado já estiver preenchido, não faz nada.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Cria uma cópia do estado atual dos quadrados.
    const nextSquares = squares.slice();
    // Define o próximo valor (X ou O) com base em quem é o próximo a jogar.
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Chama a função onPlay passando o novo estado dos quadrados.
    onPlay(nextSquares);
  }

  // Calcula se há um vencedor com base no estado atual dos quadrados.
  const winner = calculateWinner(squares);
  let status;
  // Se houver um vencedor, exibe quem venceu. Caso contrário, exibe quem é o próximo a jogar.
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      {/* Exibe o status atual do jogo. */}
      <div className="status">{status}</div>
      {/* Renderiza as três linhas de quadrados para formar o tabuleiro. */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Componente Game representa o jogo completo, incluindo o histórico de jogadas.
export default function Game() {
  // Cria um estado para armazenar o histórico de jogadas. Inicialmente, o tabuleiro é vazio.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Estado para armazenar o movimento atual no histórico.
  const [currentMove, setCurrentMove] = useState(0);
  // Determina se é a vez do 'X' com base no número do movimento.
  const xIsNext = currentMove % 2 === 0;
  // Obtém o estado atual do tabuleiro com base no movimento atual.
  const currentSquares = history[currentMove];

  // Função chamada quando um jogador faz uma jogada.
  function handlePlay(nextSquares) {
    // Cria um novo histórico de jogadas até o movimento atual e adiciona o novo estado dos quadrados.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Atualiza o histórico e define o movimento atual para o último.
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Função para saltar para um movimento anterior no histórico.
  function jumpTo(nextMove) {
    // Atualiza o movimento atual para o movimento selecionado.
    setCurrentMove(nextMove);
  }

  // Mapeia o histórico de jogadas para criar uma lista de botões para cada movimento.
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    // Renderiza um botão que, quando clicado, vai para o movimento correspondente no histórico.
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* Renderiza o componente Board passando o estado atual do jogo e a função de manipulação de jogadas. */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* Exibe a lista de botões para navegar pelo histórico de jogadas. */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Função para calcular se há um vencedor com base no estado atual do tabuleiro.
function calculateWinner(squares) {
  // Define todas as possíveis combinações vencedoras.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Itera sobre cada linha para verificar se todos os quadrados dessa linha têm o mesmo valor (X ou O).
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Retorna o valor vencedor (X ou O) se houver uma combinação vencedora.
      return squares[a];
    }
  }
  // Se não houver vencedor, retorna null.
  return null;
}
