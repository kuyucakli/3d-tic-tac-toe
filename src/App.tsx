import './App.css'
import { useState } from 'react'
import NavSecondary from './components/NavSecondary'
import BoardHeader from './components/BoardHeader';
import type { HistoryProps } from './types/index.dt.ts';
import { Move } from './types/index.dt.ts';
import Board from './components/Board.tsx';


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
