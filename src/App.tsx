import './App.css'
import BoardHeader from './components/BoardHeader';
import { AudioCategory } from './types/index.dt.ts';
import Board from './components/Board.tsx';
import { useGameInfoContext } from './context/GameInfoContext.tsx';






function TicTacToe() {
  const { moveHistory, setMoveHistory, setHistoryIndex, historyIndex, playSound, currentMove } = useGameInfoContext();

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
    <>
      <main className="welcome-mode">
        <section id="section-board">
          <Board onMove={handleMove} moves={moveHistory[historyIndex]} squarePieceRowCount={3} />
          <BoardHeader currentMove={currentMove} />
        </section>
      </main>
    </>
  )
}








export default TicTacToe;
