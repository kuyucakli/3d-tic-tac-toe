import './App.css'
import BoardHeader from './components/BoardHeader';
import { AudioCategory, Move } from './types/index.dt.ts';
import Board from './components/Board.tsx';
import { useGameInfoContext } from './context/GameInfoContext.tsx';





function TicTacToe() {
  const { moveHistory, setMoveHistory, setHistoryIndex, historyIndex, playSound } = useGameInfoContext();
  const currentMove = historyIndex % 2 ? Move.O : Move.X;




  const handleMove = (index: number) => {
    if (moveHistory[historyIndex][index] !== null) return;
    playSound && playSound(AudioCategory.MAKE_MOVE);
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
    </main>
  )
}






export default TicTacToe;
