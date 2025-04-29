import './App.css'
import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer.tsx';
import NavSecondary from './components/NavSecondary'
import BoardHeader from './components/BoardHeader';
import type { HistoryProps } from './types/index.dt.ts';
import { Move } from './types/index.dt.ts';
import Board from './components/Board.tsx';
import { checkWinner } from './utils/index.ts';
import { GameInfoContext } from './context/GameInfoContext.ts';



function TicTacToe() {
  const squarePieceRowCount = 3;
  const [moveHistory, setMoveHistory] = useState<Move[][]>([Array(Math.pow(squarePieceRowCount, 2)).fill(null)]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const currentMove = historyIndex % 2 ? Move.O : Move.X;
  const winner = checkWinner(moveHistory[historyIndex]);




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
   
      <AudioPlayer />
      <NavSecondary />
      <GameInfoContext value={{ winner }}>
        <section id="section-board">
          <BoardHeader currentMove={currentMove} />
          <Board onMove={handleMove} historyIndex={historyIndex} moveHistory={moveHistory} squarePieceRowCount={squarePieceRowCount} />
        </section>
      </GameInfoContext>
      <History moveHistory={moveHistory} onHistoryChange={handleChangeHistory} />
    </main>
  )
}







const History = ({ moveHistory, onHistoryChange }: HistoryProps) => (
  <ul>
    {moveHistory.map((_, i) => (
      <li key={i} onClick={() => onHistoryChange(i)}>
        Go to {i == 0 ? "start" : "#" + i}
      </li>
    ))}
  </ul>
)



export default TicTacToe;
