import { useState } from "react";
import { Move } from '../types/index.dt.ts';

const useStoredHistory = ({ }) => {

     const fromLocalStorage = () => {
          const l = localStorage.getItem("moveHistory");
          if (l) return JSON.parse(l) as Move[][];
          return [Array(9).fill(null)];
     }

     const toLocalStorage = (history: Move[][]) => {
          localStorage.setItem("moveHistory", JSON.stringify(history));
     }

     const [moveHistory, setMoveHistory] = useState<Move[][]>(fromLocalStorage());


     const addToHistory = (currentMove: Move, moveIndex: number, historyIndex = 0) => {
          if (moveHistory[historyIndex][moveIndex] !== null) return;

          const newHistorySegment = [...moveHistory[historyIndex]];
          newHistorySegment[moveIndex] = currentMove;
          const newHistory = [...moveHistory.slice(0, historyIndex + 1), newHistorySegment];


          toLocalStorage(newHistory);
          setMoveHistory(newHistory);
     }



     return { moveHistory, addToHistory };
}






export default useStoredHistory;