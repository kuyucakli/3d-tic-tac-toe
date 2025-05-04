import './App.css'
import BoardHeader from './components/BoardHeader';
import { Move } from './types/index.dt.ts';
import Board from './components/Board.tsx';
import { checkWinner } from './utils/index.ts';
import { useGameInfoContext } from './context/GameInfoContext.tsx';


// import useAudio from './hooks/useAudio.ts';
// import introSound from './assets/audio/01.mp3'



function TicTacToe() {
  const { moveHistory, setMoveHistory, setHistoryIndex, historyIndex } = useGameInfoContext();
  const currentMove = historyIndex % 2 ? Move.O : Move.X;
  
  // const playSound = useAudio({ intro: introSound, make_move: introSound, winner_stroke: introSound, game_over: introSound });

  const handleMove = (index: number) => {
    if (moveHistory[historyIndex][index] !== null) return;

    const newHistorySegment = [...moveHistory[historyIndex]];
    newHistorySegment[index] = currentMove;
    const newHistory = [...moveHistory.slice(0, historyIndex + 1), newHistorySegment];

    setMoveHistory(newHistory);
    setHistoryIndex(historyIndex + 1);

  };





  return (
    <main className="welcome-mode">
      <section id="section-board">
        <BoardHeader currentMove={currentMove} />
        <Board onMove={handleMove} moves={moveHistory[historyIndex]} squarePieceRowCount={3} />
      </section>
      {/* <History moveHistory={moveHistory} onHistoryChange={handleChangeHistory} /> */}

    </main>
  )
}



// const History = ({ moveHistory, onHistoryChange }: HistoryProps) => (
//   <ul>
//     {moveHistory.map((_, i) => (
//       <li key={i} onClick={() => onHistoryChange(i)}>
//         Go to {i == 0 ? "start" : "#" + i}
//       </li>
//     ))}
//   </ul>
// )



export default TicTacToe;
