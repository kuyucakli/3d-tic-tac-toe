import { useState } from 'react'
import './App.css'
import NavSecondary from './components/NavSecondary'
import BoardHeader from './components/BoardHeader';

import PieceX from "./assets/img/piece-x.svg";
import PieceO from "./assets/img/piece-o.svg";
import CanvasFx from './components/CanvasFx';
import type { Board, SquarePiece } from './types/index.dt.ts';
import { Move } from './types/index.dt.ts';


function TicTacToe() {
  const squarePieceRowCount = 3;

  return (
    <main>

      <NavSecondary />
      <section id="section-board">
        <Board squarePieceRowCount={squarePieceRowCount} onMove={() => null} />


      </section>
    </main>
  )
}



const Board = ({ squarePieceRowCount, onMove }: Board) => {
  const [moveHistory, setMoveHistory] = useState<Move[][]>([Array(Math.pow(squarePieceRowCount, 2)).fill(null)]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const currentMove = historyIndex % 2 ? Move.O : Move.X;

  const handleMove = (index: number) => {
    if (moveHistory[historyIndex][index] !== null) return;

    const newHistorySegment = [...moveHistory[historyIndex]];
    newHistorySegment[index] = currentMove;
    const newHistory = [...moveHistory.slice(0, historyIndex + 1), newHistorySegment];

    setMoveHistory(newHistory);
    setHistoryIndex(historyIndex + 1);
  };

  return (
    <>
      <BoardHeader currentMove={currentMove} />
      <div id="board" className="margin-center m-v-sm-1">
        <CanvasFx />
        <div
          id="board-surface"
          style={{ gridTemplateColumns: `repeat(${squarePieceRowCount}, 1fr)` }}
          onClick={(e) => {
            onMove();

            if (!(e.target instanceof HTMLDivElement)) {
              return;
            }

            const index = Number(e.target.dataset.index);

            handleMove(index);
          }}
        >
          {moveHistory[historyIndex].map((m, i) => (
            <SquarePiece key={i} content={m} index={i} />
          ))}
        </div>
        <div id="board-blend-filter"></div>
      </div>
      <ul>
        {moveHistory.map((_, i) => (
          <li onClick={() => setHistoryIndex(i)}>
            Go to {i == 0 ? "start" : "#" + i}
          </li>
        ))}
      </ul>
    </>
  )
}


const SquarePiece = ({ content, index }: SquarePiece) => (
  <div className="square-piece" data-index={index}>
    {Move[content] === "X" && <img src={PieceX} alt="X" />}
    {Move[content] === "O" && <img src={PieceO} alt="O" />}
  </div>
)


const checkWinner = (moves: Move[]) => {
  const winnerMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]

  for (const indexes of winnerMoves) {
    const [a, b, c] = indexes;
    if (moves[a] == moves[b] && moves[a] == moves[c]) {
      return moves[a];
    }
  }

  return null;


}

export default TicTacToe;
