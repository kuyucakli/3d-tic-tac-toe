import { useState } from 'react'
import './App.css'
import NavSecondary from './components/NavSecondary'
import BoardHeader from './components/BoardHeader';

import PieceX from "./assets/img/piece-x.svg";
import PieceO from "./assets/img/piece-o.svg";
import CanvasFx from './components/CanvasFx';
import type { Board, HistoryProps, SquarePiece } from './types/index.dt.ts';
import { Move } from './types/index.dt.ts';


function TicTacToe() {
  const squarePieceRowCount = 3;
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

  const handleChangeHistory = (index: number) => {
    setHistoryIndex(index)
  }

  return (
    <main>
      <NavSecondary />
      <section id="section-board">
        <BoardHeader currentMove={currentMove} />
        <Board onMove={handleMove} historyIndex={historyIndex} moveHistory={moveHistory} squarePieceRowCount={squarePieceRowCount} />
      </section>
      <History moveHistory={moveHistory} onHistoryChange={handleChangeHistory} />
    </main>
  )
}


const Board = ({ squarePieceRowCount, onMove, historyIndex, moveHistory }: Board) => {

  return (
    <div id="board" className="margin-center m-v-sm-1">
      <CanvasFx />
      <div
        id="board-surface"
        style={{ gridTemplateColumns: `repeat(${squarePieceRowCount}, 1fr)` }}
        onClick={(e) => {

          if (!(e.target instanceof HTMLDivElement)) {
            return;
          }

          const index = Number(e.target.dataset.index);

          onMove(index);
        }}
      >
        {moveHistory[historyIndex].map((m, i) => (
          <SquarePiece key={i} content={m} index={i} />
        ))}
      </div>
      <div id="board-blend-filter"></div>
    </div>
  )
}


const SquarePiece = ({ content, index }: SquarePiece) => (
  <div className="square-piece" data-index={index}>
    {Move[content] === "X" && <img src={PieceX} alt="X" />}
    {Move[content] === "O" && <img src={PieceO} alt="O" />}
  </div>
)

const History = ({ moveHistory, onHistoryChange }: HistoryProps) => (
  <ul>
    {moveHistory.map((_, i) => (
      <li onClick={() => onHistoryChange(i)}>
        Go to {i == 0 ? "start" : "#" + i}
      </li>
    ))}
  </ul>
)



export default TicTacToe;
